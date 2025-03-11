import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { Component } from "react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [],
      manifest: {
        name: "Nepali Date Picker",
        short_name: "Nepali Date Picker",
        description: "Nepali Date Picker",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/images/nepal.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/calendar.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
  server: {
    allowedHosts: "all",
    host: true,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
      Views: path.resolve(__dirname, "src/Views"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
      UI: path.resolve(__dirname, "src/Components/UI"),
    },
  },
});
