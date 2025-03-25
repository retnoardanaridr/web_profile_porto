/** @type {import('tailwindcss').Config} */
module.exports = {
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
  ],
}

