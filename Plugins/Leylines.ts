import { registerPlugin } from "../src/pluginSystem";
import {
  SeedEnginePlugin,
  WorldSeed,
  DerivedWorld,
  LeylineNode,
  LeylinePath
} from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "leylines",
  description: "Generates leyline nodes and paths.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const nodes: LeylineNode[] = [];
    const paths: LeylinePath[] = [];

    const baseNames = [
      "Heartspire",
      "Starwell",
      "Worldvein",
      "Serpent Coil",
      "Dawn Nexus"
    ];

    const nodeCount = 3;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        name: baseNames[i],
        strength: i === nodeCount - 1 ? "convergence" : "major",
        region: world.regions?.[i]?.name ?? null
      });
    }

    if (nodes.length > 1) {
      for (let i = 0; i < nodes.length - 1; i++) {
        paths.push({
          from: nodes[i].name,
          to: nodes[i + 1].name,
          intensity: i % 2 === 0 ? "strong" : "weak"
        });
      }
    }

    world.leylines = { nodes, paths };
  }
};

registerPlugin(plugin);
