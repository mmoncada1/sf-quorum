import type { Config } from "tailwindcss";

// Neobrutalism design tokens (neobrutalism.dev convention, Tailwind v3 setup).
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        mainAccent: "var(--main-accent)",
        overlay: "var(--overlay)",
        bg: "var(--bg)",
        bw: "var(--bw)",
        blank: "var(--blank)",
        text: "var(--text)",
        mtext: "var(--mtext)",
        border: "var(--border)",
        ring: "var(--ring)",
        ringOffset: "var(--ring-offset)",
        secondaryBlack: "#212121",
        // Bright category blocks
        win: "var(--win)",
        loss: "var(--loss)",
        gold: "var(--gold)",
        info: "var(--info)",
        grape: "var(--grape)",
      },
      borderRadius: {
        base: "6px",
      },
      boxShadow: {
        shadow: "var(--shadow)",
        nbsm: "2px 2px 0px 0px var(--border)",
        nblg: "8px 8px 0px 0px var(--border)",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "800",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
