import { generateGoldenWorld } from "../dist/examples/goldenWorld.js";

document.getElementById("generate").onclick = () => {
  const world = generateGoldenWorld();
  const output = document.getElementById("output");
  const map = document.getElementById("map");

  output.textContent = JSON.stringify(world, null, 2);
  map.textContent = world.maps?.asciiMini || "(no map)";
};
