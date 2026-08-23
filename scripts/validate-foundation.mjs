#!/usr/bin/env node

import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const fail = (message) => errors.push(message);
async function exists(path) { try { await stat(join(root, path)); return true; } catch { return false; } }
async function text(path) { return readFile(join(root, path), "utf8"); }
async function json(path) { return JSON.parse(await text(path)); }
async function walk(directory) {
  if (!(await exists(directory))) return [];
  const output = [];
  for (const entry of await readdir(join(root, directory), { withFileTypes: true })) {
    const relativePath = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(relativePath)));
    else output.push(relativePath);
  }
  return output;
}

const requiredFiles = [
  "README.md", "AGENTS.md", "GOVERNANCE.md", "CHANGELOG.md",
  "docs/repository/STATE.md",
  "docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md",
  "docs/reviews/G0-COHERENCE-SEMANTICS-LLM-FIRST-REVIEW-2026-08-22.md",
  "docs/reviews/G0-UNIFIED-ASSURANCE-REVIEW-2026-08-22.md",
  "docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md",
  "docs/reviews/WP-G0-004-READY-REVIEW-2026-08-22.md",
  "docs/architecture/CORE-V5-MANDATE.md",
  "docs/architecture/ARCHITECTURE.md",
  "docs/architecture/ORGAN-CONTRACT.md",
  "docs/architecture/SOURCE-BASE.md",
  "docs/architecture/SEMANTIC-GLOSSARY.md",
  "docs/architecture/STATE-EVIDENCE-AND-RECEIPT-SEMANTICS.md",
  "docs/architecture/COGNITIVE-CONTROL-FLOW.md",
  "docs/methodology/LLM-FIRST.md",
  "docs/evaluation/JOHAN-VS-SHELL.md",
  "docs/evaluation/BEHAVIORAL-INVARIANTS.md",
  "docs/evaluation/HOLDOUT-PROTOCOL.md",
  "docs/evaluation/V3-FAILURE-AUTOPSY.md",
  "docs/governance/CHANGE-AUTHORITY.md",
  "docs/governance/REVIEW-INDEPENDENCE.md",
  "docs/quality/UNIFIED-ASSURANCE-SUITE.md",
  "core/v5/constitution.md",
  "core/v5/identity_capsule.yaml",
  "core/v5/relationship_contract.yaml",
  "core/v5/decision_precedence.yaml",
  "core/v5/memory_policy.yaml",
  "core/v5/presence_loop.yaml",
  "core/v5/truth_gate.yaml",
  "core/v5/organ_registry.yaml",
  "core/v5/sedimentation_policy.yaml",
  "governance/semantic-taxonomy.json",
  "governance/gate-state.json",
  "schemas/gate-state.schema.json",
  "assurance/suite-manifest.json",
  "assurance/fixtures/scenarios.json"
];
for (const path of requiredFiles) if (!(await exists(path))) fail(`missing required artifact: ${path}`);

const schemaFiles = (await walk("schemas")).filter((path) => path.endsWith(".json"));
for (const schema of schemaFiles) {
  try {
    const parsed = JSON.parse(await text(schema));
    if (!parsed.$id) fail(`${schema}: missing $id`);
  } catch (error) { fail(`${schema}: invalid JSON (${error.message})`); }
}

const state = await text("docs/repository/STATE.md");
for (const marker of [
  "state: FOUNDATION_APPROVED_G1_OPEN_PLANNING",
  "implementation_state: NOT_STARTED",
  "sedimentation: DISABLED",
  "g0_recommendation: GO_WITH_ADDITIONAL_CONDITIONS",
  "g0_human_decision: APPROVE_WITH_ADDITIONAL_CONDITIONS",
  "g1_declarative_core_review: OPEN_PLANNING",
  "g1_ready: false",
  "runtime_authorized: false",
  "memory_migration: NOT_AUTHORIZED"
]) if (!state.includes(marker)) fail(`STATE.md missing marker: ${marker}`);

const gateState = await json("governance/gate-state.json");
if (gateState.gates?.G0?.status !== "APPROVED_WITH_ADDITIONAL_CONDITIONS") fail("gate-state G0 is not approved with additional conditions");
if (gateState.gates?.G1?.status !== "OPEN_PLANNING") fail("gate-state G1 is not OPEN_PLANNING");
if (!gateState.gates?.G0?.satisfied_conditions?.includes("C1")) fail("gate-state does not mark C1 satisfied");
for (const condition of Array.from({ length: 36 }, (_, index) => `C${index + 2}`)) {
  if (!gateState.gates?.G0?.binding_conditions?.includes(condition)) fail(`gate-state missing binding condition ${condition}`);
}
for (const [key, expected] of Object.entries({
  runtime_authorized: false,
  memory_migration: "NOT_AUTHORIZED",
  core4_migration: "NOT_AUTHORIZED",
  sedimentation: "DISABLED",
  whatsapp_integration: "NOT_STARTED",
  organs_connected: false,
  main_is_promotion: false
})) if (gateState.global_boundaries?.[key] !== expected) fail(`gate-state boundary ${key} must be ${JSON.stringify(expected)}`);

