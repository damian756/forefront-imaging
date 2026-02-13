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
        // Purple Fiber Optic Palette
        "deep-void": "#0f0a19",
        "dark-purple": "#1a1225",
        "mid-purple": "#2d1b4e",
        "fiber-purple": "#8b5cf6",
        "fiber-violet": "#a78bfa",
        "fiber-pink": "#c084fc",
        "soft-white": "#f8fafc",
        "cool-white": "#e0e7ff",
        "warm-gray": "#cbd5e1",
        "neon-purple": "#9333ea",
        "deep-magenta": "#a21caf",
        "laser-purple": "#c084fc",
        "dark-steel": "#52525b",
        "light-steel": "#71717a",
        "cool-gray": "#cbd5e1",
      },
    },
  },
  plugins: [],
};
export default config;