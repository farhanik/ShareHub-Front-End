/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./public/index.html" // Include HTML files if needed
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#4CAF50", // Custom primary color
        "brand-secondary": "#3A86FF", // Custom secondary color
        "brand-background": "#F4F4F9", // Background color
        "brand-text": "#1D3557", // Text color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
        heading: ["Roboto", "sans-serif"], // Heading font
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow for cards
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // For better form styling
    require("@tailwindcss/typography"), // For rich text styling
  ],
};
