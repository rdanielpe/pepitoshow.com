/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
      Fredoka:['Fredoka','sans-serif'],
			FredokaOne:['Fredoka One','sans-serif']
    },
    extend: {
      backgroundImage: {
      },
      colors: {
        'pepito-blue':'#0385D9',
        'pepito-dark-blue':'#0038A2',
      },
    },
	},
	plugins: [],
}
