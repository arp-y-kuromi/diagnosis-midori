import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/diagnosis-midori/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        fallback: "index.html",
      },
    },
  },
});
