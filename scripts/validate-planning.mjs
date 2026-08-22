#!/usr/bin/env node

import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const fail = (message) => errors.push(message);
async function exists(path) { try { await stat(join(root, path)); return true; } catch { return false; } }
async function text(path) { return readFile(join(root, path), "utf8"); }

const required = [
  "docs/methodology/PLANNING-FIRST-ZERO-REWORK.md",
  "docs/methodology/EXECUTABLE-PLAN-STANDARD.md",
  "docs/methodology/PRE-MORTEM-AND-ASSUMPTION-CLOSURE.md",
  "docs/quality/ZERO-REWORK-ASSURANCE.md",
  "docs/quality/TRACEABILITY-STANDARD.md",
  "docs/quality/UNIFIED-ASSURANCE-SUITE.md",
  "docs/legacy/CORE4-LESSONS-LEARNED.md",
  "docs/architecture/CORE4-TO-V5-BOUNDARY.md",
  "docs/roadmap/DEFINITION-OF-READY.md",
  "docs/roadmap/WORK-PACKAGE-LIFECYCLE.md",
  "docs/templates/WORK-PACKAGE.md",
  "docs/templates/GATE-REVIEW.md",
  "docs/templates/DECISION-RECORD.md",
  "planning/README.md",
  "planning/work-packages/WP-G0-003-UNIFIED-ASSURANCE-SUITE.md",
  "docs/reviews/WP-G0-003-READY-REVIEW-2026-08-22.md",
  "planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md",
  "governance/planning-doctrine.yaml",
  "schemas/work-package.schema.json"
];
for (const path of required) if (!(await exists(path))) fail(`missing planning artifact: ${path}`);
try { JSON.parse(await text("schemas/work-package.schema.json")); }
catch (error) { fail(`work-package schema is invalid JSON: ${error.message}`); }

const doctrine = await text("governance/planning-doctrine.yaml");
for (const marker of ["avoidable_post_promotion_correction_budget: 0", "open_high_impact_questions_at_ready: 0", "false_complete_claims: 0", "commit_to_main_is_promotion: false", "time_ratios: UNCALIBRATED"]) if (!doctrine.includes(marker)) fail(`planning doctrine missing marker: ${marker}`);

const wp = await text("planning/work-packages/WP-G0-003-UNIFIED-ASSURANCE-SUITE.md");
for (const marker of ["status: READY", "runtime_effect: none", "memory_effect: none", "Nenhuma suíte estática prova ausência universal de alucinação", "mutation tests", "G1_status: HOLD"]) if (!wp.includes(marker)) fail(`WP-G0-003 missing marker: ${marker}`);

const g1 = await text("planning/work-packages/WP-G1-001-DECLARATIVE-CORE-REVIEW.md");
for (const marker of ["status: HOLD", "hold_reason: G0_HUMAN_DECISION_PENDING", "runtime_effect: none", "memory_effect: none", "result: HOLD"]) if (!g1.includes(marker)) fail(`G1 work package missing marker: ${marker}`);

for (const path of ["docs/templates/WORK-PACKAGE.md", "docs/templates/GATE-REVIEW.md", "docs/templates/DECISION-RECORD.md"]) {
  const content = await text(path);
  if (!content.includes("baseline_commit")) fail(`${path} does not require baseline_commit`);
  if (!content.includes("Dissenso")) fail(`${path} does not preserve dissent`);
}

const pkg = JSON.parse(await text("package.json"));
if (pkg.scripts?.test !== "node scripts/test-suite.mjs") fail("package.json test is not the unified suite");
if (pkg.scripts?.check !== "npm test") fail("package.json check is not an alias of npm test");

const state = await text("docs/repository/STATE.md");
for (const marker of ["avoidable_post_promotion_correction_budget: 0", "core4_migration: NOT_AUTHORIZED", "g0_human_decision: PENDING", "runtime_authorized: false"]) if (!state.includes(marker)) fail(`STATE.md missing planning boundary: ${marker}`);

if (errors.length) {
  console.error(`\nCore V5 planning validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("Core V5 planning validation passed.");
console.log(`- ${required.length} planning artifacts present`);
console.log("- npm test is the single public assurance entry point");
console.log("- WP-G0-003 is repository-only and G1 remains HOLD");
console.log("- Core4 migration, runtime and memory effects remain unauthorized");
