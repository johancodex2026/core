#!/usr/bin/env node

import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const fail = (message) => errors.push(message);
async function exists(path) { try { await stat(join(root, path)); return true; } catch { return false; } }
async function text(path) { return readFile(join(root, path), "utf8"); }
async function json(path) { return JSON.parse(await text(path)); }

const required = [
  "governance/semantic-taxonomy.json",
  "schemas/digest-reference.schema.json",
  "schemas/action-request.schema.json",
  "schemas/turn-plan.schema.json",
  "schemas/assurance-report.schema.json",
  "assurance/suite-manifest.json",
  "assurance/fixtures/scenarios.json",
  "docs/quality/UNIFIED-ASSURANCE-SUITE.md",
  "core/v5/presence_loop.yaml",
  "core/v5/truth_gate.yaml"
];
for (const path of required) if (!(await exists(path))) fail(`missing coherence artifact: ${path}`);

const taxonomy = await json("governance/semantic-taxonomy.json");
const manifest = await json("assurance/suite-manifest.json");
const schemas = {};
for (const path of ["schemas/action-request.schema.json", "schemas/authorization-decision.schema.json", "schemas/claim-map.schema.json", "schemas/gate-result.schema.json", "schemas/presence-context.schema.json", "schemas/receipt.schema.json", "schemas/source-reference.schema.json", "schemas/turn-plan.schema.json"]) {
  try { schemas[path] = await json(path); }
  catch (error) { fail(`${path}: invalid JSON (${error.message})`); }
}

const loop = await text("core/v5/presence_loop.yaml");
let previous = -1;
for (const stage of manifest.critical_stage_order ?? []) {
  const index = loop.indexOf(`- id: ${stage}`);
  if (index < 0) fail(`presence loop missing stage ${stage}`);
  else if (index <= previous) fail(`presence loop stage out of order ${stage}`);
  previous = Math.max(previous, index);
}
for (const legacy of ["authorize_external_actions", "execute_authorized_actions"]) if (loop.includes(`- id: ${legacy}`)) fail(`legacy post-response action stage remains: ${legacy}`);
for (const marker of ["action_receipts_precede_final_result_claims", "action_request_does_not_accumulate_execution_state", "response_authorization_is_not_action_authorization", "render_precedes_send_authorization"]) if (!loop.includes(marker)) fail(`presence loop missing invariant: ${marker}`);

const gate = schemas["schemas/gate-result.schema.json"];
if (!gate?.properties?.disposition) fail("gate-result lacks disposition");
if (!gate?.properties?.findings) fail("gate-result lacks findings");
if (gate?.properties?.status) fail("gate-result still mixes disposition and finding in status");

const actionProperties = Object.keys(schemas["schemas/action-request.schema.json"]?.properties ?? {});
for (const forbidden of ["authorized", "executed", "verified", "final_answer"]) if (actionProperties.includes(forbidden)) fail(`action-request contains forbidden state/field ${forbidden}`);

const presenceText = JSON.stringify(schemas["schemas/presence-context.schema.json"]);
for (const marker of ["turn-plan.schema.json", "action-request.schema.json", "digest-reference.schema.json"]) if (!presenceText.includes(marker)) fail(`presence-context does not integrate ${marker}`);
if (!presenceText.includes('"canonized_action_requests":{"maxItems":0}')) fail("assistive mode does not forbid canonized action requests");
if (!presenceText.includes('"active_state":{"enum":["NOT_APPLICABLE","UNKNOWN"]}')) fail("assistive mode does not constrain relationship state");

for (const path of ["schemas/source-reference.schema.json", "schemas/receipt.schema.json", "schemas/authorization-decision.schema.json", "schemas/claim-map.schema.json", "schemas/gate-result.schema.json", "schemas/presence-context.schema.json"]) if (!JSON.stringify(schemas[path]).includes("digest-reference.schema.json")) fail(`${path} contains untyped material digest`);

const receiptText = JSON.stringify(schemas["schemas/receipt.schema.json"]);
for (const type of taxonomy.receipt_types ?? []) if (!receiptText.includes(`"const":"${type}"`)) fail(`receipt schema lacks status restriction for ${type}`);

const truthGate = await text("core/v5/truth_gate.yaml");
for (const marker of ["dispositions:", "finding_codes:", "preserve_all_detected_findings: true", "same_generation_path_sufficient: false", "ACTION_RECEIPT_REQUIRED", "FINDING_LOSS"]) if (!truthGate.includes(marker)) fail(`truth gate missing marker ${marker}`);

const identity = await text("core/v5/identity_capsule.yaml");
const pkg = await json("package.json");
if (!identity.includes(`core_version: "${pkg.version}"`)) fail(`identity capsule version does not match ${pkg.version}`);

const state = await text("docs/repository/STATE.md");
for (const marker of ["g0_human_decision: PENDING", "runtime_authorized: false", "memory_migration: NOT_AUTHORIZED", "sedimentation: DISABLED"]) if (!state.includes(marker)) fail(`repository state missing ${marker}`);

if (errors.length) {
  console.error(`\nCore V5 coherence validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("Core V5 semantic integration validation passed.");
console.log(`- ${required.length} coherence artifacts present`);
console.log(`- ${manifest.critical_stage_order.length} cognitive stages ordered`);
console.log("- Gate disposition and findings are separated");
console.log("- action receipts precede final result claims");
console.log("- response authorization remains separate from action authorization");
console.log("- assistive mode excludes personal memory, active relationship and action requests");
