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
        lightblue: "#05A3F3", 
        darkblue: "#174EA4",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        unbounded: ['var(--unbounded)', 'sans-serif'],
        caladea: ['var(--caladea)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
