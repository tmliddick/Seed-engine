import { registerPlugin } from "../src/pluginSystem";
import {
  SeedEnginePlugin,
  WorldSeed,
  DerivedWorld,
  AstralEvent,
  CalendarInfo
} from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "astralWeather",
  description: "Generates astral events and seasonal notes.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const events: AstralEvent[] = [
      {
        name: "Veil-Thin Night",
        type: "conjunction",
        effectSummary: "Magic is easier but unstable."
      },
      {
        name: "Crown Eclipse",
        type: "eclipse",
        effectSummary: "Authority is questioned; omens abound."
      },
      {
        name: "Starfall Storm",
        type: "storm",
        effectSummary: "Falling lights ignite wild magic."
      }
    ];

    const chosen = events[0];

    const calendar: CalendarInfo = {
      currentSeason: seed.environment.climate === "cold" ? "Deep Winter" : "High Sun",
      festivals: [
        "Night of Lanterns",
        "Founding Day",
        "Festival of First Harvest"
      ],
      astralCycleNote: "The current cycle favors divination and dream-magic."
    };

    world.astralWeather = {
      currentEvent: chosen,
      notes: [chosen.effectSummary],
      calendar
    };
  }
};

registerPlugin(plugin);
