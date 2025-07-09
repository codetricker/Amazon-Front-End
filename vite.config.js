// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   baseURL: "https://amazon-back-end-k90i.onrender.com", // Correct for repo-name deployment :contentReference[oaicite:1]{index=1}
// });

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/", // ✅ Critical for correct asset paths in deployment
  plugins: [react()],
});
