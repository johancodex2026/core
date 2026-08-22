#!/usr/bin/env node

import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];

function fail(message) {
  errors.push(message);
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function text(path) {
  return readFile(join(root, path), "utf8");
}

const required = [
  "docs/architecture/SEMANTIC-GLOSSARY.md",
  "docs/architecture/STATE-EVIDENCE-AND-RECEIPT-SEMANTICS.md",
  "docs/architecture/COGNITIVE-CONTROL-FLOW.md",
  "docs/architecture/adr/0007-render-before-send-authorization.md",
  "docs/architecture/adr/0008-bootstrap-evidence-vs-organ-interpretation.md",
  "docs/architecture/adr/0009-separate-response-and-action-authorization.md",
  "docs/governance/REVIEW-INDEPENDENCE.md",
  "evaluation/memory-ranking-hypothesis.yaml",
  "schemas/receipt.schema.json",
  "schemas/source-reference.schema.json",
  "schemas/recent-context-item.schema.json",
  "schemas/authorization-decision.schema.json",
  "scripts/validate-coherence.mjs"
];

for (const path of required) {
  if (!(await exists(join(root, path)))) fail(`missing coherence artifact: ${path}`);
}

const schemaPaths = [
  "schemas/organ-result.schema.json",
  "schemas/presence-context.schema.json",
  "schemas/claim-map.schema.json",
  "schemas/gate-result.schema.json",
  "schemas/work-package.schema.json",
  "schemas/receipt.schema.json",
  "schemas/source-reference.schema.json",
  "schemas/recent-context-item.schema.json",
  "schemas/authorization-decision.schema.json"
];

const schemas = {};
for (const path of schemaPaths) {
  try {
    schemas[path] = JSON.parse(await text(path));
  } catch (error) {
    fail(`${path}: invalid JSON (${error.message})`);
  }
}

const presenceLoop = await text("core/v5/presence_loop.yaml");
const orderedStages = [
  "bootstrap_identity",
  "preserve_turn",
  "perceive",
  "early_ambiguity_gate",
  "identify_claims_risk_and_needs",
  "remember",
  "consult_organs_and_sources",
  "resolve_evidence_and_conflicts",
  "judge",
  "draft_candidate",
  "semantic_truth_relationship_gate",
  "render_channel_candidate",
  "delivery_gate",
  "authorize_response_send",
  "authorize_external_actions",
  "emit_response",
  "execute_authorized_actions",
  "observe_result",
  "propose_learning"
];
let previousIndex = -1;
for (const stage of orderedStages) {
  const index = presenceLoop.indexOf(`- id: ${stage}`);
  if (index < 0) fail(`presence loop missing stage: ${stage}`);
  if (index <= previousIndex) fail(`presence loop stage out of order: ${stage}`);
  previousIndex = index;
}
for (const marker of [
  "no_JOHAN_DEGRADED_mode",
  "response_authorization_is_not_action_authorization",
  "render_precedes_send_authorization",
  "authorization_binds_exact_digest"
]) {
  if (!presenceLoop.includes(marker)) fail(`presence loop missing invariant: ${marker}`);
}
if (presenceLoop.indexOf("authorize_response_send") < presenceLoop.indexOf("render_channel_candidate")) {
  fail("response authorization occurs before rendering");
}

const identity = await text("core/v5/identity_capsule.yaml");
const pkg = JSON.parse(await text("package.json"));
if (!identity.includes(`core_version: "${pkg.version}"`)) {
  fail(`identity capsule version does not match package version ${pkg.version}`);
}
for (const marker of [
  "VERIFIED_LOADED",
  "ASSISTIVE_NON_CANONICAL",
  "numeric_target: null",
  "is_retrieved_memory: false"
]) {
  if (!identity.includes(marker)) fail(`identity capsule missing marker: ${marker}`);
}
if (/JOHAN_DEGRADED/.test(identity)) fail("identity capsule defines forbidden JOHAN_DEGRADED mode");

const memory = await text("core/v5/memory_policy.yaml");
for (const marker of [
  "maximum_default: 4",
  "no_identity_fallback: true",
  "NO_ELIGIBLE_RESULT",
  "numeric_weights_in_core: forbidden_until_calibrated",
  "identity_capsule_is_retrieved_memory: false"
]) {
  if (!memory.includes(marker)) fail(`memory policy missing marker: ${marker}`);
}
if (/initial_weights:/.test(memory)) fail("numeric memory weights remain in the Core declarative package");

const precedence = await text("core/v5/decision_precedence.yaml");
for (const marker of [
  "evaluation_order: before_domain_precedence",
  "no_vital_action_by_confirmation_alone",
  "confirmation_resolves_intent_only",
  "response_authorization_vs_action_authorization"
]) {
  if (!precedence.includes(marker)) fail(`precedence missing marker: ${marker}`);
}

const relationship = await text("core/v5/relationship_contract.yaml");
for (const marker of [
  "project_defined_descriptors",
  "legal_effect: none_by_itself",
  "silence_or_absence_does_not_create_relational_fault",
  "retrieve_for_personalization_only: false"
]) {
  if (!relationship.includes(marker)) fail(`relationship contract missing marker: ${marker}`);
}

const truthGate = await text("core/v5/truth_gate.yaml");
for (const marker of [
  "phases:",
  "preserve_all_detected_violations: true",
  "delivery_gate",
  "DIGEST_MISMATCH",
  "heurística comportamental; nunca hard fail determinístico isolado"
]) {
  if (!truthGate.includes(marker)) fail(`truth gate missing marker: ${marker}`);
}

const organRegistry = await text("core/v5/organ_registry.yaml");
for (const marker of [
  "risk_vocabulary:",
  "VERIFIABLE_RECEIPT_WITHIN_SCOPE",
  "semantic_observations: UNTRUSTED_TYPED_INPUT",
  "non_null_expiry_required_when_temporal: true"
]) {
  if (!organRegistry.includes(marker)) fail(`organ registry missing marker: ${marker}`);
}
if (/\bCRITICAL\b/.test(organRegistry)) fail("organ registry still uses CRITICAL instead of shared VITAL risk vocabulary");

const presenceSchema = schemas["schemas/presence-context.schema.json"];
const maxMemories = presenceSchema?.properties?.memory_retrieval?.properties?.memories?.maxItems;
if (maxMemories !== 4) fail(`presence context max memories must be 4; found ${maxMemories}`);
const loadStatuses = presenceSchema?.properties?.identity?.properties?.load_status?.enum ?? [];
if (loadStatuses.includes("DEGRADED")) fail("presence context still allows ambiguous DEGRADED identity status");
if (!loadStatuses.includes("VERIFIED_LOADED")) fail("presence context lacks VERIFIED_LOADED identity status");

const organSchemaText = await text("schemas/organ-result.schema.json");
if (/"CRITICAL"/.test(organSchemaText)) fail("organ-result schema uses CRITICAL instead of VITAL");
for (const ref of ["receipt.schema.json", "source-reference.schema.json", "recent-context-item.schema.json"]) {
  const combined = Object.values(schemas).map((value) => JSON.stringify(value)).join("\n");
  if (!combined.includes(ref)) fail(`schemas do not reference ${ref}`);
}

const claimSchemaText = await text("schemas/claim-map.schema.json");
for (const marker of ["support_status", "temporal_sensitivity", "receipt_refs", "candidate_response_digest"]) {
  if (!claimSchemaText.includes(`"${marker}"`)) fail(`claim-map schema missing ${marker}`);
}

const gateSchemaText = await text("schemas/gate-result.schema.json");
for (const marker of ["SEMANTIC", "DELIVERY", "subject_digest", "rendered_response_digest", "highest_severity"]) {
  if (!gateSchemaText.includes(`"${marker}"`)) fail(`gate-result schema missing ${marker}`);
}

const workPackageSchemaText = await text("schemas/work-package.schema.json");
for (const marker of ["IRRELEVANT", "SUPERSEDED", "ready_record_ref", "review_record_refs"]) {
  if (!workPackageSchemaText.includes(`"${marker}"`)) fail(`work-package schema missing ${marker}`);
}

const wpTemplate = await text("docs/templates/WORK-PACKAGE.md");
if (!wpTemplate.includes("status: IDEA")) fail("work-package template does not start at IDEA");
if (wpTemplate.includes("status: DRAFT")) fail("work-package template uses DRAFT outside lifecycle vocabulary");

const state = await text("docs/repository/STATE.md");
for (const marker of [
  "g0_human_decision: PENDING",
  "runtime_authorized: false",
  "memory_migration: NOT_AUTHORIZED",
  "sedimentation: DISABLED"
]) {
  if (!state.includes(marker)) fail(`repository state missing safety marker: ${marker}`);
}

const glossary = await text("docs/architecture/SEMANTIC-GLOSSARY.md");
for (const marker of [
  "Response-send authorization",
  "External-action authorization",
  "NO_ELIGIBLE_RESULT",
  "NOT_IMPLEMENTED"
]) {
  if (!glossary.includes(marker)) fail(`semantic glossary missing marker: ${marker}`);
}

if (errors.length) {
  console.error(`\nCore V5 coherence validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Core V5 semantic and LLM-First coherence validation passed.");
console.log(`- ${required.length} coherence artifacts present`);
console.log(`- ${schemaPaths.length} JSON schemas parse successfully`);
console.log("- render precedes exact-output send authorization");
console.log("- response and external-action authorization are separate");
console.log("- identity load has no ambiguous JOHAN_DEGRADED mode");
console.log("- null memory retrieval is valid and no fallback is permitted");
console.log("- Core numeric memory ranking remains outside runtime authority");
console.log("- G0 human decision and all runtime/memory gates remain pending or blocked");
console.log("- this check validates artifact coherence only; it does not prove behavior, safety, identity, continuity, Ready, or promotion");
