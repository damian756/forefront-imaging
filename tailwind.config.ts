import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium Studio Hardware Palette
        graphite: "#18181b",
        "warm-charcoal": "#27272a",
        "deep-charcoal": "#1c1c1f",
        bronze: "#a0826d",
        copper: "#b8936e",
        "soft-white": "#f8fafc",
        "warm-white": "#fafaf9",
        "warm-gray": "#a8a29e",
        "deep-burgundy": "#991b1b",
        "muted-burgundy": "#b91c1c",
        "studio-gold": "#c9a772",
        "brushed-steel": "#71717a",
        "dark-steel": "#52525b",
      },
    },
  },
  plugins: [],
};
export default config;