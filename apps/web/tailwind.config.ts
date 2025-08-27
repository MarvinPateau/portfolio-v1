import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "var(--color-primary-900)",
          700: "var(--color-primary-700)",
          500: "var(--color-primary-500)",
          100: "var(--color-primary-100)"
        },
        accent: "var(--color-accent)"
      }
    }
  },
  plugins: []
};

export default config;
