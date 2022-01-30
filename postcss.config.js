const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postCssImport = require('postcss-import')
module.exports = {
  plugins: [
    postCssImport,
    require('tailwindcss/nesting'),
    require('postcss-nesting'),
    tailwindcss,
    require('postcss-preset-env')({
      features: { 'nesting-rules': false },
    }),
    autoprefixer,
  ],
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
}
