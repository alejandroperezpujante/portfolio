import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.perezpujantealejandro.dev",
  integrations: [
    tailwind({ applyBaseStyles: false }),
		sitemap(),
		compress()
  ],
  vite: {
    plugins: [
      icons({
        compiler: "astro",
      }),
    ],
  },
});
