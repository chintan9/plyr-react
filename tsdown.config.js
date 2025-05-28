import { defineConfig } from "tsdown/config";

export default defineConfig({
  entry: "src/index.tsx",
  dts: true,
  exports: true,
  minify: true,
  target: ["node20", "es2022"],
  format: ["es", "cjs"],
});
