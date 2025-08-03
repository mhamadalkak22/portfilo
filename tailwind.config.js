/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-logo': 'linear-gradient(90deg, #f860d8 0.06%, #5c4bf6 50.73%, #45bcff 100.06%)',
        'gradient-active': 'linear-gradient(90deg, #f860d8 0.06%, #5c4bf6 50.73%, #45bcff 100.06%), linear-gradient(0deg, #ffffff, #ffffff)',
      },
      animation: {
        fly: "fly linear infinite", // تعريف الرسوم المتحركة
      },
      keyframes: {
        fly: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};