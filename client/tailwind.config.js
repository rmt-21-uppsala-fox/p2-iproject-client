module.exports = {
  content: ['./public/**/*.{html,js}', './src/**/*.{html,js,vue}', '../../node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
