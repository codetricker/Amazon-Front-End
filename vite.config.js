import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Amazon-Front-End/", // Make sure this exactly matches your repo name, case-sensitive
  plugins: [react()],
});
