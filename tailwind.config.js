/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        slim: ['Josefin sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Wine Color
        pridarker: "var(--primary-darker)",
        pridark: "var(--primary-dark)",
        prilight: "var(--primary-light)",
        prilighter: "var(--primary-lighter)",

        // Gold Color
        secdarker: "var(--secondary-darker)",
        secdark: "var(--secondary-dark)",
        seclight: "var(--secondary-light)",
        seclighter: "var(--secondary-lighter)",

        muted: "var(--muted)",
        accent: "var(--accent)",

        // Neutral
        white: "var(--white)",
        black: "var(--black)",
      }
    },
  },
  plugins: [],
}