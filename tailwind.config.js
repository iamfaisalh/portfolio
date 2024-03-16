/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0d0f13",
          dark: "#222831",
          gray: "#37414f",
          blue: "#3a4eff",
          purple: "#6d7cff",
          lavender: "#a0aaff",
          violet: "#8385f2",
          pink: "#dd56f4"
        }
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

// #222831, #6D7CFF, #37414f, #0d0f13, #a0aaff, #3a4eff