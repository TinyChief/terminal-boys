<template>
  <Layout>
    <!-- <Pie /> -->
    <div>
      <li
        v-for="item in $page.allPost.edges"
        :key="item.node.id"
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
            <h3 />
          </g-link>
          <p>{{ item.node.head }}</p>
        </div>
      </li>
    </div>
  </Layout>
</template>

<page-query>
query allPost {
  allPost (order: DESC) {
    edges {
      node {
        title
        id
        created
        path
        head
        tags
      }
    }
  }
}
</page-query>

<script>
import Pie from '~/components/Pie.vue'
export default {
  components: { Pie },
  metaInfo: {
    title: 'Cтатьи'
  }
}
</script>

<style lang="scss">
@import '../styles/vars.scss';
</style>
