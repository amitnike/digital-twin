/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#F5F7FF",
          100: "#E0E7FF",
          500: "#4F46E5",
          600: "#4338CA",
          900: "#111827"
        },
        accent: {
          500: "#EC4899",
          600: "#DB2777"
        }
      },
      boxShadow: {
        elevated: "0 18px 45px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};

