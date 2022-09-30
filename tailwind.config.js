/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        "drop-bottom": "drop-bottom 0.8s ease-in-out forwards"
      },
      keyframes: {
          "drop-bottom": {
              "0%": {
                  transform: "translateY(-20px)",
                  filter: "drop-shadow(0px 0px 0px #282e3f00);"
              },
              "80%": {
                  transform: "translateY(0px)",
              },
              "100%": {
                filter: "drop-shadow(0px 8px 8px #282e3f88);"
              }
          }
      }
    },
  },
  plugins: [],
}
