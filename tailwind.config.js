module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5e18ea",
        primarylight: "#d1bdf4",
        turqois: "#48E5C2",
        primarygreen: "#177E89",
        testgreen: "#7eb09b",
      },
      minHeight: {
        "4/5": "80%",
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('/motherboard.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
