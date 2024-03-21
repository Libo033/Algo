import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        opacity: {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
        fromBottom: {
          from: { transform: "translateY(200vh)", overflow: "hidden" },
          to: { transform: "translateY(0)", overflow: "hidden" },
        },
        toBottom: {
          from: { transform: "translateY(0)", overflow: "hidden" },
          to: { transform: "translateY(200vh)", overflow: "hidden" },
        },
      },
      animation: {
        title: "opacity 1s 1 0s",
        other: "opacity 450ms 1 0s",
        appear: "fromBottom 600ms 1 0s",
        disappear: "toBottom 600ms 1 0s",
      },
    },
  },
  plugins: [],
};
export default config;
