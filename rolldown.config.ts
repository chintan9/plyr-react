import { defineConfig } from "tsdown";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is our custom plugin object
const copyCssPlugin = {
  name: "copy-css",

  // This function runs after the bundle is written to the dist folder
  writeBundle() {
    const source = path.resolve(__dirname, "node_modules/plyr/dist/plyr.css");
    const destinationDir = path.resolve(__dirname, "dist");
    const destinationFile = path.join(destinationDir, "plyr.css");

    // Ensure the 'dist' directory exists. The recursive option prevents errors if it already exists.
    fs.mkdirSync(destinationDir, { recursive: true });

    // Copy the file
    fs.copyFileSync(source, destinationFile);

    console.log("✅ Copied plyr.css to dist/plyr.css");
  },
};

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  // Use our custom plugin
  plugins: [copyCssPlugin],
});
