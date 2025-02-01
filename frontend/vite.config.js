import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASEURL } from "./src/utils/config";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000" ||  BASEURL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
