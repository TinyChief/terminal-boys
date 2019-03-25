const StoryblokClient = require('storyblok-js-client')
const md = require('markdown-it')()
const blockImagePlugin = require('markdown-it-block-image')

md.use(blockImagePlugin, {
  outputContainer: 'div',
  containerClassName: 'image-container'
})

function markdownToHtml (mdText) {
  console.log(mdText)
  return md.render(mdText)
}

module.exports = function (api, options) {
  var Storyblok = new StoryblokClient({
    accessToken: options.token
  })

  api.loadSource(async store => {
    let data
    await Storyblok.get('cdn/stories/', options.queryParams)
      .then(response => {
        data = response.data
      })
      .catch(err => {
        console.log(err)
      })

    const contentType = store.addContentType({
      typeName: options.typeName,
      route: options.route
    })

    for (const item of data.stories) {
      contentType.addNode({
        id: item.id,
        slug: item.slug,
        fields: {
          published: item.published_at,
          created: item.created_at,
          bodyHTML: markdownToHtml(item.content.body),
          head: item.content.head || 'Прочитать...',
          ...item.content
        }
      })
    }
  })
}
