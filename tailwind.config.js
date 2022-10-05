/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        "hovering": "hovering 5s ease-in-out infinite"
    },
    keyframes: {
        "hovering": {
            "0%": {
                transform: "translateY(10px)",
                filter: "drop-shadow(0px 4px 5px #000)"
            },
            "50%": {
              transform: "translateY(0px)",
              filter: "drop-shadow(0px 0px 0px #000)"
            },
            "100%": {
                transform: "translateY(10px)",
                filter: "drop-shadow(0px 4px 5px #000)"
            }
        }
      }
    },
  },
  plugins: [],
}
