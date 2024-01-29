import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx"],
  },
  optimizeDeps: {
    include: [],
  },
  base: "https://bobgus39.github.io/APMC.github.io/",
});
