import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.perezpujantealejandro.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [icons({ compiler: "astro" })],
  },
});
