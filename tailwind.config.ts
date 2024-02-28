import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes:{
        "slide-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          }
        },
        "slide-up":{
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0",
          }
        }
      },
      animation: {
        "slide-down": "slide-down 0.35s cubic-bezier(0.87, 0, 0.13, 1)",
        "slide-up": "slide-up 0.35s cubic-bezier(0.87, 0, 0.13, 1)"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
} satisfies Config;
export default config;
