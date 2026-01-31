# Plugin System

Extend the Seed Engine with custom logic.

## Example

```ts
registerPlugin({
  name: "My Plugin",
  extend(seed, world) {
    world.politics.factions.push("Plugin Faction");
  }
});
