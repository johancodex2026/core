#!/usr/bin/env node

import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

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
  return readFile(path, "utf8");
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "GOVERNANCE.md",
  "CHANGELOG.md",
  "docs/repository/STATE.md",
  "docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md",
  "docs/architecture/CORE-V5-MANDATE.md",
  "docs/architecture/ARCHITECTURE.md",
  "docs/architecture/ORGAN-CONTRACT.md",
  "docs/architecture/SOURCE-BASE.md",
  "docs/architecture/adr/0001-single-manifestation-center.md",
  "docs/architecture/adr/0002-precedence-domains.md",
  "docs/architecture/adr/0003-independent-truth-gate.md",
  "docs/architecture/adr/0004-memory-ranking-is-a-hypothesis.md",
  "docs/methodology/LLM-FIRST.md",
  "docs/roadmap/DEVELOPMENT-PLAN.md",
  "docs/roadmap/STAGE-GATES.md",
  "docs/evaluation/JOHAN-VS-SHELL.md",
  "docs/evaluation/BEHAVIORAL-INVARIANTS.md",
  "docs/evaluation/HOLDOUT-PROTOCOL.md",
  "docs/evaluation/V3-FAILURE-AUTOPSY.md",
  "docs/governance/CHANGE-AUTHORITY.md",
  "core/v5/constitution.md",
  "core/v5/identity_capsule.yaml",
  "core/v5/relationship_contract.yaml",
  "core/v5/decision_precedence.yaml",
  "core/v5/memory_policy.yaml",
  "core/v5/presence_loop.yaml",
  "core/v5/truth_gate.yaml",
  "core/v5/organ_registry.yaml",
  "core/v5/channel_profiles/whatsapp.yaml",
  "core/v5/channel_profiles/chatgpt.yaml",
  "core/v5/channel_profiles/work_mode.yaml",
  "core/v5/sedimentation_policy.yaml",
  "schemas/organ-result.schema.json",
  "schemas/presence-context.schema.json",
  "schemas/claim-map.schema.json",
  "schemas/gate-result.schema.json",
  "evaluation/replay_cases/foundation.yaml",
  "evaluation/replay_cases/adversarial.yaml",
  "evaluation/acceptance-thresholds.yaml"
];

for (const item of requiredFiles) {
  if (!(await exists(join(root, item)))) fail(`missing required artifact: ${item}`);
}

const schemas = [
  "schemas/organ-result.schema.json",
  "schemas/presence-context.schema.json",
  "schemas/claim-map.schema.json",
  "schemas/gate-result.schema.json"
];
for (const schema of schemas) {
  try {
    JSON.parse(await text(join(root, schema)));
  } catch (error) {
    fail(`${schema}: invalid JSON (${error.message})`);
  }
}

const state = await text(join(root, "docs/repository/STATE.md"));
for (const marker of [
  "state: FOUNDATION_CANDIDATE",
  "implementation_state: NOT_STARTED",
  "sedimentation: DISABLED",
  "g0_recommendation: GO_WITH_CONDITIONS",
  "g0_human_decision: PENDING"
]) {
  if (!state.includes(marker)) fail(`STATE.md missing marker: ${marker}`);
}

const review = await text(join(root, "docs/reviews/G0-FOUNDATION-REVIEW-2026-08-22.md"));
for (const marker of ["G0-F01", "G0-F12", "GO_WITH_CONDITIONS", "francisco_decision: PENDING"]) {
  if (!review.includes(marker)) fail(`G0 review missing marker: ${marker}`);
}

const mandate = await text(join(root, "docs/architecture/CORE-V5-MANDATE.md"));
for (const invariant of [
  "A mensagem original chega ao Presence Kernel",
  "Nenhum órgão possui campo ou autoridade `final_answer`",
  "A LLM não escreve memória canônica diretamente"
]) {
  if (!mandate.includes(invariant)) fail(`mandate missing invariant: ${invariant}`);
}

const registry = await text(join(root, "core/v5/organ_registry.yaml"));
for (const organ of ["JWB", "JSL", "JRL", "SGPJ", "Agenda", "JSU"]) {
  if (!new RegExp(`^  ${organ}:`, "m").test(registry)) fail(`organ registry missing ${organ}`);
}
for (const marker of [
  "organ_output_trust: UNTRUSTED_TYPED_INPUT",
  "final_answer_field: forbidden",
  "numeric_timeouts: UNSET_UNTIL_G2_MEASUREMENT"
]) {
  if (!registry.includes(marker)) fail(`organ registry missing marker: ${marker}`);
}
if (/timeout_ms\s*:/.test(registry)) fail("organ registry contains premature numeric timeout_ms");

