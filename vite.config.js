// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        form: resolve(__dirname, "src/form/form.html"),
        produit: resolve(__dirname, "src/produit/produit.html"),
        register: resolve(__dirname, "src/auth/register.html"),
        login: resolve(__dirname, "src/auth/login.html"),
      },
    },
  },
});
