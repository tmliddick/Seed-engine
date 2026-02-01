import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, Region } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "regions",
  description: "Generates regions based on biome, climate, and culture.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const regions: Region[] = [];

    const baseNames = [
      "Highlands",
      "Lowlands",
      "Riverlands",
      "Coastreach",
      "Deepwood",
      "Ashen Vale",
      "Sunsteppe"
    ];

    const count = 4;

    for (let i = 0; i < count; i++) {
      regions.push({
        name: `${seed.identity.kingdomName} ${baseNames[i % baseNames.length]}`,
        type: baseNames[i % baseNames.length],
        populationDensity: i % 3 === 0 ? "dense" : i % 2 === 0 ? "moderate" : "sparse",
        dominantCulture: seed.identity.culturalFlavor,
        magicalInfluence:
          seed.magic.intensity === "high" || seed.magic.intensity === "unstable"
            ? "strong"
            : "subtle"
      });
    }

    world.regions = regions;
  }
};

registerPlugin(plugin);
