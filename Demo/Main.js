import { generateWorld } from "../dist/index.js";

document.getElementById("generate").onclick = () => {
  const seed = {
    identity: {
      kingdomName: "Demo",
      culturalFlavor: "Forest",
      namingStyle: "soft-vowel"
    },
    environment: {
      biome: "temperate-forest",
      climate: "humid"
    },
    magic: {
      principle: "nature",
      intensity: "moderate"
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
  document.getElementById("output").textContent = JSON.stringify(world, null, 2);
};
