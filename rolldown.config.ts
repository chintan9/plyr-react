import { defineConfig } from "tsdown";
import copy from "rollup-plugin-copy";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  plugins: [
    copy({
      targets: [{ src: "node_modules/plyr/dist/plyr.css", dest: "dist" }],
    }),
  ],
});
