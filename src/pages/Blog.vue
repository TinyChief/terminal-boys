<template>
  <Layout>
    <div>
      <div v-for="item in $page.posts.edges" :key="item.id">
        <h2>
          {{item.node.title}}
        </h2>
        <p>
          {{item.node.head}}
        </p>
        <g-link :to="item.node.path">Go</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        head
        slug
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "BlogPage",
  }
};
</script>
