// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         custom: "767px", // Add your custom breakpoint
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         customGray: "#d9d9d9",
//       },
//       keyframes: {
//         scroll: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//         fadeInUp: {
//           "0%": { opacity: 0, transform: "translateY(20px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//       fontFamily: {
//         custom: ["", "sans-serif"], // Add your custom font
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       },
//       animation: {
//         bulge: "bulge 1s ease-in-out forwards",
//         animate: "slideUp 1s ease-out forwards",
//         scroll: "scroll 12s linear infinite",
//         fadeInUp: "fadeInUp 1s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwind-scrollbar-hide")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: "767px", // Add your custom breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "#d9d9d9",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      fontFamily: {
        custom: ["", "sans-serif"], // Add your custom font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        bulge: "bulge 1s ease-in-out forwards",
        animate: "slideUp 1s ease-out forwards",
        scroll: "scroll 12s linear infinite",
        fadeInUp: "fadeInUp 1s ease-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, and Opera
        },
      });
    },
  ],
};
