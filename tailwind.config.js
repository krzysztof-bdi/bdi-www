/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "var(--brand)", dark: "var(--brand-dark)", light: "var(--brand-light)" },
        accent: { DEFAULT: "var(--accent)", soft: "var(--accent-soft)" }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      borderRadius: { xl2: "var(--radius)" },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
}
