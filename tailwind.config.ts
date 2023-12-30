import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'teal':'#089489'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

