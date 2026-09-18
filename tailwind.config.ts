import type { Config } from "tailwindcss";
import { colors, fonts, radii } from "./src/config/tokens";

/**
 * Design tokens live in `src/config/tokens.ts` and are imported here so there
 * is exactly one source of truth. Add a colour there, not in this file.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        accent: colors.accent,
        bone: colors.bone,
        surface: colors.surface,
        ink: colors.ink,
      },
      fontFamily: {
        // Body / UI
        sans: [fonts.body, "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        // Headings
        display: [fonts.display, "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: radii.card,
        pill: radii.pill,
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      keyframes: {
        // Required by <InfiniteMovingCards />
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
