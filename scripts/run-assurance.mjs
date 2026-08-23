#!/usr/bin/env node

import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const engine = join(root, "scripts", "unified-assurance.mjs");
const reportPath = resolve(root, process.env.CORE_V5_ASSURANCE_REPORT ?? "artifacts/core-v5-assurance-report.json");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function gitHead() {
  const result = spawnSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" });
  return result.status === 0 ? result.stdout.trim() : null;
}

async function manifestVersion() {
  try {
    const manifest = JSON.parse(await readFile(join(root, "assurance", "suite-manifest.json"), "utf8"));
    return manifest.suite_version ?? "unknown";
  } catch {
    return "unknown";
  }
}

async function writeBootstrapFailure(result) {
  const detail = `${result.error?.stack ?? ""}\n${result.stdout ?? ""}\n${result.stderr ?? ""}`.trim();
  const report = {
    suite_version: await manifestVersion(),
    generated_at: new Date().toISOString(),
    repository_head: gitHead(),
    overall_status: "FAIL",
    layers: [
      {
        id: "A0",
        name: "bootstrap",
        status: "FAIL",
        checks: [
          {
            id: "engine-bootstrap",
            status: "FAIL",
            message: "The unified assurance engine could not execute or did not produce its report.",
            evidence: [detail.slice(0, 12000) || "No diagnostic output was produced."]
          }
        ]
      }
    ],
    summary: { passed: 0, failed: 1, informational: 0 },
    limitations: [
      "This is a bootstrap failure receipt; downstream assurance layers did not execute.",
      "A failure report is evidence of non-completion, not evidence that repository contracts are satisfied."
    ]
  };
  await mkdir(dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.error("Core V5 Unified Assurance Suite: FAIL");
  console.error(`- bootstrap receipt: ${relative(root, reportPath)}`);
  if (detail) console.error(detail);
}

const result = spawnSync(process.execPath, [engine], {
  cwd: root,
  encoding: "utf8",
  env: { ...process.env, CORE_V5_ASSURANCE_WRAPPER: "1" }
});

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

if (!(await exists(reportPath))) {
  await writeBootstrapFailure(result);
  process.exit(1);
}

process.exit(result.status === 0 ? 0 : 1);
