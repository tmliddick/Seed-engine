import { registerPlugin } from "../src/pluginSystem";

registerPlugin({
  name: "Example Plugin",
  extend(seed, world) {
    world.culture.values.push("plugin-enhanced");
  }
});
