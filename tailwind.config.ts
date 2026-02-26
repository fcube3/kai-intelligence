import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        data: ['JetBrains Mono', 'monospace'],
        ui: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem', // rounded-xl
        btn: '0.5rem',   // rounded-lg
      },
      colors: {
        background: "#0d1117",
        card: "#161b22",
        border: "#30363d",
        gold: "#d4af37",
        silver: "#a6a6a6",
        crypto: "#f7931a",
        // Shared design tokens
        accent: "#F5A623",
        'accent-muted': "rgba(245,166,35,0.15)",
        'accent-border': "rgba(245,166,35,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
