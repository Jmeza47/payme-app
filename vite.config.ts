import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    assetsInlineLimit: 8192,
    minify: true,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor code
          }
        },
      },
    },
  },
  define: {
    __DEV__: false, // Use this flag in your code for environment-specific code
  },
});
