import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, MagicSchool } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "magicSchools",
  description: "Adds notable magic schools to the setting.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const schools: MagicSchool[] = [
      {
        name: "Academy of the " + seed.magic.principle,
        specialty: seed.magic.principle,
        reputation: "renowned"
      },
      {
        name: "Hidden College of Night",
        specialty: "forbidden lore",
        reputation: "whispered"
      }
    ];

    world.magicSystem.schools = schools;
  }
};

registerPlugin(plugin);
