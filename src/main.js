import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.htmlAttrs = {
    lang: 'en',
    charset: 'utf-8'
  }
  head.title = 'Главная страница сайта Юлдашбаева Вадима'
  head.meta.push({
    name: 'keywords',
    content: 'Blog,HTMLCSS,JavaScript,Developer,Web'
  })
  head.meta.push({
    name: 'description',
    content: 'Персональный сайт Вадима Юлдашбаева'
  })
  Vue.component('Layout', DefaultLayout)
}
