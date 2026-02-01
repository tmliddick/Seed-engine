import { registerPlugin } from "../src/pluginSystem";
import { SeedEnginePlugin, WorldSeed, DerivedWorld, MapGridCell } from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "mapGrid",
  description: "Provides a simple JSON grid map representation.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    const width = 20;
    const height = 10;
    const grid: MapGridCell[][] = [];

    for (let y = 0; y < height; y++) {
      const row: MapGridCell[] = [];
      for (let x = 0; x < width; x++) {
        const terrain =
          y < 3 ? "water" : y > 7 ? "mountain" : "plains";
        const symbol = terrain === "water" ? "~" : terrain === "mountain" ? "^" : ".";
        row.push({ terrain, symbol });
      }
      grid.push(row);
    }

    world.maps = {
      ...(world.maps || {}),
      grid
    };
  }
};

registerPlugin(plugin);
