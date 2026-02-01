import { WorldSeed, DerivedWorld } from "./types";
import { deriveGeography } from "./logic/geography";
import { deriveCulture } from "./logic/culture";
import { deriveMagic } from "./logic/magic";
import { derivePolitics } from "./logic/politics";
import { deriveMythology } from "./logic/mythology";
import {
  applySeedExtensions,
  applyWorldExtensions,
  applyPostProcess
} from "./pluginSystem";

// In a real app, you might auto-load plugins here.
// For now, plugins are imported explicitly where needed (CLI, golden world, etc).

export function generateWorld(seed: WorldSeed): DerivedWorld {
  // Let plugins tweak the seed first
  applySeedExtensions(seed);

  const world: DerivedWorld = {
    geography: deriveGeography(seed),
    culture: deriveCulture(seed),
    magicSystem: deriveMagic(seed),
    politics: derivePolitics(seed),
    mythology: deriveMythology(seed)
  };

  // Let plugins extend the world
  applyWorldExtensions(seed, world);

  // Final post-processing
  applyPostProcess(seed, world);

  return world;
}
