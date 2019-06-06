<template>
  <div class="layout">
    <my-header />
    <div class="wrapper">
      <slot />
    </div>
    <footer id="footer" />
  </div>
</template>

<script>
import Header from '@/layouts/Header'

export default {
  components: {
    myHeader: Header
  },
  metaInfo: {}
}
</script>

<style lang="scss">
@import '~/styles/main.scss';
a {
  text-decoration: none;
  color: inherit;
}

.layout {
  max-width: 860px;
  box-shadow: 0px -2px 10px -2px rgba(84, 84, 84, 0.75);
  min-height: 100vh;
  margin: 0 auto;
  // padding: 0 25px;
  background-color: var(--bg);
  transition: box-shadow 2s ease-in;
}

@keyframes rgb-shadow {
  0% {
    box-shadow: 0px -1px 27px 5px rgba(255, 126, 126, 0.35);
  }
  14% {
    box-shadow: 0px -1px 27px 5px rgba(247, 255, 126, 0.35);
  }
  29% {
    box-shadow: 0px -1px 27px 5px rgba(108, 255, 104, 0.35);
  }
  42% {
    box-shadow: 0px -1px 27px 5px rgba(107, 255, 248, 0.35);
  }
  57% {
    box-shadow: 0px -1px 27px 5px rgba(98, 114, 255, 0.35);
  }
  71% {
    box-shadow: 0px -1px 27px 5px rgba(225, 86, 255, 0.35);
  }
  85% {
    box-shadow: 0px -1px 27px 5px rgba(255, 93, 247, 0.35);
  }
  100% {
    box-shadow: 0px -1px 27px 5px rgba(255, 126, 126, 0.35);
  }
}

#footer {
  padding: 30px 0;
}

</style>
