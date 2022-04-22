module.exports = {
  content: [
    "./src/**/*.{js}",
    "./public/**/*.{html}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'md': 'rgba(99, 99, 99, 0.15) 0px 2px 8px 0px;',
      },
      colors:{
        current: '#6B8E4E',
        'sec': '#F4F5F9', //secondary color
      },
      fontSize:{
        '5xl':'52px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}