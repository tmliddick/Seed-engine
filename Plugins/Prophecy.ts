import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, Prophecy } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "prophecy",
  description: "Adds a central prophecy to the mythology.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const prophecy: Prophecy = {
      wording: "When the " +
        seed.mythic.legendaryArchetype +
        " walks beneath a " +
        seed.mythic.originTheme +
        " sky, the kingdom shall be remade.",
      motif: "transformation through trial",
      perceivedOutcome: "Either salvation or ruin, depending on who interprets it."
    };

    world.mythology.prophecy = prophecy;
  }
};

registerPlugin(plugin);
