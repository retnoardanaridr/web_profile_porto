/** @type {import('tailwindcss').Config} */
const webpack = require('webpack');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      peach: '#FF9B9B',
      babypeach: '#FDCDA5',
      pastelpink: '#FEE8F4',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
});

