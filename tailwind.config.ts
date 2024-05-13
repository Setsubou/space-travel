import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        spaceBlur: "32px",
      },
      backgroundImage: {
        "atf-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "atf-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "atf-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "destination-mobile": "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet": "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop": "url('/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile": "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet": "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop": "url('/assets/technology/background-technology-desktop.jpg')",
      },
      boxShadow: {
        spaceBoxShadow: "0px 0px 0px 3rem rgba(255, 255, 255, 0.25)",
      },
      colors: {
        space_primary: "#d0d6f9",
        space_dark: "#0b0d17",
        space_light: "#ffffff",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowCondensed: ["BarlowCondensed", "sans-serif"],
        firaSansCondensed: ["Fira Sans Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      letterSpacing: {
        spaceKerning: "0.16rem",
      },
    },
  },
  plugins: [],
};
export default config;
