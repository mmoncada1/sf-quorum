import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial system
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        lineStrong: "var(--line-strong)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        accentInk: "var(--accent-ink)",
        "accent-ink": "var(--accent-ink)",
        accentWash: "var(--accent-wash)",
        yea: "var(--yea)",
        yeaWash: "var(--yea-wash)",
        nay: "var(--nay)",
        nayWash: "var(--nay-wash)",
        amber: "var(--amber)",
        amberWash: "var(--amber-wash)",
        slate: "var(--slate)",
        slateWash: "var(--slate-wash)",
        neutralWash: "var(--neutral-wash)",

        // Legacy aliases (older markup still references these)
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
        win: "var(--win)",
        loss: "var(--loss)",
        gold: "var(--gold)",
        info: "var(--info)",
        grape: "var(--grape)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontWeight: {
        base: "500",
        heading: "800",
      },
      borderRadius: {
        base: "6px",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
