import { applyPlugins } from "./pluginSystem";
import { WorldSeed, DerivedWorld } from "./types";
import { deriveGeography } from "./logic/geography";
import { deriveCulture } from "./logic/culture";
import { deriveMagic } from "./logic/magic";
import { derivePolitics } from "./logic/politics";
import { deriveMythology } from "./logic/mythology";

export function generateWorld(seed: WorldSeed): DerivedWorld {
  return {
    geography: deriveGeography(seed),
    culture: deriveCulture(seed),
    magicSystem: deriveMagic(seed),
    politics: derivePolitics(seed),
    mythology: deriveMythology(seed)
  };
}
