const { rem } = require("./utilities/convertNumbers");

const screenSizing = {
  "screen-20": "20vw",
  "screen-25": "25vw",
  "screen-40": "40vw",
  "screen-50": "50vw",
  "screen-60": "60vw",
  "screen-75": "75vw",
  "screen-80": "80vw",
  "screen-85": "85vw",
  "screen-90": "90vw",
  "screen-95": "95vw"
};

// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10"
      },
      opacity: {
        "15": "0.15",
        "35": "0.35",
        "45": "0.45",
        "55": "0.55",
        "65": "0.65",
        "85": "0.85"
      },
      borderWidth: {
        "3": "3px",
        "6": "6px",
        "8": "8px",
        "12": "12px"
      },
      width: {
        ...screenSizing
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        ...screenSizing
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        ...screenSizing,
        "8xl": rem(1440),
        "9xl": rem(1920)
      },
      height: {
        "screen-20": "20vh",
        "screen-25": "25vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-75": "75vh",
        "screen-80": "80vh",
        "screen-85": "85vh",
        "screen-90": "90vh",
        "screen-95": "95vh"
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        ...screenSizing
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        ...screenSizing
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
        "100%": "100%",
        "150%": "150%",
        "200%": "200%",
        "300%": "300%",
        "1000%": "1000%"
      },
      rotate: {
        "-270": "-270deg",
        "-180": "-180deg",
        "-135": "-135deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "0": "0",
        "45": "45deg",
        "90": "90deg",
        "135": "135deg",
        "180": "180deg",
        "270": "270deg"
      },
      transitionDuration: {
        "0": "0ms",
        "50": "50ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms"
      },
      transitionDelay: (theme) => theme("transitionDuration"),
      transitionTimingFunction: {
        "ease-in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
        "ease-out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
        "ease-in-out-sine": "cubic-bezier(0.37, 0, 0.63, 1)",
        "ease-in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
        "ease-out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
        "ease-in-out-quad": "cubic-bezier(0.45, 0, 0.55, 1)",
        "ease-in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
        "ease-out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "ease-in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "ease-in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
        "ease-out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
        "ease-in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
        "ease-in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "ease-in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "ease-out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "ease-in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "ease-in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "ease-out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)"
      },
      hueRotate: {
        "-75": "-75deg",
        "-50": "-50eg",
        0: "0deg",
        50: "50deg",
        75: "75deg"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
    require("tailwindcss-scroll-snap"),
    require("tailwindcss-debug-screens")
  ]
};
