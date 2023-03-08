import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export const _getPath = (...segments: string[]) => path.resolve(__dirname, "src", ...segments);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "app/styles/vars.scss";
          @import "app/styles/mixins.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      app: _getPath("app"),
      processes: _getPath("processes"),
      pages: _getPath("pages"),
      widgets: _getPath("widgets"),
      entities: _getPath("entities"),
      features: _getPath("features"),
      shared: _getPath("shared"),
      styles: _getPath("app/styles"),
      public: _getPath("..", "public"),
    },
  },
});
