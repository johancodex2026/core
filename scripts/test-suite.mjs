#!/usr/bin/env node

import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifestPath = join(root, "assurance/suite-manifest.json");
const reportPath = resolve(root, process.env.CORE_V5_ASSURANCE_REPORT ?? "artifacts/core-v5-assurance-report.json");

const report = {
  suite_version: "unknown",
  generated_at: new Date().toISOString(),
  repository_head: null,
  overall_status: "FAIL",
  layers: [],
  summary: { passed: 0, failed: 0, informational: 0 },
  limitations: []
};

function layer(id, name) {
  const item = { id, name, status: "PASS", checks: [] };
  report.layers.push(item);
  return item;
}

function check(target, id, status, message, evidence = []) {
  target.checks.push({ id, status, message, evidence });
  if (status === "FAIL") {
    target.status = "FAIL";
    report.summary.failed += 1;
  } else if (status === "PASS") report.summary.passed += 1;
  else report.summary.informational += 1;
}

async function exists(path) {
  try { await stat(path); return true; } catch { return false; }
}
async function text(path) { return readFile(path, "utf8"); }
async function json(path) { return JSON.parse(await text(path)); }

async function walk(directory) {
  if (!(await exists(directory))) return [];
  const out = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

function runNodeScript(scriptPath) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: root,
    encoding: "utf8",
    env: { ...process.env, CORE_V5_UNIFIED_SUITE_CHILD: "1" }
  });
}

function gitHead() {
  const result = spawnSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" });
  return result.status === 0 ? result.stdout.trim() : null;
}

function sorted(value) { return [...value].sort(); }
function arraysEqual(a, b) { return JSON.stringify(sorted(a)) === JSON.stringify(sorted(b)); }
function getPath(object, path) { return path.reduce((current, key) => current?.[key], object); }

function localRefs(value, refs = []) {
  if (Array.isArray(value)) for (const item of value) localRefs(item, refs);
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (key === "$ref" && typeof item === "string" && !item.startsWith("http") && !item.startsWith("#")) refs.push(item);
      else localRefs(item, refs);
    }
  }
  return refs;
}

function schemaIds(value, ids = []) {
  if (Array.isArray(value)) for (const item of value) schemaIds(item, ids);
  else if (value && typeof value === "object") {
    if (typeof value.$id === "string") ids.push(value.$id);
    for (const item of Object.values(value)) schemaIds(item, ids);
  }
  return ids;
}

function lintYamlSubset(content, fileName) {
  const errors = [];
  const lines = content.split(/\r?\n/);
  const seen = new Map();
  const parentKeys = new Map();
  const listEpochs = new Map();
  let blockScalarIndent = null;

  if (content.includes("\t")) errors.push("tabs are forbidden");
  if (/(^|\s)<<\s*:/.test(content)) errors.push("YAML merge keys are forbidden");
  if (/(^|\s)!![A-Za-z]/.test(content) || /!<[^>]+>/.test(content)) errors.push("explicit YAML tags are forbidden");
  if (/(^|\s)&[A-Za-z0-9_-]+/.test(content)) errors.push("YAML anchors are forbidden");
  if (/(^|\s)\*[A-Za-z0-9_-]+/.test(content)) errors.push("YAML aliases are forbidden");

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    if (!raw.trim() || raw.trimStart().startsWith("#")) continue;
    const indent = raw.length - raw.trimStart().length;
    if (blockScalarIndent !== null) {
      if (indent > blockScalarIndent) continue;
      blockScalarIndent = null;
    }
    if (indent % 2 !== 0) errors.push(`line ${index + 1}: indentation must use multiples of two spaces`);
    const body = raw.trimStart();
    for (const key of [...parentKeys.keys()]) if (key >= indent) parentKeys.delete(key);
    for (const key of [...listEpochs.keys()]) if (key > indent) listEpochs.delete(key);

    let mappingText = body;
    if (body === "-" || body.startsWith("- ")) {
      const epoch = (listEpochs.get(indent) ?? 0) + 1;
      listEpochs.set(indent, epoch);
      parentKeys.set(indent, `<item:${epoch}>`);
      mappingText = body.slice(1).trimStart();
      if (!mappingText) continue;
    }

    const match = mappingText.match(/^([A-Za-z0-9_.-]+)\s*:(?:\s|$)/);
    if (!match) continue;
    const key = match[1];
    const ancestorPath = [...parentKeys.entries()]
      .filter(([level]) => level < indent)
      .sort(([a], [b]) => a - b)
      .map(([, value]) => value)
      .join("/");
    const scopeKey = `${ancestorPath}|${indent}|${key}`;
    if (seen.has(scopeKey)) errors.push(`line ${index + 1}: duplicate key '${key}' first seen at line ${seen.get(scopeKey)}`);
    else seen.set(scopeKey, index + 1);

    const remainder = mappingText.slice(match[0].length).trim();
    if (remainder === "|" || remainder === ">") {
      blockScalarIndent = indent;
      parentKeys.set(indent, key);
    } else if (!remainder) parentKeys.set(indent, key);
  }
  return errors.map((error) => `${fileName}: ${error}`);
}

