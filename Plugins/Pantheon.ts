import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, Deity } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "pantheon",
  description: "Adds a small pantheon of deities.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const pantheon: Deity[] = [
      {
        name: "Aurelion",
        domain: "sun and oaths",
        temperament: "stern but fair",
        symbol: "a radiant crown"
      },
      {
        name: "Nysera",
        domain: "dreams and secrets",
        temperament: "enigmatic",
        symbol: "a veiled eye"
      }
    ];

    world.mythology.pantheon = pantheon;
  }
};

registerPlugin(plugin);
