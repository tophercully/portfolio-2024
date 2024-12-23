/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(var(--startX), var(--startY))" },
          "50%": { transform: "translate(var(--endX), var(--endY))" },
        },
      },
      animation: {
        float: "float 40s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
      },
      colors: {
        base: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          150: "#eeeeee",
          200: "#D9D9D9",
          300: "#B8B8B8",
          400: "#979797",
          500: "#767676",
          600: "#5C5C5C",
          700: "#434343",
          800: "#292929",
          850: "#181818",
          900: "#101010",
          950: "#030303",
        },
        blood: "#FC4C4E",
        error: "#dc2626",
        success: "#16a34a",
        info: "#1d4ed8",
        special: "#7e22ce",
        typescript: "#3178C6",
        javascript: "#F7DF1E",
        react: "#61DAFB",
        html5: "#E34F26",
        css: "#1572B6",
        tailwind: "#06B6D4",
        nodejs: "#339933",
        next: "#000000",
        p5js: "#ED225D",
        threejs: "#000000",
        opengl: "#5586A4",
        cpp: "#00599C",
        figma: "#F24E1E",
      },
      fontFamily: {
        montreal: ['"PP Neue Montreal"', "sans-serif"],
        montrealmono: ['"PP Neue Montreal Mono"', "monotype"],
        neuehaas: ['"Neue Haas Display"', "sans-serif"],
        overused: ["Overused Grotesk", "sans-serif"],
        satoshi: [
          "Satoshi",
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
