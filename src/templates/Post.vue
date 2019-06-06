<template>
  <Layout>
    <div class="progress-bar">
      <div class="progress" />
    </div>
    <!-- class="post-header" -->
    <div id="main">
      <h1>{{ post.title }}</h1>
      <div class="post-info">
        <p>
          {{ post.author }},
          <span class="publish-date">
            {{
              new Date(post.created).toLocaleDateString('ru-RU',
                                                              {month: 'short', day: 'numeric', year: 'numeric'})
            }}
          </span>
        </p>
        <div class="tags">
          <a
            v-for="tag in post.tags"
            :key="tag"
            href="/blog"
          >
            {{ tag }}
          </a>
        </div>
      </div>
      <hr>
      <!-- eslint-disable -->
      <div class="post-body" v-html="post.content"/>
    </div>
  </Layout>
</template>

<page-query>
query getPost($path: String!) {
  post (path: $path) {
    created
    title
    content
    tags
    author
  }
}
</page-query>

<script>
import hljs from 'highlight.js'
// import hljs from 'highlight.js/lib/highlight'
// import javascript from 'highlight.js/lib/languages/javascript'
// import css from 'highlight.js/lib/languages/css'
// // import html from 'highlight.js/lib/languages/html'

// hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('css', css)
// hljs.registerLanguage('html', html)

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
  computed: {
    post () {
      return this.$page.post
    }
  },
  mounted () {
    // console.log('regex', this.$page.post.content.search(/!@\s(.*)\s@!/g))
    let i = 0;
    function replacer (match, p, offset, string) {
      ++i
      return `<span class="custom-tooltip">${i}<span>${p}</span></span>`
    }
    this.$page.post.content = this.$page.post.content.replace(/!@\s(.*)\s@!/g, replacer)
    // HighlightJS Initialization
    document.querySelectorAll('pre code').forEach(block => {
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
@import '../styles/vars.scss';
@import '../styles/highlightjs.scss';
.custom-tooltip {
    position: relative;
    display: inline-flex;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #cbd4ff;
    border: 1px solid black;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover span, &:focus span {
      display: block
    }
    span {
      display: none;
      top: -130%;
      left: 50%;
      transform: translate(-50%, -85%);form-origin: 0 0;
      width: 150px;
      padding: 6px;
      font-size: 14px;
      line-height: 1.2;
      border-radius: 5px;
      border: 1px solid black;
      background-color: #cbd4ff;
      position: absolute;
    }
}
code {
  font-family: 'Roboto Mono';
  padding: 2px;
  border-radius: 7px;
  background-color: var(--code);
  color: var(--font);
}

code.hljs {
  border-radius: 0.1em;
  font-size: 1em;
  padding: 1em !important;
  line-height: 1.5;
  white-space: pre;
}

#main {
  p,
  li {
    line-height: 30px;
    font-size: 16px;
  }
}

@media only screen and (max-width: 480px) {
  #main {
    p,
    li,
    em,
    strong {
      font-size: 16px;
      line-height: 28px;
    }
    h2,
    h3 {
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
   // margin-bottom: 5px;
  }
}

.post-body {
  h2,
  h3 {
    margin: 30px 0 10px 0;
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
      max-height: 350px;
    }
  }
}

.post-body {
  p > img {
    max-width: 100%;
    width: initial;
    max-height: 450px;
  }
  p:nth-of-type(1) {
    font-style: italic;
  }
  a {
    text-decoration: underline;
    text-decoration-style: solid;
    color: var(--hl);
    font-weight: 600;
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
    > ul,
    ol {
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
    content: '';
    position: absolute;
    transform: translateX(-100%);
    width: 0;
    height: 0;
    border-top: 22px solid;
    border-top-color: $color;
    border-left: 16px solid transparent;
  }
  &::after {
    content: '';
    position: absolute;
    // transform: translateX(-100%);
    width: 0;
    height: 0;
    top: 0;
    right: -16px;
    border-bottom: 22px solid;
    border-bottom-color: $color;
    border-right: 16px solid transparent;
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
    &:nth-child(3n + 3) {
      @include tag(salmon);
    }
    &:nth-child(3n + 2) {
      @include tag(#9787eb);
    }
    &:nth-child(3n + 1) {
      @include tag(#60d76f);
    }
  }
}
</style>