function evaluateScenario(input, taxonomy) {
  const findings = new Set();
  const claims = input.claims ?? [];
  const receipts = input.receipts ?? [];

  if (input.mode === "ASSISTIVE_NON_CANONICAL") {
    if ((input.memory_count ?? 0) > 0 || ["ACTIVE", "REPAIR_OPEN"].includes(input.relationship_state) || (input.action_requests ?? 0) > 0) findings.add("MODE_VIOLATION");
  }

  for (const claim of claims) {
    const receiptTypes = claim.receipt_types ?? [];
    if (claim.class === "MEMORY_CONFIRMED" && claim.memory_source === false) findings.add("FABRICATED_MEMORY");
    if (claim.class === "OPERATIONAL_STATE" && (!receiptTypes.includes("SOURCE_READ") || claim.currentness !== "CURRENT")) findings.add("EVIDENCE_REQUIRED");
    if (claim.result_kind === "EXECUTION" && !receiptTypes.includes("EXECUTION")) {
      findings.add("FABRICATED_EXECUTION");
      findings.add("ACTION_RECEIPT_REQUIRED");
    }
    if (claim.result_kind === "VALIDATION" && !receiptTypes.includes("VALIDATION")) findings.add("EVIDENCE_REQUIRED");
    if (claim.result_kind === "PERSISTENCE" && !receiptTypes.includes("PERSISTENCE")) findings.add("EVIDENCE_REQUIRED");
  }

  if (input.final_response_before_action_receipt && claims.some((claim) => claim.result_kind && claim.result_kind !== "NONE")) findings.add("ACTION_RECEIPT_REQUIRED");
  if (input.praise && !input.praise_basis) findings.add("UNSUPPORTED_PRAISE");
  if ((input.organ_payload_keys ?? []).some((key) => ["identity_override", "final_answer", "system_instruction", "response_to_user"].includes(key))) findings.add("AUTHORITY_CONFLICT");
  if (input.digest_match === false) findings.add("DIGEST_MISMATCH");
  if (input.response_authorization_used_for_action) findings.add("AUTHORITY_CONFLICT");
  if (input.memory_fallback_used) findings.add("MEMORY_FALLBACK_FORBIDDEN");

  for (const receipt of receipts) {
    const allowed = taxonomy.receipt_statuses_by_type?.[receipt.type] ?? [];
    if (!allowed.includes(receipt.status)) findings.add("RECEIPT_SEMANTIC_MISMATCH");
  }

  const detected = new Set(input.detected_findings ?? []);
  const preserved = new Set(input.preserved_findings ?? []);
  if ([...detected].some((finding) => !preserved.has(finding))) findings.add("FINDING_LOSS");
  return sorted(findings);
}

function stageOrderErrors(content, expectedStages) {
  const errors = [];
  let previous = -1;
  for (const stage of expectedStages) {
    const index = content.indexOf(`- id: ${stage}`);
    if (index < 0) errors.push(`missing stage ${stage}`);
    else if (index <= previous) errors.push(`stage ${stage} is out of order`);
    previous = Math.max(previous, index);
  }
  return errors;
}

