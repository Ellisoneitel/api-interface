import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// PORT matches the backend's env var (both are launched with the same env by
// concurrently); UI_PORT moves the Vite dev server for a second instance.
const API_PORT = Number(process.env.PORT) || 8787;
const UI_PORT = Number(process.env.UI_PORT) || 5173;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: UI_PORT,
    proxy: {
      "/api": {
        target: `http://localhost:${API_PORT}`,
        changeOrigin: true,
        // Disable buffering so Server-Sent Events stream through immediately.
        configure: (proxy) => {
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["cache-control"] = "no-cache, no-transform";
          });
        },
      },
    },
  },
});
