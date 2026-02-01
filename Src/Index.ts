import { registerCorePlugins } from "./plugins/register"
import { generateWorld } from "./generateWorld"

registerCorePlugins()

export { generateWorld }
export * from "./types";
export * from "./generateWorld";
