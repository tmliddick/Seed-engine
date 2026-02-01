import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "factions",
  description: "Adds generated factions based on tension and magic.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const factions: string[] = [];

    factions.push("Guild of " + seed.magic.principle);
    factions.push("Order of the " + seed.mythic.legendaryArchetype);
    factions.push("Silent Hand of " + seed.identity.kingdomName);

    if (seed.society.primaryTension === "rebellion") {
      factions.push("Hidden Rebellion");
    }

    world.politics.generatedFactions = factions;
  }
};

registerPlugin(plugin);
