module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
