import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          'left': "rgba(255, 112, 0, 1)",
          'mid': "rgba(226, 152, 94, 1)",
          "right": "rgba(226, 153, 95, 1)",
          '800': "rgba(255, 241, 230, 1)"
        },
        dark: {
          100 : "rgba(0, 0, 0, 1)",
          200 : "rgba(15, 17, 23, 1)",
          300 : "rgba(21, 24, 33, 1)",
          400 : "rgba(33, 39, 52, 1)",
          500 : "rgba(63, 67, 84, 1)",
          "left": "rgba(23, 28, 35, 0.41)",
          "right": "rgba(19, 22, 28, 0.7)"
        },
        light: {
          900: "rgba(255, 255, 255, 1)",
          850: "rgba(253, 253, 253, 1)",
          800: "rgba(244, 246, 248, 1)",
          700: "rgba(220, 227, 241, 1)",
          500: "rgba(123, 142, 200, 1)",
          400: "rgba(133, 142, 173, 1)"
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
export default config;
