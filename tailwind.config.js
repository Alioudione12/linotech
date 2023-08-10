/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode : 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#36C5F0",
        green: "#1DB954",
        red: "#F25022",
        yellow: "#FFB900",
        blackLight: "#191414",
        grey: "#737373",
        "deep-blue": "#3d3d3d",
        "dark-grey": "#757575",
        "opaque-black":"rgba(0,0,0,0.35)",
      },
      backgroundImage:(theme)=>({
        "gradient-rainbow":"linear-gradient(81.66deg, #FFFFFF 7.21%, #FFFFFF 45.05%, #1DB954 78.07%)",
        "gradient-rainblue":"linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 96.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('/src/assets/brush.png')",
        person1: "url('/src/assets/person-1.png')",
        person2: "url('/src/assets/person-2.png')",
        person3: "url('/src/assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

