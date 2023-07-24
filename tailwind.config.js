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
        desktop: "1400px",
        laptop: "932px",
        mobile: "564px",
      },
      colors: {
        sizeAcolor: "#FF8383",
        sizeAcolorLight: "#FF2929",
        sizeBcolor: "#7CFF85",
        sizeBcolorLight: "#00DD21",
        sizeCcolor: "#FFBE45",
        sizeCcolorLight: "#FF6B07",
        sizeDcolor: "#83C5FF",
        sizeDcolorLight: "#0E3BFF",
        sizeEcolor: "#FFA160",
        sizeEcolorLight: "#FF3E07",
        sizeFcolor: "#D583FF",
        sizeFcolorLight: "#9600EA",
        sizeGcolor: "#9FFFF3",
        sizeGcolorLight: "#00F5FF",
        sizeHcolor: "#FFFE8A",
        sizeHcolorLight: "#E2EA00",
        sizeIcolor: "#977AFF",
        sizeIcolorLight: "#4A0BFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/public/PortadaHome.webp)",
      },
    },
  },
  plugins: [],
};
