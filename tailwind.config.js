/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to right, #FEDDEE, #FCF6FC, #C5EAED, #FDDDFE)",
      }),
    },
  },
  plugins: [],
};
