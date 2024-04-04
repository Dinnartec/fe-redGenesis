import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#333333",
        "secondary": "#3730A3",
        "tertiary": "#A5B4FC",
        "blue": "#80BFFF",
        "grayLight": "#F2F2F2",
        "black": "#1E1E1E",
        "white": "#FFFFFF",
        "gray": "#ABABAB",
        "red": "#EB5757",
        "blueLight": "#C8E3FF",
        "green": "#6CE1BD",
        "orange": "#F28437",
      },
      boxShadow: {
        'custom-tooltip': '0 0 1px 0 rgba(0, 0, 0, 0.5)',
        "custom-button": '3px 3px 10px 0 rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
};
export default config;
