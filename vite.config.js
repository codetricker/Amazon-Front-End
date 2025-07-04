// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Amazon-Front-End/", // Correct for repo-name deployment :contentReference[oaicite:1]{index=1}
});
