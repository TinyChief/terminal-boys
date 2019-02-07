require('dotenv').config()

module.exports = {
  siteName: process.env.SITE_NAME || 'Вадим Юлдашбаев | Блог | Личная страница',
  siteDescription: process.env.SITE_DESC || 'Personal site of Vadim Yuldashbaev.',

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
  ]
}
