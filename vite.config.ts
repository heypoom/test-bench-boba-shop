import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const API_CREDENTIALS = Buffer.from("admin:koiboba2026").toString("base64");

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        // Attach Basic Auth so the dev server forwards credentials automatically.
        // In production you would handle auth in the frontend request headers instead.
        headers: {
          Authorization: `Basic ${API_CREDENTIALS}`,
        },
      },
    },
  },
});