const decision = await text("docs/reviews/G0-FOUNDATION-DECISION-2026-08-22.md");
for (const marker of [
  "decision: APPROVE_WITH_ADDITIONAL_CONDITIONS",
  "effect: OPEN_G1_DECLARATIVE_PLANNING_ONLY",
  "G1: OPEN_PLANNING",
  "runtime: BLOCKED",
  "C1_human_decision: SATISFIED"
]) if (!decision.includes(marker)) fail(`G0 decision missing marker: ${marker}`);

const mandate = await text("docs/architecture/CORE-V5-MANDATE.md");
for (const marker of ["A mensagem original chega ao Presence Kernel", "Nenhum órgão possui campo ou autoridade `final_answer`", "A LLM não escreve memória canônica diretamente"]) if (!mandate.includes(marker)) fail(`mandate missing invariant: ${marker}`);

const registry = await text("core/v5/organ_registry.yaml");
for (const organ of ["JWB", "JSL", "JRL", "SGPJ", "Agenda", "JSU"]) if (!new RegExp(`^  ${organ}:`, "m").test(registry)) fail(`organ registry missing ${organ}`);
for (const marker of ["semantic_observation_trust: UNTRUSTED_TYPED_INPUT", "final_answer_field: forbidden", "numeric_timeouts: UNSET_UNTIL_G2_MEASUREMENT"]) if (!registry.includes(marker)) fail(`organ registry missing marker: ${marker}`);

const declarativeYaml = (await walk("core/v5")).filter((path) => /\.ya?ml$/i.test(path));
for (const path of declarativeYaml) {
  const content = await text(path);
  if (/^\s*(final_answer|response_to_user|system_instruction|identity_override)\s*:/m.test(content)) fail(`${path} contains forbidden authoring/authority field`);
  if (/latency_target_ms\s*:/.test(content)) fail(`${path} contains premature latency target`);
}

const identity = await text("core/v5/identity_capsule.yaml");
for (const marker of ["ASSISTIVE_NON_CANONICAL", "BLOCK_AND_REQUEST_CONTEXT_RESTORATION", "VERIFIED_LOADED"]) if (!identity.includes(marker)) fail(`identity capsule missing ${marker}`);
if (/JOHAN_DEGRADED|degraded_generic_reasoning/.test(identity)) fail("identity capsule permits identity-shaped degraded fallback");

const memory = await text("core/v5/memory_policy.yaml");
for (const marker of ["null_retrieval_is_valid: true", "no_identity_fallback: true", "silent_merge: forbidden"]) if (!memory.includes(marker)) fail(`memory policy missing ${marker}`);

const truthGate = await text("core/v5/truth_gate.yaml");
for (const marker of ["PASS_CANDIDATE", "dispositions:", "finding_codes:", "ONTOLOGICAL_OVERCLAIM", "AUTHORITY_CONFLICT", "DIGEST_MISMATCH", "same_generation_path_sufficient: false"]) if (!truthGate.includes(marker)) fail(`truth gate missing ${marker}`);

const constitution = await text("core/v5/constitution.md");
const articleCount = (constitution.match(/^## Artigo /gm) ?? []).length;
if (articleCount < 11) fail(`constitution expected at least 11 articles; found ${articleCount}`);

const foundationCases = await text("evaluation/replay_cases/foundation.yaml");
const adversarialCases = await text("evaluation/replay_cases/adversarial.yaml");
const foundationCount = (foundationCases.match(/^\s*-\s+id:/gm) ?? []).length;
const adversarialCount = (adversarialCases.match(/^\s*-\s+id:/gm) ?? []).length;
if (foundationCount < 7) fail(`expected at least 7 foundation replay cases; found ${foundationCount}`);
if (adversarialCount < 10) fail(`expected at least 10 adversarial replay cases; found ${adversarialCount}`);

if (errors.length) {
  console.error(`\nCore V5 structural validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("Core V5 structural validation passed.");
console.log(`- ${requiredFiles.length} required artifacts present`);
console.log(`- ${schemaFiles.length} schema files parse and expose $id`);
console.log(`- ${declarativeYaml.length} declarative YAML files checked for forbidden fields`);
console.log(`- ${foundationCount} foundation and ${adversarialCount} adversarial replay cases registered`);
console.log("- G0 is approved with C2-C37 binding; G1 is OPEN_PLANNING only");
console.log("- structural PASS is not behavior, identity, runtime or promotion");
