/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "high-dpi": {
          raw: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi)",
        },
			},
			colors: {
				background: "oklch(var(--background) / <alpha-value>)",
				foreground: "oklch(var(--foreground) / <alpha-value>)",
			}
    },
  },
  plugins: [],
};
