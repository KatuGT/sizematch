/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      screens: {
        'desktop': '1400px',
        'laptop': '932px',
        'mobile': '564px'
      },
      colors:{
        'sizeAcolor' : '#0b7c0b',
        'sizeAcolorLight' : '#3bc83b',
        'sizeBcolor' : '#0c5095',
        'sizeBcolorLight' : '#3ba7c8',
        'sizeCcolor' : '#9e7c0d',
        'sizeCcolorLight' : '#dbb331',
        'sizeDcolor' : '#93166d',
        'sizeDcolorLight' : '#c9389d',
        'sizeEcolor' : '#88af05',
        'sizeEcolorLight' : '#cae04b',
        'sizeFcolor': "#b47b01",
        'sizeFcolorLight': "#f68929",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
