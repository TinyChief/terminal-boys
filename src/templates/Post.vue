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
    <div class="post-body">
      <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
    </div>
    <div class="post-body" v-html="$page.post.bodyHtml"></div>
    <!-- <p>{{$page.post.body}}</p> -->
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
.post-body,
.post-body * {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "PT Serif";
    margin-bottom: 12px;
  }
  p img {
    max-width: 100%;
  }
}

.post-body {
  p {
    margin-bottom: 5px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
    font-size: 17px;
    letter-spacing: 0.12px;
  }
}

.post-header {
  margin-bottom: 20px;
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
