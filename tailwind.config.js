/** @type {import('tailwindcss').Config} */
import about3 from "./src/pages/About/assets/images/aboutimage3.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        lightdark: "#000B17",
      },
      backgroundImage: {
        Merrasimg: "url('./src/pages/Home/images/meraasico.png')",
        desktopmerras: "url('./src/pages/Home/images/bigmerras.png')",
        cardimg: "url('./src/pages/Home/images/contentmanagement.png')",
        schoolmgt: "url('./src/pages/Home/images/schoomgtsys.png')",
        merrasfooter: "url('./src/pages/Home/images/merrasfooterimg.png')",
        about3: "url('./src/pages/About/assets/images/aboutimage3.png')",
      },
    },
  },
  plugins: [],
};

//  &::after {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     transform: translateX(-100%);
//     background-image: linear-gradient(
//       90deg,
//       rgba(#fff, 0) 0,
//       rgba(#fff, 0.2) 20%,
//       rgba(#fff, 0.5) 60%,
//       rgba(#fff, 0)
//     );
//     animation: shimmer 2s infinite;
//     content: '';
//   }

//  @keyframes shimmer {
//     100% {
//       transform: translateX(100%);
//     }
//   }
