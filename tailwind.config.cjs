/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
