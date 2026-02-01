import { registerPlugin, getRegisteredPlugins } from "../src/pluginSystem";
import {
  SeedEnginePlugin,
  WorldSeed,
  DerivedWorld
} from "../src/types";

function createGrid(width: number, height: number, fill: string): string[][] {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => fill)
  );
}

function renderGrid(grid: string[][]): string {
  return grid.map(row => row.join("")).join("\n");
}

const plugin: SeedEnginePlugin = {
  name: "asciiMap",
  description: "Generates ASCII mini-map and full map, and lets other plugins draw on them.",
  postProcess(seed: WorldSeed, world: DerivedWorld) {
    const fullWidth = 60;
    const fullHeight = 30;
    const miniWidth = 20;
    const miniHeight = 10;

    const full = createGrid(fullWidth, fullHeight, ".");
    const mini = createGrid(miniWidth, miniHeight, ".");

    // Basic terrain hints from geography
    const mountains = Math.round((world.geography.terrainProfile.mountainDensity || 0.3) * fullWidth);
    const rivers = Math.round((world.geography.terrainProfile.riverFrequency || 0.3) * fullWidth);

    for (let x = 0; x < mountains; x++) {
      const y = (x * 3) % fullHeight;
      full[y][x] = "^";
    }

    for (let x = 0; x < rivers; x++) {
      const y = (x * 5) % fullHeight;
      full[y][fullWidth - 1 - x] = "~";
    }

    // Mini-map: simple abstraction
    for (let y = 0; y < miniHeight; y++) {
      for (let x = 0; x < miniWidth; x++) {
        mini[y][x] = y < miniHeight / 3 ? "~" : y > (2 * miniHeight) / 3 ? "^" : ".";
      }
    }

    // Let other plugins add layers if they implement addAsciiLayers
    const plugins = getRegisteredPlugins();
    for (const p of plugins) {
      p.addAsciiLayers?.(seed, world, full, mini);
    }

    world.maps = {
      ...(world.maps || {}),
      asciiFull: renderGrid(full),
      asciiMini: renderGrid(mini)
    };
  }
};

registerPlugin(plugin);
