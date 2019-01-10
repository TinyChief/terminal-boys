<template>
  <Layout>
    <div>
      <div v-for="item in $page.allPost.edges" :key="item.id">
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
query allPost {
  allPost {
    edges {
      node {
        slug
        title
        id
        created
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
