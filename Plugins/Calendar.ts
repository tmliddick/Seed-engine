import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "calendar",
  description: "Adds calendar flavor to astralWeather.",
  postProcess(seed: WorldSeed, world: DerivedWorld) {
    if (!world.astralWeather) return;

    world.astralWeather.notes.push(
      "The year is divided into four great festivals tied to astral cycles."
    );
  }
};

registerPlugin(plugin);
