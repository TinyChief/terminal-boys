require('dotenv').config()

module.exports = {
  siteName: process.env.SITE_NAME || 'Вадим Юлдашбаев | Блог | Личная страница',
  titleTemplate: '%s — Вадим Юлдашбаев | Блог | Личная страница',
  siteDescription: process.env.SITE_DESC || 'Personal site of Vadim Yuldashbaev.',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
  // plugins: [
  //   {
  //     use: '~/md-it',
  //     options: {
  //       route: '/blog/:slug',
  //       typeName: 'Post',
  //       queryParams: {
  //         version: 'published',
  //         starts_with: 'blog/',
  //         token: process.env.TOKEN,
  //         is_startpage: false
  //       }
  //     }
  //   }
  // ]
}
