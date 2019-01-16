const StoryblokClient = require('storyblok-js-client')
const md = require('markdown-it')()
const blockImagePlugin = require('markdown-it-block-image')
// const fs = require('fs')

md.use(blockImagePlugin, {
  outputContainer: 'div',
  containerClassName: 'image-container'
})

function markdownToHtml (mdText) {
  // const mdText = fs.readFileSync('mdtest/1.md', 'utf-8')
  console.log(mdText)
  return md.render(mdText)
}

// console.log(markdownToHtml())

module.exports = function (api, options) {
  var Storyblok = new StoryblokClient({
    accessToken: options.token
  })

  api.loadSource(async store => {
    let data
    await Storyblok.get('cdn/stories/', {
      version: options.version,
      starts_with: options.folder
    })
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
          // bodyHTML: markdownToHtml(),
          bodyHTML: markdownToHtml(item.content.body),
          head: item.content.head || 'Прочитать...',
          ...item.content
        }
      })
    }
  })
}
