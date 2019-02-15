require('dotenv').config()

module.exports = {
  siteName: process.env.SITE_NAME || 'Вадим Юлдашбаев | Блог | Личная страница',
  titleTemplate: '%s — Вадим Юлдашбаев | Блог | Личная страница',
  // siteDescription: process.env.SITE_DESC || 'Personal site of Vadim Yuldashbaev.',

  plugins: [
    {
      use: '~/md-it',
      options: {
        route: '/blog/:slug',
        typeName: 'Post',
        queryParams: {
          version: 'published',
          starts_with: 'blog/',
          token: process.env.TOKEN,
          is_startpage: false
        }
      }
    }
  ],
  chainWebpack: config => {
    config.module
      .rule('scss') // css, sass, scss, less, postcss, stylus
      .oneOf('normal') // normal, module
      .use('postcss-loader')
      .tap(options => {
        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[require('@fullhuman/postcss-purgecss')])
        }
        return options
      })
  }
}
