import DefaultLayout from '~/layouts/Default.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSquareFull, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faVk, faTwitter, faGithubAlt, faSquareFull, faEllipsisV)

export default function (Vue, { head }) {
  head.meta.push({
    name: 'keywords',
    content: 'Blog,HTML,CSS,JavaScript,Developer,Web'
  })

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
