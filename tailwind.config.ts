import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        HachiMaruPop: ["var(--font-HachiMaruPop)"],
        sans: ['"MS UI Gothic"', '"MS PGothic"', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        win: {
          gray: "#c0c0c0",
          base: "#c0c0c0",
          "nav-blue": "#0a246a", // Windows 2000 Active Title Bar Color
          "nav-gra-left": "#0a246a",
          "nav-gra-right": "#a6caf0",
          text: "#000000",
          white: "#ffffff",
        }
      },
      boxShadow: {
        'win-out': '1px 1px 0px 1px #ffffff inset, -1px -1px 0px 1px #808080 inset',
        'win-in': '1px 1px 0px 1px #808080 inset, -1px -1px 0px 1px #ffffff inset',
        'win-out-bold': '1px 1px 0px 1px #dfdfdf inset, -1px -1px 0px 1px #000000 inset, 2px 2px 0px 1px #ffffff inset, -2px -2px 0px 1px #808080 inset',
      }
    },
  },
  plugins: [],
};
export default config;
