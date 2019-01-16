module.exports = {
  siteName: process.env.SITE_NAME || 'Dev personal',
  siteDescription: process.env.SITE_DESC || 'Personal site of web developer.',

  plugins: [
    {
      use: '~/md-it',
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
