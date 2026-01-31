import {
  WorldSeed,
  Government,
  PrimaryTension,
  MagicIntensity,
  CulturalFlavor
} from "../types";

export function derivePolitics(seed: WorldSeed) {
  const { government, primaryTension } = seed.society;
  const { intensity } = seed.magic;
  const { culturalFlavor } = seed.identity;

  const baseStability: Record<Government, number> = {
    monarchy: 60,
    council: 50,
    theocracy: 70,
    "tribal-confederation": 40,
    republic: 55,
    empire: 55
  };

  let stability = baseStability[government];

  const tensionMod: Record<PrimaryTension, number> = {
    war: -20,
    famine: -15,
    "succession-crisis": -25,
    "forbidden-magic": -10,
    prophecy: -5,
    rebellion: -30,
    plague: -20
  };

  stability += tensionMod[primaryTension];

  if (intensity === MagicIntensity.Unstable) {
    stability -= 10;
  }

  const factions: string[] = [];

  const flavorFactions: Record<CulturalFlavor, string[]> = {
    Maritime: ["Merchant Admiralty"],
    Highland: ["Clan Chiefs"],
    Forest: ["Druidic Circles"],
    Desert: ["Sand Tribes"],
    Nordic: ["Shield Brotherhood"],
    Steppe: ["Horse Lords"],
    Tropical: ["Island Councils"],
    Custom: ["Local Power Bloc"]
  };

  factions.push(...flavorFactions[culturalFlavor]);

  if (intensity === MagicIntensity.Unstable) {
    factions.push("Arcane Regulators
