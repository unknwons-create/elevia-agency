import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b3e",
          dark: "#060e20",
        },
        gold: "#f0a500",
        "glass-white": "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
