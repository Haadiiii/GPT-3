/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          navy: "#040C18",
          footer : "#031B34",
          blog: "#042c54",
          text: "#81AFDD",
          subtext: "#FF8A71",
      },
      fonts: {
        body: ['"Manrope"', 'sans-serif'],
      },
    }
  },
  plugins: [],

  screens: {
    'xxs': '320px',
    'xs': '375px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
