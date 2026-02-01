import { registerPlugin } from "../src/pluginSystem";
import {
  SeedEnginePlugin,
  WorldSeed,
  DerivedWorld,
  TradeRoute
} from "../src/types";

const plugin: SeedEnginePlugin = {
  name: "tradeRoutes",
  description: "Generates trade routes between regions.",
  extendWorld(seed: WorldSeed, world: DerivedWorld) {
    if (!world.regions) return;

    const routes: TradeRoute[] = [];
    const goodsPool = [
      "grain",
      "timber",
      "iron",
      "spices",
      "silk",
      "arcane reagents",
      "rare texts"
    ];

    for (let i = 0; i < world.regions.length - 1; i++) {
      const from = world.regions[i];
      const to = world.regions[i + 1];

      routes.push({
        fromRegion: from.name,
        toRegion: to.name,
        goods: goodsPool.slice(0, 2 + (i % 3)),
        riskLevel: i % 3 === 0 ? "high" : i % 2 === 0 ? "medium" : "low",
        mode:
          seed.identity.culturalFlavor === "Maritime" ? "sea" : i % 2 === 0 ? "land" : "arcane"
      });
    }

    world.tradeRoutes = routes;
  }
};

registerPlugin(plugin);
