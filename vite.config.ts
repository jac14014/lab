import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        governance: path.resolve(__dirname, "governance.html"),
        donate: path.resolve(__dirname, "donate.html"),
        sitemap: path.resolve(__dirname, "sitemap.html"),
        contact: path.resolve(__dirname, "contact.html"),
        articlesOfIncorporation: path.resolve(__dirname, "articles-of-incorporation.html"),
        bylaws: path.resolve(__dirname, "bylaws.html"),
        orgChart: path.resolve(__dirname, "org-chart.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
