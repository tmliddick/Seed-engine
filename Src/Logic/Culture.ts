import {
  WorldSeed,
  CulturalFlavor,
  Government,
  PrimaryTension,
  MagicPrinciple
} from "../types";

export function deriveCulture(seed: WorldSeed) {
  const { culturalFlavor } = seed.identity;
  const { government, primaryTension } = seed.society;
  const { principle } = seed.magic;

  const values = [];
  const taboos = [];
  let aesthetic = "";

  const flavorValues: Record<CulturalFlavor, string[]> = {
    Maritime: ["exploration", "adaptability"],
    Highland: ["honor", "resilience"],
    Forest: ["harmony", "secrecy"],
    Desert: ["hospitality", "survival"],
    Nordic: ["endurance", "craftsmanship"],
    Steppe: ["mobility", "freedom"],
    Tropical: ["celebration", "community"],
    Custom: []
  };

  const flavorAesthetic: Record<CulturalFlavor, string> = {
    Maritime: "flowing lines and driftwood carvings",
    Highland: "stonework and tartan patterns",
    Forest: "organic shapes and wooden motifs",
    Desert: "ornate textiles and sun motifs",
    Nordic: "runed wood and carved bone",
    Steppe: "leatherwork and wind-banners",
    Tropical: "bright dyes and woven patterns",
    Custom: "unique local style"
  };

  values.push(...flavorValues[culturalFlavor]);
  aesthetic = flavorAesthetic[culturalFlavor];

  const govValues: Record<Government, string[]> = {
    monarchy: ["loyalty", "lineage"],
    council: ["debate", "civic duty"],
    theocracy: ["piety", "ritual purity"],
    "tribal-confederation": ["kinship", "oral tradition"],
    republic: ["citizenship", "law"],
    empire: ["order", "expansion"]
  };

  values.push(...govValues[government]);

  const tensionTaboos: Record<PrimaryTension, string[]> = {
    "forbidden-magic": ["unlicensed spellcasting"],
    "succession-crisis": ["discussing heirs"],
    war: ["consorting with enemies"],
    famine: ["wasting food"],
    prophecy: ["mocking omens"],
    rebellion: ["speaking treason"],
    plague: ["touching outsiders"]
  };

  taboos.push(...tensionTaboos[primaryTension]);

  const magicAesthetic: Record<MagicPrinciple, string> = {
    alchemy: "geometric metalwork",
    runes: "angular carved symbols",
    elementalism: "raw elemental motifs",
    "dream-magic": "surreal flowing forms",
    "blood-magic": "stark ritual contrasts",
    astral: "celestial patterns",
    nature: "leaf and vine motifs",
    forbidden: "ominous sigils"
  };

  aesthetic += ` with ${magicAesthetic[principle]}`;

  return { values, taboos, aesthetic };
}
