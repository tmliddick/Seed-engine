import {
  WorldSeed,
  MagicPrinciple,
  MagicIntensity,
  OriginTheme,
  LegendaryArchetype
} from "../types";

export function deriveMagic(seed: WorldSeed) {
  const { principle, intensity } = seed.magic;
  const { originTheme, legendaryArchetype } = seed.mythic;

  const costs: string[] = [];
  const limitations: string[] = [];
  const institutions: string[] = [];
  const magicalCreatures: string[] = [];

  const principleCosts: Record<MagicPrinciple, string[]> = {
    alchemy: ["rare reagents", "precise measurements"],
    runes: ["rare inks", "long inscription time"],
    elementalism: ["physical stamina"],
    "dream-magic": ["sleep", "mental clarity"],
    "blood-magic": ["life essence"],
    astral: ["focus", "star alignment"],
    nature: ["seasonal energy"],
    forbidden: ["unknown sacrifices"]
  };

  const principleLimits: Record<MagicPrinciple, string[]> = {
    alchemy: ["volatile reactions"],
    runes: ["must be exact"],
    elementalism: ["imbalance risk"],
    "dream-magic": ["blurred reality"],
    "blood-magic": ["corruption risk"],
    astral: ["requires night sky"],
    nature: ["seasonal weakness"],
    forbidden: ["unpredictable outcomes"]
  };

  costs.push(...principleCosts[principle]);
  limitations.push(...principleLimits[principle]);

  if (intensity === MagicIntensity.Unstable) {
    limitations.push("frequent magical backfires");
  }

  const themeCreatures: Record<OriginTheme, string[]> = {
    "world-serpent": ["serpentine leviathans"],
    chaos: ["chaos spawn"],
    "divine-war": ["fallen spirits"],
    "cosmic-egg": ["celestial beings"],
    "twin-gods": ["dual-aspect guardians"],
    "primordial-forest": ["ancient tree spirits"]
  };

  magicalCreatures.push(...themeCreatures[originTheme]);

  const archetypeInstitutions: Record<LegendaryArchetype, string[]> = {
    hero: ["Order of the Dawn"],
    tyrant: ["Arcane Enforcers"],
    prophet: ["Temple of Visions"],
    trickster: ["Illusionists' Guild"],
    wanderer: ["Wayfarer Circles"],
    sorcerer: ["High Arcanum"]
  };

  institutions.push(...archetypeInstitutions[legendaryArchetype]);

  return { costs, limitations, institutions, magicalCreatures };
}
