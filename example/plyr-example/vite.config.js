import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This allows Vite to be accessed from the Gitpod preview URL
    hmr: {
      clientPort: 443,
    },
    // Respond to all hosts, which is needed for Gitpod
    allowedHosts: [".gitpod.io"],
  },
});
