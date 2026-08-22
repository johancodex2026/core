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
  return readFile(path, "utf8");
}

const required = [
  "docs/methodology/PLANNING-FIRST-ZERO-REWORK.md",
  "docs/methodology/EXECUTABLE-PLAN-STANDARD.md",
  "docs/methodology/PRE-MORTEM-AND-ASSUMPTION-CLOSURE.md",
  "docs/quality/ZERO-REWORK-ASSURANCE.md",
  "docs/quality/TRACEABILITY-STANDARD.md",
  "docs/legacy/CORE4-LESSONS-LEARNED.md",
  "docs/architecture/CORE4-TO-V5-BOUNDARY.md",
  "docs/architecture/adr/0005-freeze-core4-as-readonly-baseline.md",
  "docs/architecture/adr/0006-planning-first-zero-avoidable-rework.md",
  "docs/roadmap/DEFINITION-OF-READY.md",
  "docs/roadmap/WORK-PACKAGE-LIFECYCLE.md",
  "docs/templates/WORK-PACKAGE.md",
  "docs/templates/GATE-REVIEW.md",
  "docs/templates/DECISION-RECORD.md",
  "planning/README.md",
  "planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md",
  "governance/planning-doctrine.yaml",
  "schemas/work-package.schema.json"
];

for (const path of required) {
  if (!(await exists(join(root, path)))) fail(`missing planning artifact: ${path}`);
}

try {
  JSON.parse(await text(join(root, "schemas/work-package.schema.json")));
} catch (error) {
  fail(`work-package schema is invalid JSON: ${error.message}`);
}

const doctrine = await text(join(root, "governance/planning-doctrine.yaml"));
for (const marker of [
  "avoidable_post_promotion_correction_budget: 0",
  "open_high_impact_questions_at_ready: 0",
  "false_complete_claims: 0",
  "commit_to_main_is_promotion: false",
  "time_ratios: UNCALIBRATED"
]) {
  if (!doctrine.includes(marker)) fail(`planning doctrine missing marker: ${marker}`);
}

const planning = await text(join(root, "docs/methodology/PLANNING-FIRST-ZERO-REWORK.md"));
for (const marker of [
  "Planejar até a execução ficar entediante",
  "CORREÇÃO EVITÁVEL PÓS-PROMOÇÃO",
  "Spike não é implementação",
  "Stop conditions",
  "A correção só termina quando o sistema de planejamento também foi corrigido"
]) {
  if (!planning.includes(marker)) fail(`Planning-First document missing marker: ${marker}`);
}

const lessons = await text(join(root, "docs/legacy/CORE4-LESSONS-LEARNED.md"));
for (const marker of [
  "ac167016b3e5b55e6324eb0bee74790b0dc33c96a453df0a48d0afe86862c82f",
  "C7",
  "C18",
  "null retrieval",
  "Core4 deve permanecer executável"
]) {
  if (!lessons.includes(marker)) fail(`Core4 lessons missing marker: ${marker}`);
}

const boundary = await text(join(root, "docs/architecture/CORE4-TO-V5-BOUNDARY.md"));
for (const marker of ["READ_ONLY_ONLY", "M0 — Freeze", "M7 — Desativação planejada", "Anti-corruption layer"]) {
  if (!boundary.includes(marker)) fail(`Core4/V5 boundary missing marker: ${marker}`);
}

const ready = await text(join(root, "docs/roadmap/DEFINITION-OF-READY.md"));
for (const marker of ["R0 — Mandato", "R9 — Promoção", "Bloqueadores absolutos", "correção pós-promoção assumida como fase normal"]) {
  if (!ready.includes(marker)) fail(`Definition of Ready missing marker: ${marker}`);
}

const lifecycle = await text(join(root, "docs/roadmap/WORK-PACKAGE-LIFECYCLE.md"));
for (const marker of ["IDEA", "READY", "PROMOTION_CANDIDATE", "ESCAPED_DEFECT", "IDEA → EXECUTING"]) {
  if (!lifecycle.includes(marker)) fail(`work-package lifecycle missing marker: ${marker}`);
}

const wp = await text(join(root, "planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md"));
for (const marker of [
  "status: HOLD",
  "hold_reason: G0_HUMAN_DECISION_PENDING",
  "baseline_commit:",
  "runtime_effect: none",
  "memory_effect: none",
  "zero memória",
  "Core4 permanece read-only",
  "result: HOLD"
]) {
  if (!wp.includes(marker)) fail(`G1 work package missing marker: ${marker}`);
}

for (const path of ["docs/templates/WORK-PACKAGE.md", "docs/templates/GATE-REVIEW.md", "docs/templates/DECISION-RECORD.md"]) {
  const content = await text(join(root, path));
  if (!content.includes("baseline_commit")) fail(`${path} does not require baseline_commit`);
  if (!content.includes("Dissenso")) fail(`${path} does not preserve dissent`);
}

const packageJson = JSON.parse(await text(join(root, "package.json")));
if (!packageJson.scripts?.["check:planning"]) fail("package.json missing check:planning");
if (!String(packageJson.scripts?.check || "").includes("check:planning")) fail("package.json check does not include planning validation");

const state = await text(join(root, "docs/repository/STATE.md"));
for (const marker of [
  "planning_doctrine:",
  "avoidable_post_promotion_correction_budget: 0",
  "core4_migration: NOT_AUTHORIZED",
  "g0_human_decision: PENDING"
]) {
  if (!state.includes(marker)) fail(`STATE.md missing planning/legacy marker: ${marker}`);
}

if (errors.length) {
  console.error(`\nCore V5 planning validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Core V5 planning validation passed.");
console.log(`- ${required.length} planning and legacy artifacts present`);
console.log("- work-package JSON schema parses successfully");
console.log("- zero avoidable post-promotion correction budget is explicit");
console.log("- Core4 remains a read-only baseline; migration is not authorized");
console.log("- WP-G1-001 remains HOLD while G0 human decision is pending");
console.log("- this check validates planning structure, not readiness, behavior, security, or promotion");
