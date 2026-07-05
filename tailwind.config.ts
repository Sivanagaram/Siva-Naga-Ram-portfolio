import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aurora signature palette
        ink: "#05060a",        // deep space black
        slate: "#0b0e16",      // panel
        // Accents are theme-aware (deeper in light mode for contrast). The vivid
        // `aurora` gradient below keeps its literal hex, so buttons/logo stay bright.
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
        magenta: "rgb(var(--magenta) / <alpha-value>)",
        // light-mode surfaces
        paper: "#f7f8fc",
        cloud: "#eef1f8",
        // Theme-aware semantic tokens (driven by CSS vars in globals.css).
        // A single class name adapts between dark and light automatically.
        fg: "rgb(var(--fg) / <alpha-value>)",            // primary text
        mist: "rgb(var(--mist) / <alpha-value>)",        // muted / secondary text
        surface: "rgb(var(--surface) / <alpha-value>)",  // panel fills (use with alpha)
        hair: "rgb(var(--hair) / <alpha-value>)",        // hairline borders (use with alpha)
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Smoother 4-stop aurora — cyan → indigo → violet → magenta.
        "aurora": "linear-gradient(115deg, #22d3ee 0%, #6366f1 38%, #8b5cf6 68%, #e879f9 100%)",
        "aurora-soft": "linear-gradient(115deg, rgba(34,211,238,.18), rgba(139,92,246,.16), rgba(232,121,249,.16))",
        // Slightly brighter variant tuned for clipped gradient text legibility.
        "aurora-text": "linear-gradient(100deg, #38e0f5 0%, #a78bfa 50%, #f0abfc 100%)",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blob: "blob 18s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
