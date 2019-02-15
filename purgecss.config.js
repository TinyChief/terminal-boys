module.exports = {
  whitelist: ['html', 'body', 'markdown'],

  content: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ]
}

/* For CLI usage
*  run `purgecss --config ./purgecss.config.js --out ./dist/assets/css/`
*/
// module.exports = {
// content: [
//   './dist/**/*.html'
// ],
// css: [
//   './dist/assets/css/*.css'
// ]
// rejected: true,
// }
