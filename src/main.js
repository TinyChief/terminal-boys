import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.meta.push({
    name: 'keywords',
    content: 'Blog,HTML,CSS,JavaScript,Developer,Web'
  })
  Vue.component('Layout', DefaultLayout)
}