function taxonomyErrors(taxonomy, schemas) {
  const errors = [];
  const comparisons = [
    ["risk_classes", getPath(schemas["schemas/action-request.schema.json"], ["properties", "risk_class", "enum"])],
    ["identity_modes", getPath(schemas["schemas/presence-context.schema.json"], ["properties", "metadata", "properties", "mode", "enum"])],
    ["identity_load_statuses", getPath(schemas["schemas/presence-context.schema.json"], ["properties", "identity", "properties", "load_status", "enum"])],
    ["gate_phases", getPath(schemas["schemas/gate-result.schema.json"], ["properties", "phase", "enum"])],
    ["gate_dispositions", getPath(schemas["schemas/gate-result.schema.json"], ["properties", "disposition", "enum"])],
    ["finding_severities", getPath(schemas["schemas/gate-result.schema.json"], ["properties", "highest_severity", "enum"])],
    ["authorization_kinds", getPath(schemas["schemas/authorization-decision.schema.json"], ["properties", "authorization_kind", "enum"])],
    ["authorization_subject_types", getPath(schemas["schemas/authorization-decision.schema.json"], ["properties", "subject_type", "enum"])],
    ["authorization_statuses", getPath(schemas["schemas/authorization-decision.schema.json"], ["properties", "status", "enum"])],
    ["action_request_states", getPath(schemas["schemas/action-request.schema.json"], ["properties", "state", "enum"])],
    ["turn_plan_modes", getPath(schemas["schemas/turn-plan.schema.json"], ["properties", "mode", "enum"])],
    ["receipt_types", getPath(schemas["schemas/receipt.schema.json"], ["properties", "receipt_type", "enum"])],
    ["claim_classes", getPath(schemas["schemas/claim-map.schema.json"], ["properties", "claims", "items", "properties", "class", "enum"])],
    ["claim_result_kinds", getPath(schemas["schemas/claim-map.schema.json"], ["properties", "claims", "items", "properties", "result_kind", "enum"])]
  ];
  for (const [name, actual] of comparisons) if (!Array.isArray(actual) || !arraysEqual(taxonomy[name], actual)) errors.push(`${name} diverges from schema`);
  const findingCodes = getPath(schemas["schemas/gate-result.schema.json"], ["properties", "findings", "items", "properties", "code", "enum"]);
  if (!Array.isArray(findingCodes) || !arraysEqual(taxonomy.gate_findings, findingCodes)) errors.push("gate_findings diverges from gate-result schema");
  return errors;
}

function metaTests(manifest, taxonomy) {
  const outcomes = [];
  const swapped = [...manifest.critical_stage_order];
  const a = swapped.indexOf("collect_action_receipts");
  const b = swapped.indexOf("judge_final");
  [swapped[a], swapped[b]] = [swapped[b], swapped[a]];
  outcomes.push({ id: "mutation-stage-order", passed: stageOrderErrors(swapped.map((id) => `- id: ${id}`).join("\n"), manifest.critical_stage_order).length > 0 });
  const mutatedTaxonomy = structuredClone(taxonomy);
  mutatedTaxonomy.risk_classes = ["NONE", "LOW", "MEDIUM", "HIGH", "CRITICAL"];
  outcomes.push({ id: "mutation-risk-taxonomy", passed: !arraysEqual(mutatedTaxonomy.risk_classes, taxonomy.risk_classes) });
  outcomes.push({ id: "mutation-assistive-memory", passed: evaluateScenario({ mode: "ASSISTIVE_NON_CANONICAL", memory_count: 1 }, taxonomy).includes("MODE_VIOLATION") });
  outcomes.push({ id: "mutation-receipt-status", passed: evaluateScenario({ receipts: [{ type: "SEND", status: "PROMOTED" }] }, taxonomy).includes("RECEIPT_SEMANTIC_MISMATCH") });
  outcomes.push({ id: "mutation-digest", passed: evaluateScenario({ digest_match: false }, taxonomy).includes("DIGEST_MISMATCH") });
  outcomes.push({ id: "mutation-finding-loss", passed: evaluateScenario({ detected_findings: ["UNSUPPORTED_PRAISE", "PRIVACY_INTRUSION"], preserved_findings: ["UNSUPPORTED_PRAISE"] }, taxonomy).includes("FINDING_LOSS") });
  return outcomes;
}

