// tailwind.config.js

module.exports = {
  content: ["./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
};
