import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, HistoryEvent } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "history",
  description: "Generates a simple history timeline.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const timeline: HistoryEvent[] = [
      { era: "Age of Dawn", description: "First settlements along the rivers." },
      { era: "Age of Crowns", description: "Kingdoms rose and clashed for dominance." },
      { era: "Age of Fractures", description: "Magic and politics intertwined dangerously." }
    ];

    world.mythology.historyTimeline = timeline;
  }
};

registerPlugin(plugin);
