import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Projetos publicados na raiz usam "/". Se necessário, defina VITE_BASE_PATH
// para um subdiretório, por exemplo "/nome-do-repositorio/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/"
});
