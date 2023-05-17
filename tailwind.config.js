/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "987px",
      xl: "1440px",
      xxl: "2000px",
    },
    extend: {
      colors: {
        orange: {
          100: "#FDE7D6",
          200: "#FCD7BB",
          300: "#FAC299",
          400: "#F8AE78",
          500: "#F79A56",
          600: "#F58634",
          700: "#CC702B",
          800: "#A35923",
          900: "#7B431A",
        },

        blue: {
          100: "#CFDBE7",
          200: "#B0C2D7",
          300: "#88A4C2",
          400: "#6086AE",
          500: "#39679A",
          600: "#114986",
          700: "#0e3d70",
          800: "#0b3159",
          900: "#092543",
        },
        grey: {
          100: "#EAEAEA",
        },
        lightgreen: "#F1FFF9",
        lightdark: "#000B17",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
