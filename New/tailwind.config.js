/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      textColor: {
        black: "#141414",
        "green-200": "#7A9CA5",
        "black-400": "#555555",
      },
      colors: {
        blue: "#5C8692",
        "blue-400": "#7A9CA5",
        "blue-800": "#1E2C30",
      },
      fontFamily: {
        display: ["Playfair Display"],
        body: ["Manrope"],
      },
      rotate: ["group-hover"],
      fontSize: {
        xs: [
          "18px",
          {
            lineHeight: "155%",
            letterSpacing: "2%",
            fontWeight: "400",
          },
        ],
        sm: [
          "15px",
          {
            lineHeight: "154.5%",
            letterSpacing: "10%",
            fontWeight: "600",
          },
        ],
        base: [
          "22px",
          {
            lineHeight: "130%",
            letterSpacing: "-1.5%",
            fontWeight: "700",
          },
        ],
        lg: [
          "26px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.39px",
            fontWeight: "700",
          },
        ],
        xl: [
          "40px",
          {
            lineHeight: "130%",
            letterSpacing: "0.6px",
            fontWeight: "700",
          },
        ],
        "2xl": [
          "45px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.675px",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "55px",
          {
            lineHeight: "130%",
            letterSpacing: "-0.825px",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "70px",
          {
            lineHeight: "130%",
            letterSpacing: "-1.05px",
            fontWeight: "700",
          },
        ],
        "title-sm": [
          "15px",
          {
            textColor: "#5C8692",
            lineHeight: "154.5%",
            letterSpacing: "10%",
          },
        ],
      },
      backgroundImage: {
        "offer-img-left": "url('/src/assets/header/Background_offer_blue.png')",
        "offer-img-right":
          "url('/src/assets/header/Background_offer_right.jpg')",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
    },
  },
  plugins: [],
};
