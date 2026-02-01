import { SeedEnginePlugin, WorldSeed, DerivedWorld } from "./types";

const plugins: SeedEnginePlugin[] = [];

export function registerPlugin(plugin: SeedEnginePlugin) {
  plugins.push(plugin);
}

export function getRegisteredPlugins(): SeedEnginePlugin[] {
  return plugins;
}

export function applySeedExtensions(seed: WorldSeed) {
  for (const plugin of plugins) {
    plugin.extendSeed?.(seed);
  }
}

export function applyWorldExtensions(seed: WorldSeed, world: DerivedWorld) {
  for (const plugin of plugins) {
    plugin.extendWorld?.(seed, world);
  }
}

export function applyPostProcess(seed: WorldSeed, world: DerivedWorld) {
  for (const plugin of plugins) {
    plugin.postProcess?.(seed, world);
  }
}
