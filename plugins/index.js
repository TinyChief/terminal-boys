const StoryblokClient = require('storyblok-js-client')

module.exports = function (api, options) {
  var Storyblok = new StoryblokClient({
    accessToken: options.token
  })

  api.loadSource(async store => {
    let data
    await Storyblok.get('cdn/stories/', {
      version: options.version,
      starts_with: options.folder
    }).then(response => {
      data = response.data
    })

    const contentType = store.addContentType({
      typeName: options.typeName,
      route: options.route
    })

    console.log(data)

    for (const item of data.stories) {
      contentType.addNode({
        id: item.id,
        slug: item.slug,
        fields: {
          published: item.published_at,
          created: item.created_at,
          ...item.content
        }
      })
    }
  })
}
