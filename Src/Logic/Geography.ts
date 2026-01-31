import { WorldSeed, Biome, Climate, CulturalFlavor } from "../types";

export function deriveGeography(seed: WorldSeed) {
  const { biome, climate } = seed.environment;
  const { culturalFlavor } = seed.identity;

  const base = {
    mountainDensity: 0.3,
    riverFrequency: 0.3,
    coastlineComplexity: 0.3
  };

  const biomeModifiers: Record<Biome, Partial<typeof base>> = {
    "temperate-forest": { mountainDensity: 0.4, riverFrequency: 0.7 },
    tundra: { mountainDensity: 0.2, riverFrequency: 0.2 },
    savanna: { mountainDensity: 0.2, riverFrequency: 0.4 },
    archipelago: { coastlineComplexity: 0.95, riverFrequency: 0.5 },
    volcanic: { mountainDensity: 0.9, riverFrequency: 0.2 },
    desert: { mountainDensity: 0.1, riverFrequency: 0.05 },
    swamp: { riverFrequency: 0.9 },
    mountain: { mountainDensity: 1.0, riverFrequency: 0.5 }
  };

  const climateModifiers: Record<Climate, Partial<typeof base>> = {
    arid: { riverFrequency: -0.2 },
    humid: { riverFrequency: 0.2 },
    cold: { mountainDensity: 0.1 },
    temperate: {},
    monsoon: { riverFrequency: 0.3 },
    mediterranean: {},
    polar: { riverFrequency: -0.1 }
  };

  const flavorModifiers: Record<CulturalFlavor, Partial<typeof base>> = {
    Maritime: { coastlineComplexity: 0.2 },
    Highland: { mountainDensity: 0.2 },
    Forest: { riverFrequency: 0.1 },
    Nordic: {},
    Desert: {},
    Steppe: {},
    Tropical: {},
    Custom: {}
  };

  const terrain = {
    mountainDensity: clamp(
      base.mountainDensity +
        (biomeModifiers[biome].mountainDensity ?? 0) +
        (climateModifiers[climate].mountainDensity ?? 0) +
        (flavorModifiers[culturalFlavor].mountainDensity ?? 0)
    ),
    riverFrequency: clamp(
      base.riverFrequency +
        (biomeModifiers[biome].riverFrequency ?? 0) +
        (climateModifiers[climate].riverFrequency ?? 0) +
        (flavorModifiers[culturalFlavor].riverFrequency ?? 0)
    ),
    coastlineComplexity: clamp(
      base.coastlineComplexity +
        (biomeModifiers[biome].coastlineComplexity ?? 0) +
        (climateModifiers[climate].coastlineComplexity ?? 0) +
        (flavorModifiers[culturalFlavor].coastlineComplexity ?? 0)
    )
  };

  const resources = generateResources(seed);

  return { terrainProfile: terrain, resources };
}

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}

function generateResources(seed: WorldSeed): string[] {
  const { biome } = seed.environment;

  const resourceMap: Record<Biome, string[]> = {
    "temperate-forest": ["timber", "iron", "herbs"],
    tundra: ["fur", "ice crystals"],
    savanna: ["grain", "megafauna hides"],
    archipelago: ["fish", "pearls", "coral"],
    volcanic: ["obsidian", "sulfur"],
    desert: ["salt", "glass-sand"],
    swamp: ["reeds", "bog iron"],
    mountain: ["silver", "stone", "gems"]
  };

  return resourceMap[biome];
}
