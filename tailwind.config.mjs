/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        TealishGreen: "#11EB68",
        LightRed:"#FF4949",
        water:"#E8F4FD",
        aquaSpring:"#EBF9F4",
        silver:"#C7C8CE",
        greenBlue:'#00B386',
        slateGray:'#7C7E8C',
        artyclicOceanBlue:"#0052FE",
        porcelian:'#EFF2F5',
        riverBed:'#3E5765',
        brightgray:'#3E424A',
      },
    },
  },
  plugins: [],
};

export default config;
