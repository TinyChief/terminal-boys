<template>
  <Layout>
    <div>
      <li
        v-for="item in $page.allPost.edges"
        :key="item.node.id"
        :href="item.node.path"
        class="post-item"
      >
        <div class="post-icon">
          {{ item.node.icon }}
        </div>
        <div class="post-text">
          <g-link :to="item.node.path">
            <h3>{{ item.node.title }}</h3>
          </g-link>
          <p>{{ item.node.head }}</p>
        </div>
      </li>
    </div>
  </Layout>
</template>

<page-query>
query allPost {
  allPost {
    edges {
      node {
        title
        id
        created
        path
        head
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'BlogPage'
  }
}
</script>

<style lang="scss">
@import "../styles/vars.scss";
</style>
