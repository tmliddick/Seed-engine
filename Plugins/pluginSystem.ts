import { WorldSeed, DerivedWorld } from "./types";

export interface SeedEnginePlugin {
  name: string;
  extend?(seed: WorldSeed, world: DerivedWorld): void;
}

const plugins: SeedEnginePlugin[] = [];

export function registerPlugin(plugin: SeedEnginePlugin) {
  plugins.push(plugin);
}

export function applyPlugins(seed: WorldSeed, world: DerivedWorld) {
  for (const plugin of plugins) {
    if (plugin.extend) {
      plugin.extend(seed, world);
    }
  }
}
