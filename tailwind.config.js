/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js}'],
   theme: {
      extend: {
         container: {
            center: true,
            padding: '15px',
         },
      },
   },
   plugins: [],
};
