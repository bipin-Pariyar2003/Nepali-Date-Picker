import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { Component } from "react";
import path from "path";

export default defineConfig({
  plugins: [react()],
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
    },
  },
});
