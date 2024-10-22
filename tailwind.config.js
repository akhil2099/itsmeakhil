module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 18s linear infinite',
        marquee2: 'marquee2 18s linear infinite',
        marqueeLeft: 'marqueeLeft 18s linear infinite',
        marqueeLeft2: 'marqueeLeft2 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // New keyframes for left-moving marquee
        marqueeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeLeft2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}
