import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          red: "var(--color-primary)",
          redDark: "var(--color-primary-dark)",
          ink: "var(--color-ink)",
          muted: "var(--color-text-body)",
          bg: "var(--color-bg-light)",
          border: "var(--color-border)",
        },
      },
      boxShadow: {
        soft: "var(--color-shadow)",
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
