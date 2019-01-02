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

// const axios = require('axios')

// module.exports = function (api, options) {
//   api.loadSource(async store => {
//     const { data } = await axios({
//       method: 'get',
//       url: 'https://api.storyblok.com/v1/cdn/stories/',
//       params: {
//         token: options.token,
//         version: options.version,
//         cv: options.cv || new Date()
//       }
//     })

//     const contentType = store.addContentType({
//       typeName: 'Post',
//       route: '/blog/:slug' // optional
//     })
//     console.log(data.stories)
//     for (const item of data.stories) {
//       contentType.addNode({
//         id: item.id,
//         title: item.content.title,
//         slug: item.slug,
//         date: item.published_at,
//         fields: {
//           body: item.content.body,
//           head: item.content.body.slice(0, 20)
//         }
//       })
//     }
//   })
// }
