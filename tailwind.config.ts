import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1215px",
        "2xl": "1480px",
      },
    },
    extend: {
      screens: {
        "3xl": "1922px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "hsl(var(--secondary-dark))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        "text-base": "16px",
        "2xl": "1.75rem",
        "3xl": "2rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        DEFAULT: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
        xl: "0 16px 32px 0 rgba(0, 0, 0, 0.1)",
        "2xl": "0 32px 64px 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-hamburgers"),
    function ({ addUtilities }: unknown) {
      addUtilities({
        ".filter-primary": {
          filter:
            "brightness(0) invert(53%) sepia(59%) saturate(2709%) hue-rotate(351deg) brightness(91%) contrast(108%)",
        },
        ".filter-secondary": {
          filter:
            "brightness(0) invert(13%) sepia(57%) saturate(5347%) hue-rotate(214deg) brightness(94%) contrast(99%);",
        },
        ".filter-white": {
          filter: "brightness(0) invert(1)",
        },
        ".filter-black": {
          filter: "brightness(0)",
        },
      });
    },
  ],
} satisfies Config;

export default config;
