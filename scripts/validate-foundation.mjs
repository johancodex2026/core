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
  "docs/architecture/CORE-V5-MANDATE.md",
  "docs/architecture/ARCHITECTURE.md",
  "docs/architecture/ORGAN-CONTRACT.md",
  "docs/architecture/SOURCE-BASE.md",
  "docs/architecture/adr/0001-single-manifestation-center.md",
  "docs/methodology/LLM-FIRST.md",
  "docs/roadmap/DEVELOPMENT-PLAN.md",
  "docs/roadmap/STAGE-GATES.md",
  "docs/evaluation/JOHAN-VS-SHELL.md",
  "docs/evaluation/BEHAVIORAL-INVARIANTS.md",
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
  "evaluation/replay_cases/foundation.yaml"
];

for (const item of requiredFiles) {
  if (!(await exists(join(root, item)))) fail(`missing required artifact: ${item}`);
}

for (const schema of ["schemas/organ-result.schema.json", "schemas/presence-context.schema.json"]) {
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
  "evaluation_state: SPECIFIED_NOT_EXECUTED"
]) {
  if (!state.includes(marker)) fail(`STATE.md missing marker: ${marker}`);
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
if (!registry.includes("final_answer_field: forbidden")) {
  fail("organ registry does not explicitly forbid final_answer");
}

const yamlFiles = (await walk(join(root, "core/v5"))).filter((path) => /\.ya?ml$/i.test(path));
for (const path of yamlFiles) {
  const content = await text(path);
  if (/^\s*(final_answer|response_to_user)\s*:/m.test(content)) {
    fail(`${relative(root, path)} contains a forbidden response-authoring field`);
  }
}

const truthGate = await text(join(root, "core/v5/truth_gate.yaml"));
for (const status of [
  "UNSUPPORTED_PRAISE",
  "UNSUPPORTED_COMPLETION",
  "FAKE_UNDERSTANDING",
  "GENERIC_SHELL_DETECTED",
  "OVERCARE_DETECTED"
]) {
  if (!truthGate.includes(`- ${status}`)) fail(`truth gate missing status ${status}`);
}

const replays = await text(join(root, "evaluation/replay_cases/foundation.yaml"));
const replayCount = (replays.match(/^  - id:/gm) ?? []).length;
if (replayCount < 7) fail(`expected at least 7 foundation replay cases; found ${replayCount}`);
for (const caseId of [
  "memory-consequence-medication",
  "humor-pendrive",
  "unsupported-praise",
  "destructive-irritation",
  "relationship-repair",
  "whatsapp-presence",
  "operational-proof"
]) {
  if (!replays.includes(`id: ${caseId}`)) fail(`missing replay case ${caseId}`);
}

const constitution = await text(join(root, "core/v5/constitution.md"));
const articleCount = (constitution.match(/^## Artigo /gm) ?? []).length;
if (articleCount < 9) fail(`constitution expected at least 9 articles; found ${articleCount}`);

if (errors.length) {
  console.error(`\nCore V5 foundation validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Core V5 foundation validation passed.");
console.log(`- ${requiredFiles.length} required artifacts present`);
console.log("- 2 JSON schemas parse successfully");
console.log(`- ${yamlFiles.length} declarative YAML files checked for organ response-authoring violations`);
console.log(`- ${replayCount} foundation replay cases registered`);
console.log(`- ${articleCount} constitutional articles present`);
console.log("- state remains FOUNDATION_CANDIDATE / NOT_STARTED / sedimentation disabled");
