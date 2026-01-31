// -----------------------------
// ENUMS
// -----------------------------

export enum CulturalFlavor {
  Nordic = "Nordic",
  Desert = "Desert",
  Maritime = "Maritime",
  Highland = "Highland",
  Forest = "Forest",
  Steppe = "Steppe",
  Tropical = "Tropical",
  Custom = "Custom"
}

export enum NamingStyle {
  SoftVowel = "soft-vowel",
  HarshConsonant = "harsh-consonant",
  Balanced = "balanced",
  Syllabic = "syllabic",
  Runic = "runic",
  Liquid = "liquid"
}

export enum Biome {
  TemperateForest = "temperate-forest",
  Tundra = "tundra",
  Savanna = "savanna",
  Archipelago = "archipelago",
  Volcanic = "volcanic",
  Desert = "desert",
  Swamp = "swamp",
  Mountain = "mountain"
}

export enum Climate {
  Arid = "arid",
  Humid = "humid",
  Cold = "cold",
  Temperate = "temperate",
  Monsoon = "monsoon",
  Mediterranean = "mediterranean",
  Polar = "polar"
}

export enum MagicPrinciple {
  Alchemy = "alchemy",
  Runes = "runes",
  Elementalism = "elementalism",
  DreamMagic = "dream-magic",
  BloodMagic = "blood-magic",
  Astral = "astral",
  Nature = "nature",
  Forbidden = "forbidden"
}

export enum MagicIntensity {
  Low = "low",
  Moderate = "moderate",
  High = "high",
  Unstable = "unstable"
}

export enum Government {
  Monarchy = "monarchy",
  Council = "council",
  Theocracy = "theocracy",
  TribalConfederation = "tribal-confederation",
  Republic = "republic",
  Empire = "empire"
}

export enum PrimaryTension {
  War = "war",
  Famine = "famine",
  SuccessionCrisis = "succession-crisis",
  ForbiddenMagic = "forbidden-magic",
  Prophecy = "prophecy",
  Rebellion = "rebellion",
  Plague = "plague"
}

export enum OriginTheme {
  Chaos = "chaos",
  DivineWar = "divine-war",
  CosmicEgg = "cosmic-egg",
  WorldSerpent = "world-serpent",
  TwinGods = "twin-gods",
  PrimordialForest = "primordial-forest"
}

export enum LegendaryArchetype {
  Hero = "hero",
  Tyrant = "tyrant",
  Prophet = "prophet",
  Trickster = "trickster",
  Wanderer = "wanderer",
  Sorcerer = "sorcerer"
}


// -----------------------------
// INPUT SEED INTERFACE
// -----------------------------

export interface WorldSeed {
  identity: {
    kingdomName: string;
    culturalFlavor: CulturalFlavor;
    namingStyle: NamingStyle;
  };
  environment: {
    biome: Biome;
    climate: Climate;
  };
  magic: {
    principle: MagicPrinciple;
    intensity: MagicIntensity;
  };
  society: {
    government: Government;
    primaryTension: PrimaryTension;
  };
  mythic: {
    originTheme: OriginTheme;
    legendaryArchetype: LegendaryArchetype;
  };
}


// -----------------------------
// DERIVED OUTPUT INTERFACE
// -----------------------------

export interface DerivedWorld {
  geography: {
    terrainProfile: {
      mountainDensity: number;
      riverFrequency: number;
      coastlineComplexity: number;
    };
    resources: string[];
  };
  culture: {
    values: string[];
    taboos: string[];
    aesthetic: string;
  };
  magicSystem: {
    costs: string[];
    limitations: string[];
    institutions: string[];
    magicalCreatures: string[];
  };
  politics: {
    stability: number;
    factions: string[];
    externalThreats: string[];
    internalFractures: string[];
  };
  mythology: {
    creationMyth: string;
    ancientCatastrophe: string;
    legendaryEra: string;
    prophecyMotifs: string[];
  };
}
