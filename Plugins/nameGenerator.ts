import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld } from "../src/types";

const vowels = ["a", "e", "i", "o", "u", "y"];
const consonants = ["r", "n", "m", "l", "th", "v", "s", "k", "d", "g"];

function makeName(syllables: number): string {
  let name = "";
  for (let i = 0; i < syllables; i++) {
    name += consonants[Math.floor(Math.random() * consonants.length)];
    name += vowels[Math.floor(Math.random() * vowels.length)];
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const plugin: SeedEnginePlugin = {
  name: "nameGenerator",
  description: "Generates sample names based on simple syllable patterns.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const samples: string[] = [];
    for (let i = 0; i < 5; i++) {
      samples.push(makeName(2 + (i % 2)));
    }
    world.culture.namingSamples = samples;
  }
};

registerPlugin(plugin);