async function main() {
  const a0 = layer("A0", "bootstrap");
  let manifest;
  let taxonomy;
  try {
    manifest = await json(manifestPath);
    taxonomy = await json(join(root, "governance/semantic-taxonomy.json"));
    report.suite_version = manifest.suite_version;
    report.limitations = manifest.limitations;
    report.repository_head = gitHead();
    check(a0, "manifest-load", "PASS", "Suite manifest and semantic taxonomy loaded.", [relative(root, manifestPath)]);
  } catch (error) {
    check(a0, "manifest-load", "FAIL", `Bootstrap failed: ${error.message}`, []);
    await finish();
    return;
  }

  for (const requiredFile of manifest.required_files) {
    const present = await exists(join(root, requiredFile));
    check(a0, `required:${requiredFile}`, present ? "PASS" : "FAIL", present ? "Required file exists." : "Required file is missing.", [requiredFile]);
  }

  const a1 = layer("A1", "subordinate_validators");
  for (const validator of manifest.subordinate_validators) {
    const result = runNodeScript(join(root, validator));
    const status = result.status === 0 ? "PASS" : "FAIL";
    const combined = `${result.stdout ?? ""}${result.stderr ?? ""}`.trim();
    check(a1, `validator:${validator}`, status, status === "PASS" ? "Subordinate validator passed." : "Subordinate validator failed.", [combined.slice(0, 4000)]);
  }

  const a2 = layer("A2", "syntax_json_yaml");
  const jsonFiles = [...(await walk(join(root, "schemas"))), ...(await walk(join(root, "governance"))), ...(await walk(join(root, "assurance")))].filter((path) => extname(path) === ".json");
  const parsedJson = {};
  for (const path of jsonFiles) {
    const name = relative(root, path);
    try { parsedJson[name] = JSON.parse(await text(path)); check(a2, `json:${name}`, "PASS", "JSON parses.", [name]); }
    catch (error) { check(a2, `json:${name}`, "FAIL", `Invalid JSON: ${error.message}`, [name]); }
  }

  const yamlFiles = [];
  for (const base of ["core/v5", "governance", "evaluation", ".github"]) yamlFiles.push(...(await walk(join(root, base)));
  for (const path of yamlFiles.filter((item) => [".yaml", ".yml"].includes(extname(item)))) {
    const name = relative(root, path);
    const lintErrors = lintYamlSubset(await text(path), name);
    if (lintErrors.length) check(a2, `yaml:${name}`, "FAIL", "YAML strict-subset lint failed.", lintErrors);
    else check(a2, `yaml:${name}`, "PASS", "YAML strict-subset lint passed.", [name]);
  }

  const a3 = layer("A3", "schema_ids_and_refs");
  const schemaEntries = Object.entries(parsedJson).filter(([path]) => path.startsWith("schemas/"));
  const idOwners = new Map();
  for (const [path, schema] of schemaEntries) {
    for (const id of schemaIds(schema)) {
      if (idOwners.has(id)) check(a3, `schema-id:${id}`, "FAIL", "Duplicate schema $id.", [idOwners.get(id), path]);
      else idOwners.set(id, path);
    }
  }
  check(a3, "schema-id-unique-summary", idOwners.size === schemaEntries.length ? "PASS" : "FAIL", "Top-level schema IDs are unique.", [`${idOwners.size}/${schemaEntries.length}`]);
  for (const [path, schema] of schemaEntries) {
    for (const ref of localRefs(schema)) {
      const target = join(root, dirname(path), ref.split("#")[0]);
      const present = await exists(target);
      check(a3, `ref:${path}:${ref}`, present ? "PASS" : "FAIL", present ? "Local $ref resolves." : "Local $ref is missing.", [path, ref]);
    }
  }

  const a4 = layer("A4", "semantic_taxonomy");
  const taxErrors = taxonomyErrors(taxonomy, parsedJson);
  if (taxErrors.length) for (const error of taxErrors) check(a4, `taxonomy:${error}`, "FAIL", error, []);
  else check(a4, "taxonomy-integration", "PASS", "Shared enums match the canonical semantic taxonomy.", ["governance/semantic-taxonomy.json"]);
  const pkg = await json(join(root, "package.json"));
  const identity = await text(join(root, "core/v5/identity_capsule.yaml"));
  const state = await text(join(root, "docs/repository/STATE.md"));
  const architecture = await text(join(root, "docs/architecture/ARCHITECTURE.md"));
  check(a4, "package-identity-version", identity.includes(`core_version: "${pkg.version}"`) ? "PASS" : "FAIL", "Identity capsule matches package version.", [pkg.version]);
  const architectureVersion = state.match(/architecture_version:\s*([^\s]+)/)?.[1] ?? null;
  check(a4, "architecture-state-version", architectureVersion && architecture.includes(`Versão: \`${architectureVersion}\``) ? "PASS" : "FAIL", "Architecture document matches repository state version.", [String(architectureVersion)]);

  const a5 = layer("A5", "cognitive_orchestration");
  const presenceLoop = await text(join(root, "core/v5/presence_loop.yaml"));
  const orderErrors = stageOrderErrors(presenceLoop, manifest.critical_stage_order);
  if (orderErrors.length) for (const error of orderErrors) check(a5, `stage:${error}`, "FAIL", error, []);
  else check(a5, "stage-order", "PASS", "Cognitive stages are present in the required order.", manifest.critical_stage_order);
  for (const legacy of ["authorize_external_actions", "execute_authorized_actions"]) check(a5, `legacy-stage:${legacy}`, presenceLoop.includes(`- id: ${legacy}`) ? "FAIL" : "PASS", presenceLoop.includes(`- id: ${legacy}`) ? "Legacy post-response action stage remains." : "Legacy post-response action stage absent.", [legacy]);
  for (const marker of ["action_receipts_precede_final_result_claims", "action_request_does_not_accumulate_execution_state", "response_authorization_is_not_action_authorization", "render_precedes_send_authorization"]) check(a5, `invariant:${marker}`, presenceLoop.includes(marker) ? "PASS" : "FAIL", presenceLoop.includes(marker) ? "Cognitive invariant present." : "Cognitive invariant missing.", [marker]);

  const a6 = layer("A6", "claims_evidence_anti_hallucination");
  const gateSchema = parsedJson["schemas/gate-result.schema.json"];
  const gateSeparated = Boolean(gateSchema?.properties?.disposition && gateSchema?.properties?.findings && !gateSchema?.properties?.status);
  check(a6, "gate-disposition-findings", gateSeparated ? "PASS" : "FAIL", gateSeparated ? "Gate separates disposition from findings." : "Gate still mixes disposition/findings.", ["schemas/gate-result.schema.json"]);
  const actionProperties = Object.keys(parsedJson["schemas/action-request.schema.json"]?.properties ?? {});
  const actionImmutable = ["authorized", "executed", "verified"].every((field) => !actionProperties.includes(field));
  check(a6, "action-request-immutable", actionImmutable ? "PASS" : "FAIL", actionImmutable ? "Action Request has no authorization/execution state." : "Action Request accumulates external state.", []);
  const receiptText = JSON.stringify(parsedJson["schemas/receipt.schema.json"]);
  const receiptMapComplete = Object.keys(taxonomy.receipt_statuses_by_type).every((type) => receiptText.includes(`"const":"${type}"`));
  check(a6, "receipt-type-status-map", receiptMapComplete ? "PASS" : "FAIL", receiptMapComplete ? "Receipt type/status compatibility is explicit." : "Receipt type/status compatibility is incomplete.", []);
  for (const schemaPath of ["schemas/source-reference.schema.json", "schemas/receipt.schema.json", "schemas/authorization-decision.schema.json", "schemas/claim-map.schema.json", "schemas/gate-result.schema.json", "schemas/presence-context.schema.json"]) {
    const schemaText = JSON.stringify(parsedJson[schemaPath]);
    check(a6, `typed-digest:${schemaPath}`, schemaText.includes("digest-reference.schema.json") ? "PASS" : "FAIL", schemaText.includes("digest-reference.schema.json") ? "Material digest uses typed reference." : "Material digest remains untyped.", [schemaPath]);
  }

  const a7 = layer("A7", "authority_privacy_legacy");
  const presenceSchemaText = JSON.stringify(parsedJson["schemas/presence-context.schema.json"]);
  for (const marker of ["ASSISTIVE_NON_CANONICAL", "canonized_action_requests", "turn_plan", "NO_ELIGIBLE_RESULT"]) check(a7, `presence:${marker}`, presenceSchemaText.includes(marker) ? "PASS" : "FAIL", presenceSchemaText.includes(marker) ? "Presence context contains boundary." : "Presence context boundary missing.", [marker]);
  const assistiveNoActions = presenceSchemaText.includes('"canonized_action_requests":{"maxItems":0}');
  check(a7, "assistive-no-actions", assistiveNoActions ? "PASS" : "FAIL", assistiveNoActions ? "Assistive mode forbids action requests." : "Assistive mode action prohibition not detected.", []);
  for (const marker of ["core4_migration: NOT_AUTHORIZED", "memory_migration: NOT_AUTHORIZED", "sedimentation: DISABLED", "runtime_authorized: false"]) check(a7, `state:${marker}`, state.includes(marker) ? "PASS" : "FAIL", state.includes(marker) ? "Safety boundary preserved." : "Safety boundary missing.", [marker]);

  const a8 = layer("A8", "planning_state_promotion");
  const g1 = await text(join(root, "planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md"));
  for (const marker of ["g0_human_decision: PENDING", "G1", "HOLD"]) check(a8, `gate:${marker}`, state.includes(marker) || g1.includes(marker) ? "PASS" : "FAIL", `Planning/gate marker ${marker}.`, [marker]);
  const governanceText = await text(join(root, "GOVERNANCE.md"));
  const mainNotPromotion = state.includes("commit em `main`") || governanceText.includes("Commit em `main`");
  check(a8, "main-not-promotion", mainNotPromotion ? "PASS" : "FAIL", mainNotPromotion ? "Main remains integration, not promotion." : "Main/promotion boundary missing.", []);

  const a9 = layer("A9", "scenario_fixtures");
  const fixtures = parsedJson["assurance/fixtures/scenarios.json"];
  for (const scenario of fixtures.scenarios ?? []) {
    const actual = evaluateScenario(scenario.input ?? {}, taxonomy);
    const expected = sorted(scenario.expected_findings ?? []);
    check(a9, `scenario:${scenario.id}`, arraysEqual(actual, expected) ? "PASS" : "FAIL", arraysEqual(actual, expected) ? "Scenario produced expected findings." : "Scenario findings diverged.", [`expected=${JSON.stringify(expected)}`, `actual=${JSON.stringify(actual)}`]);
  }

  const a10 = layer("A10", "mutation_meta_tests");
  for (const test of metaTests(manifest, taxonomy)) check(a10, test.id, test.passed ? "PASS" : "FAIL", test.passed ? "Deliberate mutation was detected." : "Suite failed to detect deliberate mutation.", []);

  const a11 = layer("A11", "coverage_and_limits");
  check(a11, "known-classes", manifest.known_hallucination_classes.length >= 10 ? "PASS" : "FAIL", "Known hallucination/drift classes are enumerated.", manifest.known_hallucination_classes);
  for (const limitation of manifest.limitations) check(a11, `limit:${limitation.slice(0, 24)}`, "INFO", limitation, []);
  check(a11, "absolute-proof-boundary", taxonomy.boundaries.static_suite_proves_no_universal_absence_of_hallucination === true ? "PASS" : "FAIL", "The suite explicitly denies universal proof of no hallucination.", []);
  await finish();
}

async function finish() {
  report.overall_status = report.summary.failed === 0 ? "PASS" : "FAIL";
  await mkdir(dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`Core V5 Unified Assurance Suite: ${report.overall_status}`);
  console.log(`- passed: ${report.summary.passed}`);
  console.log(`- failed: ${report.summary.failed}`);
  console.log(`- informational: ${report.summary.informational}`);
  console.log(`- report: ${relative(root, reportPath)}`);
  console.log("- boundary: structural PASS does not prove universal absence of hallucination, behavior, identity, continuity or promotion");
  if (report.overall_status !== "PASS") process.exitCode = 1;
}

main().catch(async (error) => {
  const bootstrap = report.layers.find((item) => item.id === "A0") ?? layer("A0", "bootstrap");
  check(bootstrap, "unhandled-error", "FAIL", error.stack ?? error.message, []);
  await finish();
});
