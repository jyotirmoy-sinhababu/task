import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grand: ['Grand Hotel', 'cursive'],
      },
      colors: {
        heading: '#FF2157',
        subHeading: '#A5455C',
      },
    },
  },
  plugins: [],
};
export default config;
