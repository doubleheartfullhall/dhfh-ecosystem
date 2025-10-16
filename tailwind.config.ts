import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dhfh: {
          red: "#C43A2F",
          jade: "#1F8A70",
          porcelain: "#FAF7F2",
          ink: "#1B1B1B",
          gold: "#C6A15B",
          sky: "#7BB7E3",
          blush: "#F2C7C2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        sans: ["Nunito Sans", "system-ui", "sans-serif"],
        han: ["Noto Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
