// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10px rgba(0, 0, 0, 0.1)', // Custom shadow
      },
    },
  },
  plugins: [],
}