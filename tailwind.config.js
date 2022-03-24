module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dd7c8e",

          secondary: "#9a64db",

          accent: "#7a40f7",

          neutral: "#141E24",

          "base-100": "#262C50",

          info: "#779BD4",

          success: "#15C19F",

          warning: "#F8A90D",

          error: "#E84F59",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
