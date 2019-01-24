<template>
  <Layout>
    <div>
      <a
        v-for="item in $page.allPost.edges"
        :key="item.node.id"
        :href="item.node.path"
        class="post-item"
      >
        <div class="post-icon">
          {{ item.node.icon }}
        </div>
        <div class="post-text">
          <h3>{{ item.node.title }}</h3>
          <p>{{ item.node.head }}</p>
        </div>
      </a>
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

.post-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--hl);
  margin-right: 15px;
}
.post-item {
  display: flex;
  margin-bottom: 20px;
  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
  }
  p {
    color: rgba($fontColor, 0.5);
    font-size: 15px;
    margin: 0;
  }
}

.post-text {
  width: calc(100% - 100px);
}
</style>
