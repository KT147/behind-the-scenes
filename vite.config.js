import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react"; // ← lisa see
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),              // ← lisa see rida
    MillionLint.vite(),
  ],
});
