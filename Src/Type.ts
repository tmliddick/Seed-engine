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
// INPUT SEED
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
// EXTENDED STRUCTURES
// -----------------------------

export interface Region {
  name: string;
  type: string;
  populationDensity: "sparse" | "moderate" | "dense";
  dominantCulture: string;
  magicalInfluence: string;
}

export interface TradeRoute {
  fromRegion: string;
  toRegion: string;
  goods: string[];
  riskLevel: "low" | "medium" | "high";
  mode: "land" | "sea" | "arcane";
}

export interface LeylineNode {
  name: string;
  strength: "minor" | "major" | "convergence";
  region: string | null;
}

export interface LeylinePath {
  from: string;
  to: string;
  intensity: "weak" | "strong";
}

export interface AstralEvent {
  name: string;
  type: "conjunction" | "eclipse" | "storm" | "omen";
  effectSummary: string;
}

export interface CalendarInfo {
  currentSeason: string;
  festivals: string[];
  astralCycleNote: string;
}

export interface HistoryEvent {
  era: string;
  description: string;
}

export interface Prophecy {
  wording: string;
  motif: string;
  perceivedOutcome: string;
}

export interface MagicSchool {
  name: string;
  specialty: string;
  reputation: string;
}

export interface Deity {
  name: string;
  domain: string;
  temperament: string;
  symbol: string;
}

export interface MapGridCell {
  terrain: string;
  symbol: string;
}

// -----------------------------
// CORE DERIVED WORLD
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
    namingSamples?: string[];
  };
  magicSystem: {
    costs: string[];
    limitations: string[];
    institutions: string[];
    magicalCreatures: string[];
    schools?: MagicSchool[];
  };
  politics: {
    stability: number;
    factions: string[];
    externalThreats: string[];
    internalFractures: string[];
    generatedFactions?: string[];
  };
  mythology: {
    creationMyth: string;
    ancientCatastrophe: string;
    legendaryEra: string;
    prophecyMotifs: string[];
    pantheon?: Deity[];
    prophecy?: Prophecy;
    historyTimeline?: HistoryEvent[];
  };
  // Optional subsystems (populated by plugins)
  regions?: Region[];
  tradeRoutes?: TradeRoute[];
  leylines?: {
    nodes: LeylineNode[];
    paths: LeylinePath[];
  };
  astralWeather?: {
    currentEvent: AstralEvent | null;
    notes: string[];
    calendar?: CalendarInfo;
  };
  maps?: {
    asciiMini?: string;
    asciiFull?: string;
    grid?: MapGridCell[][];
  };
}

// -----------------------------
// PLUGIN SYSTEM TYPES
// -----------------------------

export interface SeedEnginePlugin {
  name: string;
  description?: string;
  // Called before generation (can tweak seed)
  extendSeed?(seed: WorldSeed): void;
  // Called after core world is generated
  extendWorld?(seed: WorldSeed, world: DerivedWorld): void;
  // Called after all plugins have run
  postProcess?(seed: WorldSeed, world: DerivedWorld): void;
  // Called by ASCII map plugin to let others draw
  addAsciiLayers?(
    seed: WorldSeed,
    world: DerivedWorld,
    map: string[][],
    miniMap: string[][]
  ): void;
}
