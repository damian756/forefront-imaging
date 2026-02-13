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
        // Blue Fiber Optic Palette
        "deep-void": "#0a0f19",
        "dark-blue": "#0f1629",
        "mid-blue": "#1a2847",
        "fiber-blue": "#3b82f6",
        "fiber-cyan": "#60a5fa",
        "fiber-sky": "#38bdf8",
        "soft-white": "#f8fafc",
        "cool-white": "#dbeafe",
        "warm-gray": "#cbd5e1",
        "neon-blue": "#2563eb",
        "deep-azure": "#1e40af",
        "laser-blue": "#38bdf8",
        "dark-steel": "#52525b",
        "light-steel": "#71717a",
        "cool-gray": "#cbd5e1",
      },
    },
  },
  plugins: [],
};
export default config;