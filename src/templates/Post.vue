<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <p>{{$page.post.body}}</p>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
	post (path: $path) {
    title
    body
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