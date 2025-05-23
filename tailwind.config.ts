import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        darkTheme: "#0F172A",
        lightHover: "#F1F5F9",
        darkHover: "#1E293B",
        primary: {
          light: "#F1F5F9",
          dark: "#0F172A",
        },
        secondary: {
          light: "#E2E8F0",
          dark: "#1E293B",
        },
        accent: {
          light: "#10B981",
          dark: "#34D399",
        }
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px,1fr))",
      },
      backgroundColor: {
        'card': {
          light: 'white',
          dark: '#1E293B',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
