const StoryblokClient = require('storyblok-js-client')
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')

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
          bodyHTML: markdownToHtml(item.content.body),
          head: item.content.head || 'Прочитать...',
          ...item.content
        }
      })
    }
  })
}

function markdownToHtml (md) {
  let processedMarkdown = null
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .process(md, (err, data) => {
      processedMarkdown = data || err
    })
  return processedMarkdown.contents
}
