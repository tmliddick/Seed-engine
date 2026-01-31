# Seed Engine

A modular fantasy world generation engine written in TypeScript.

## Usage

```ts
import { generateWorld } from "seed-engine";

const world = generateWorld({
  identity: { ... },
  environment: { ... },
  magic: { ... },
  society: { ... },
  mythic: { ... }
});

console.log(world);
