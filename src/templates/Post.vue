<template>
  <Layout>
    <div class="post-header">
      <h1>{{$page.post.title}}</h1>
      <!-- <h1>Какой-то текст на русском языке</h1> -->
      <p>
        Вадим Юлдашбаев,
        <span class="publish-date">
          {{
          new Date($page.post.created).toLocaleDateString('ru-RU', 
           {month: 'short', day: 'numeric', year: 'numeric'})
          }}
        </span>
      </p>
      <div class="tags">
        <g-link :to="{ route: '/blog/asd' }">javascript</g-link>
        <g-link :to="{ route: '/blog' }">career</g-link>
        <g-link :to="{ route: '/blog' }">yandex</g-link>
      </div>
    </div>
    <hr>
    <div class="post-body" v-html="$page.post.bodyHtml"></div>
  </Layout>
</template>

<page-query>
query getPost($path: String!) {
	post (path: $path) {
    created
    title
    bodyHtml
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  mounted() {
    document.querySelector('[href="/blog"]').classList.add("active--exact");
  }
};
</script>

<style lang="scss">
@import "../styles/vars.scss";

.post-header,
.post-body {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul, ol,
  & > img {
    margin-bottom: 20px;
  }
  p img, img {
    max-width: 100%;
  }
  & > img {
    margin-bottom: 20px;
  }
}

.post-body {
  // * {
  //   font-size: 17px;
  // }
  a {
    text-decoration: underline;
  }
  p {
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
    font-size: 17px;
    letter-spacing: 0.12px;
  }
  ul {
    padding-left: 30px;
    li {
      list-style: disc;
    }
  }

  ol {
    padding-left: 30px;
    li {
      list-style: decimal;
    }
  }
  li {
    line-height: 1.5;
  }
  pre {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid $fontColor;
  }
}

.post-header {
  margin-bottom: 20px;
  p {
    margin-bottom: 0;
  }
}

@mixin tag($color) {
  background-color: $color;
  &::before {
    content: "";
    position: absolute;
    transform: translateX(-100%);
    width: 0;
    height: 0;
    border-bottom: 22px solid;
    border-bottom-color: $color;
    border-left: 22px solid transparent;
  }
  &::after {
    border-top-color: $color;
  }
}

.tags {
  // padding-left: 20px;
  a {
    margin: 0px 11px;
    color: $bgFront;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 22px solid;
      border-right: 22px solid transparent;
    }
    &:nth-child(1) {
      margin-left: 0;
      background-color: salmon;
      padding-left: 10px;
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 22px solid salmon;
        border-right: 22px solid transparent;
      }
    }
    &:nth-child(2) {
      @include tag(skyblue);
    }
    &:nth-child(3) {
      @include tag(seagreen);
    }
  }
}
</style>
