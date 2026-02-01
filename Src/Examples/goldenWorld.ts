import { WorldSeed } from "../types";
import { generateWorld } from "../generateWorld";

// Import all plugins so they're registered
import "../../plugins/regions";
import "../../plugins/tradeRoutes";
import "../../plugins/leylines";
import "../../plugins/astralWeather";
import "../../plugins/asciiMap";
import "../../plugins/nameGenerator";
import "../../plugins/factions";
import "../../plugins/calendar";
import "../../plugins/history";
import "../../plugins/prophecy";
import "../../plugins/magicSchools";
import "../../plugins/pantheon";
import "../../plugins/mapGrid";

export function generateGoldenWorld() {
  const seed: WorldSeed = {
    identity: {
      kingdomName: "Aurithal",
      culturalFlavor: "Forest",
      namingStyle: "soft-vowel"
    },
    environment: {
      biome: "temperate-forest",
      climate: "humid"
    },
    magic: {
      principle: "nature",
      intensity: "high"
    },
    society: {
      government: "council",
      primaryTension: "prophecy"
    },
    mythic: {
      originTheme: "primordial-forest",
      legendaryArchetype: "prophet"
    }
  };

  const world = generateWorld(seed);
  return world;
}
