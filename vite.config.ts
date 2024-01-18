import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat selected tags with a dash as custom elements
          isCustomElement: (tag) =>
            [
              "nord-header",
              "nord-input",
              "nord-stack",
              "nord-card",
              "nord-button",
              "nord-avatar",
              "nord-icon",
              "nord-checkbox",
              "nord-toast",
              "nord-toast-group",
              "nord-layout",
              "nord-dropdown",
              "nord-nav-item",
              "nord-nav-group",
              "nord-navigation",
              "nord-tooltip",
              "nord-banner",
              "nord-command-menu",
              "nord-dropdown-item",
              "nord-dropdown-group",
            ].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
