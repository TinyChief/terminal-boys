// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: process.env.SITE_NAME || 'Dev personal',
  siteDescription: process.env.SITE_DESC || 'Personal site of web developer.',
  titleTemplate: process.env.SITE_TITLE || '%s - <siteName>',

  plugins: [
    {
      use: '~/plugins',
      options: {
        version: 'published',
        token: process.env.TOKEN, // Storyblok token
        route: '/blog/:slug',
        typeName: 'Post',
        folder: 'blog'
      }
    }
  ]
}
