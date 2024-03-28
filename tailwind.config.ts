import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { sm: "375px", md: "768px", base: "1440px" },
      colors: {
        primaryBg: "#F6F7F9",
        accent: "#405EFF",
        black: "#303031",
        grey: "#B2BAC7",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
