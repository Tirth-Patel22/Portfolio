/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B1220",
        panel: "#111B30",
        accent: "#22D3EE",
        primary: "#0EA5E9",
        muted: "#9AA4B2",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.25), 0 10px 30px rgba(14,165,233,0.18)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
