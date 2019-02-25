<template>
  <Layout>
    <div class="introduction">
      <div class="text">
        <div class="me">
          <h1>Вадим Юлдашбаев</h1>
          <p>Frontend разработчик, 21 год</p>
        </div>
        <div class="site">
          <p>
            Это мой личный сайт, на котором вы можете найти больше
            <a href="/about">
              информации
            </a>
            обо мне, почитать
            <a href="/blog">
              статьи
            </a>
            на разные темы, а также поискать
            <a
              href="#"
              @click="showTerminal"
            >
              пасхалки
            </a>.
          </p>
        </div>
      </div>
      <div class="photo" />
    </div>
    <div class="post-headers">
      <h2>Последние статьи:</h2>
      <div>
        <li
          v-for="item in $page.allPost.edges"
          :key="item.node.id"
          :href="item.node.path"
          class="post-item"
        >
          <a
            :href="item.node.path"
            class="post-icon"
          >
            <Pie
              :id="item.node.id"
              :data-id="item.node.id"
              :tags="item.node.tags"
            />
          </a>
          <div class="post-text">
            <g-link :to="item.node.path">
              <h3>{{ item.node.title }}</h3>
            </g-link>
            <p>{{ item.node.head }}</p>
          </div>
        </li>
      </div>
    </div>
    <div class="terminal-wrapper hidden">
      <Terminal />
    </div>
  </Layout>
</template>

<page-query>
query allPost {
  allPost(perPage: 3, order: DESC) {
    edges {
      node {
        title
        id
        created
        path
        tags
        head
      }
    }
  }
}
</page-query>

<script>
import Terminal from '~/components/Terminal.vue'
import Pie from '~/components/Pie.vue'

export default {
  components: { Pie, Terminal },
  metaInfo: {
    title: 'Главная'
  },
  methods: {
    showTerminal: function () {
      const terminalWrapper = document.querySelector('.terminal-wrapper')

      terminalWrapper.classList.remove('hidden')
      const terminalTop = terminalWrapper.offsetTop

      console.log(terminalTop + window.scrollY)

      window.scrollTo({
        top: terminalTop + window.scrollY - 40,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-headers {
  margin-bottom: 25px;
  h2 {
    margin-bottom: 15px;
  }
}
.text {
  max-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    border-bottom: 1px var(--hl);
    border-bottom-style: dotted;
    color: var(--hl);
    display: inline-block;
    font-weight: 700;
  }
}

.terminal-wrapper {
  min-height: 100vh;
}

.me {
  margin-bottom: 30px;
}
</style>
