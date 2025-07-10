/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
        },
        animation: {
          "fade-in": "fadeIn 0.8s ease-out",
          "slide-up": "slideUp 0.8s ease-out",
          "slide-down": "slideDown 0.5s ease-out",
          "slide-in": "slideIn 0.6s ease-out",
          "scale-up": "scaleUp 0.4s ease-out",
          float: "float 3s ease-in-out infinite",
          "float-delayed": "floatDelayed 3s ease-in-out infinite 1s",
          "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
          twinkle: "twinkle 1.5s ease-in-out infinite",
          gradient: "gradient 3s ease infinite",
          "spin-slow": "spinSlow 3s linear infinite",
          pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          slideUp: {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          slideDown: {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          slideIn: {
            "0%": { opacity: 0, transform: "translateX(-30px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
          },
          scaleUp: {
            "0%": { opacity: 0, transform: "scale(0.9)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
          float: {
            "0%,100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
          floatDelayed: {
            "0%,100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-15px)" },
          },
          bounceGentle: {
            "0%,100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-5px)" },
          },
          twinkle: {
            "0%,100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.5, transform: "scale(1.2)" },
          },
          gradient: {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
          spinSlow: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
