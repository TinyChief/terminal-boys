<template>
  <Layout>
    <div class="introduction">
      <div class="text">
        <div class="me">
          <h1>
            Вадим Юлдашбаев
          </h1>
          <p>
            Frontend разработчик, 21 год
          </p>
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
              href="#terminal"
              @click="showTerminal"
            >
              пасхалки
            </a>.
          </p>
        </div>
      </div>
      <div class="photo" />
    </div>
    <div class="terminal-wrapper">
      <Terminal />
    </div>
  </Layout>
</template>

<script>
import Terminal from '~/components/Terminal.vue'

export default {
  components: { Terminal },
  metaInfo: {
  },
  mounted () {
    const terminalWrapper = document.querySelector('.terminal-wrapper')
    terminalWrapper.classList.add('hidden')
  },
  methods: {
    showTerminal: function () {
      const terminalWrapper = document.querySelector('.terminal-wrapper')

      terminalWrapper.classList.remove('hidden')
      const terminalTop = terminalWrapper.offsetTop

      console.log(terminalTop + window.scrollY)

      window.scrollTo({
        top: terminalTop + window.scrollY - 20,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  max-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-bottom: 4px;
  }
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
