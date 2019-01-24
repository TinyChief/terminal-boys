<template>
  <Layout>
    <div class="progress-bar">
      <div class="progress" />
    </div>
    <div class="post-header">
      <h1>{{ $page.post.title }}</h1>
      <div>
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
          <a href="/blog">
            javascript
          </a>
          <a href="/blog">
            career
          </a>
          <a href="/blog">
            article
          </a>
        </div>
      </div>
    </div>
    <hr>
    <!-- eslint-disable -->
    <div class="post-body" v-html="$page.post.bodyHtml"/>
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
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  data () {
    return {
      postH: null,
      progress: 1
    }
  },
  mounted () {
    document.querySelector('[href="/blog"]').classList.add('active--exact')
    /*
     * ProgressbBar handler
     */
    const postBody = document.querySelector('.post-body')
    const footer = document.querySelector('#footer')
    const progressBar = document.getElementsByClassName('progress')[0]
    const img = document.querySelectorAll('img')
    let loadedImgCounter = 0
    let progressBarWidth = 0
    // If page is not include images
    if (img.length === 0) setProgressBarWidth()

    img.forEach(el => {
      el.addEventListener('load', loaded)
    })

    function setProgressBarWidth () {
      // compute progressbar width
      progressBarWidth =
        (window.scrollY /
          (postBody.clientHeight -
            window.innerHeight +
            postBody.offsetTop +
            footer.clientHeight)) *
        window.innerWidth
      // set .progress css width property
      progressBar.style.width = `${progressBarWidth}px`
    }

    // Detect when all images are loaded and then add progress bar
    function loaded () {
      loadedImgCounter++
      // when all images are loaded then init progressBar
      if (loadedImgCounter === img.length) {
        document.addEventListener('scroll', e => setProgressBarWidth())
      }
    }
  }
}
</script>

<style lang="scss">
@import "../styles/vars.scss";

.progress-bar {
  min-width: 100%;
  min-height: 5px;
  display: block;
  width: 5px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
}
.progress {
  min-height: 100%;
  background: rgba(53, 22, 22, 0.5);
}

p code,
li code {
  padding: 0 5px;
  background-color: rgba(143, 143, 143, 0.5);
}

.post-header {
  font-family: var(--sans);
  // margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    margin-bottom: 5px;
  }
}

.post-header,
.post-body {
  h2,
  h3 {
    margin: 0 0 1rem 0;
    line-height: 30px;
    padding-top: 1rem;
  }
  p > img {
    width: 100%;
  }
  > * {
    margin-bottom: 1rem;
  }
}

.image-container {
  margin: 20px 0;
  width: 100%;
  img {
    width: 100%;
  }
}

.post-body {
  p:nth-of-type(1) {
    font-weight: 100;
    font-style: italic;
    // font-size: 17px;
  }
  a {
    text-decoration: underline;
  }
  p,
  li {
    line-height: 36px;
    font-size: 18px;
  }
  > ul,
  ol {
    padding-left: 30px;
    > li {
      list-style: disc;
      > ul,
      ol {
        margin: 6px 0;
        li {
          list-style: none;
        }
      }
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
    border: 2px solid var(--font);
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
    border-top: 22px solid;
    border-top-color: $color;
    border-left: 22px solid transparent;
  }
  &::after {
    content: "";
    position: absolute;
    // transform: translateX(-100%);
    width: 0;
    height: 0;
    top: 0;
    right: -22px;
    border-bottom: 22px solid;
    border-bottom-color: $color;
    border-right: 22px solid transparent;
  }
}

.tags {
  // padding-left: 20px;
  display: flex;
  justify-content: flex-end;
  a {
    margin: 0px 11px;
    color: #303030;
    line-height: 22px;
    position: relative;
    &:nth-child(3) {
      background-color: salmon;
      padding-right: 11px;
      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: -22px;
        border-top: 22px solid salmon;
        border-left: 22px solid transparent;
      }
    }
    &:nth-child(2) {
      @include tag(skyblue);
    }
    &:nth-child(1) {
      @include tag(seagreen);
    }
  }
}
</style>