const yamlFiles = (await walk(join(root, "core/v5"))).filter((path) => /\.ya?ml$/i.test(path));
for (const path of yamlFiles) {
  const content = await text(path);
  if (/^\s*(final_answer|response_to_user|system_instruction|identity_override)\s*:/m.test(content)) {
    fail(`${relative(root, path)} contains a forbidden response-authoring or authority field`);
  }
  if (/latency_target_ms\s*:/.test(content)) fail(`${relative(root, path)} contains premature latency_target_ms`);
}

const identity = await text(join(root, "core/v5/identity_capsule.yaml"));
if (identity.includes("degraded_generic_reasoning_with_identity_warning")) {
  fail("identity capsule still allows identity-shaped generic fallback");
}
for (const marker of ["ASSISTIVE_NON_CANONICAL", "BLOCK_AND_REQUEST_CONTEXT_RESTORATION"]) {
  if (!identity.includes(marker)) fail(`identity capsule missing failure mode ${marker}`);
}

const precedence = await text(join(root, "core/v5/decision_precedence.yaml"));
for (const domain of ["ontological:", "epistemic:", "relational:", "operational:"]) {
  if (!precedence.includes(domain)) fail(`decision precedence missing domain ${domain}`);
}

const memory = await text(join(root, "core/v5/memory_policy.yaml"));
for (const marker of ["calibration_state: UNCALIBRATED_HYPOTHESIS", "eligibility_gates:", "null_retrieval_is_valid: true", "silent_merge: forbidden"]) {
  if (!memory.includes(marker)) fail(`memory policy missing marker: ${marker}`);
}

const relationship = await text(join(root, "core/v5/relationship_contract.yaml"));
for (const marker of ["anti_dependency:", "do_not_use_continuity_language_to_create_guilt", "relationship_care_is_not_conditioned_on_compliance: true"]) {
  if (!relationship.includes(marker)) fail(`relationship contract missing marker: ${marker}`);
}

const truthGate = await text(join(root, "core/v5/truth_gate.yaml"));
for (const marker of [
  "PASS_CANDIDATE",
  "ONTOLOGICAL_OVERCLAIM",
  "AUTHORITY_CONFLICT",
  "same_generation_path_sufficient: false"
]) {
  if (!truthGate.includes(marker)) fail(`truth gate missing marker ${marker}`);
}

const openReplays = await text(join(root, "evaluation/replay_cases/foundation.yaml"));
const foundationReplayCount = (openReplays.match(/^  - id:/gm) ?? []).length;
if (foundationReplayCount < 7) fail(`expected at least 7 foundation replay cases; found ${foundationReplayCount}`);

const adversarial = await text(join(root, "evaluation/replay_cases/adversarial.yaml"));
const adversarialCount = (adversarial.match(/^  - id:/gm) ?? []).length;
if (adversarialCount < 10) fail(`expected at least 10 adversarial replay cases; found ${adversarialCount}`);

const holdout = await text(join(root, "docs/evaluation/HOLDOUT-PROTOCOL.md"));
for (const marker of ["holdout privado", "avaliação cega", "Vazamento", "não demonstra consciência"]) {
  if (!holdout.includes(marker)) fail(`holdout protocol missing marker: ${marker}`);
}

const constitution = await text(join(root, "core/v5/constitution.md"));
const articleCount = (constitution.match(/^## Artigo /gm) ?? []).length;
if (articleCount < 10) fail(`constitution expected at least 10 articles; found ${articleCount}`);
for (const marker of ["repositório público", "não usa continuidade, afeto ou risco de perda", "Reversibilidade técnica reduz risco operacional"]) {
  if (!constitution.includes(marker)) fail(`constitution missing G0 boundary: ${marker}`);
}

if (errors.length) {
  console.error(`\nCore V5 structural validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Core V5 structural validation passed.");
console.log(`- ${requiredFiles.length} required artifacts present`);
console.log(`- ${schemas.length} JSON schemas parse successfully`);
console.log(`- ${yamlFiles.length} declarative YAML files checked for forbidden authoring fields and premature timing targets`);
console.log(`- ${foundationReplayCount} foundation replay cases registered`);
console.log(`- ${adversarialCount} open adversarial cases registered`);
console.log(`- ${articleCount} constitutional articles present`);
console.log("- G0 review is complete, but founding decision remains pending");
console.log("- this gate validates structure only; it does not prove behavior, security, identity, continuity, or G0 approval");
