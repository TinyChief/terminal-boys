<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <div id="post-body" v-html="$page.post.bodyHtml"></div>
    <!-- <p>{{$page.post.body}}</p> -->
  </Layout>
</template>

<page-query>
query getPost($path: String!) {
	post (path: $path) {
    title
    bodyHtml
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  mounted () {
    document.querySelector('[href="/blog"]').classList.add('active--exact')
  }
};
</script>

<style lang="scss">
#post-body, #post-body * {
  h1 {
    color: red
  }
  p {
    width: 100%;
  }
  p img {
    max-width: 100%;
  }
}
</style>
