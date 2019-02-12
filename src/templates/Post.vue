<template>
  <Layout>
    <div class="progress-bar">
      <div class="progress" />
    </div>
    <!-- class="post-header" -->
    <div id="main">
      <h1>{{ $page.post.title }}</h1>
      <div class="post-info">
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
      <hr>
      <!-- eslint-disable -->
      <div class="post-body" v-html="$page.post.bodyHtml"/>
    </div>
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
import hljs from 'highlight.js'

export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      link: [
        {
          rel: 'stylesheet',
          href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/default.min.css'
        }
      ]
    }
  },
  data () {
    return {
      postH: null,
      progress: 1
    }
  },
  mounted () {
    // HighlightJS Initialization
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })

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
@import "../styles/highlightjs.scss";

#main {
  h1 {
    margin-bottom: 8px;
  }
  p, li {
    line-height: 34px;
    font-size: 17px;
  }

}

@media only screen and (max-width: 480px) {
  #main {
    p, li, em, strong {
      font-size: 16px;
      line-height: 28px;
    }
    h2, h3 {
      font-size: 26px;
    }
  }
}

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
  background-color: var(--font);
  opacity: 0.5;
}

.post-info {
  font-family: var(--sans);
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  p {
    margin-bottom: 5px;
  }
}

.post-body {
  h2,
  h3 {
    line-height: 46px;
    margin-bottom: 0;
  }
  > * {
    margin-bottom: 10px;
    margin-top: 0;
  }
}

.image-container {
  margin: 10px 0 !important;
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 500px;
    @media only screen and (max-width: 480px) {
      max-height: 350px
    }
  }
}

.post-body {
  em {
    font-size: 17.5px;
  }
  p:nth-of-type(1) {
    // font-weight: 100;
    font-style: italic;
  }
  a {
    text-decoration: underline;
  }
  > ul,
  ol {
    padding-left: 20px;
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
  @media only screen and (max-width: 480px) {
    > * {
      margin-bottom: 15px;
    }
    > ul, ol {
      padding-left: 20px;
    }
  }

  ol {
    li {
      list-style: decimal;
    }
  }
  pre {
    border-radius: 10px;
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
