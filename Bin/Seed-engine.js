#!/usr/bin/env node

import { generateWorld } from "../dist/index.js";
import { generateGoldenWorld } from "../dist/examples/goldenWorld.js";
import fs from "fs";

const args = process.argv.slice(2);

function parseArgs() {
  const options = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].replace("--", "");
      const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
      options[key] = value;
    }
  }
  return options;
}

const opts = parseArgs();

if (opts.help || args.length === 0) {
  console.log(`
Seed Engine CLI

Commands:
  seed-engine create --seed <file> [--output <file>] [--format json|yaml]
  seed-engine example

Options:
  --plugins all|none|comma,separated,list   (currently plugins are wired in golden example)
`);
  process.exit(0);
}

if (args[0] === "example") {
  const world = generateGoldenWorld();
  console.log(JSON.stringify(world, null, 2));
  process.exit(0);
}

if (args[0] === "create") {
  const seedFile = opts.seed;
  const outputFile = opts.output || "world.json";
  const format = opts.format || "json";

  if (!seedFile) {
    console.error("Error: --seed <file> is required");
    process.exit(1);
  }

  const seed = JSON.parse(fs.readFileSync(seedFile, "utf8"));
  const world = generateWorld(seed);

  if (format === "yaml") {
    const yaml = await import("yaml");
    fs.writeFileSync(outputFile, yaml.stringify(world));
  } else {
    fs.writeFileSync(outputFile, JSON.stringify(world, null, 2));
  }

  console.log(`World generated → ${outputFile}`);
}
