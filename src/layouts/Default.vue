<template>
  <div class="layout">
    <header id="header">
      <!-- <div class="row icons">
        <div class="soc-icon">
          <a href="https://vk.com/cgm_chief" target="_blank">
            <i class="fab fa-vk"></i>
          </a>
        </div>
        <div class="soc-icon">
          <a href="https://twitter.com/narsacgm" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="soc-icon">
          <a href="https://github.com/TinyChief" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div> -->
      <div class="row main">
        <strong id="title">
          <g-link :to="{ name: 'home' }">Terminal
            <br>Boys
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" :to="{ name: 'home' }" data-name="home">
            Главная
            <i class="fas fa-square-full"></i>
          </g-link>
          <g-link class="nav__link" :to="{ name: 'blog' }">
            Блог
            <i class="fas fa-square-full"></i>
          </g-link>
          <g-link class="nav__link" :to="{ name: 'about' }">
            Работы
            <i class="fas fa-square-full"></i>
          </g-link>
        </nav>
      </div>
    </header>
    <div class="wrapper">
      <slot/>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "FrontPage",
    link: [
      {
        rel: "stylesheet",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=PT+Serif:700|Open+Sans&subset=cyrillic"
      }
    ]
  }
};
</script>


<style lang="scss">
@import "~/styles/main.scss";

body {
  // font-family: "Roboto", -apple-system, system-ui, BlinkMacSystemFont,
  //   "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  * {
    box-sizing: inherit;
  }
  background-color: $bg;
  height: 100vh;
  color: $fontColor;
}

a {
  text-decoration: none;
  color: inherit;
}

.layout {
  padding-top: 10px;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background: $bgFront;
}

#footer {
  padding: 30px 0;
}

#header {
  .row {
    display: flex;
    margin-bottom: 10px;
  }

  .soc-icon {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 2px solid white;
    i {
      font-size: 15px;
      color: white;
    }

    &:nth-child(1) {
      background-color: #ec5151;
    }
    &:nth-child(2) {
      background-color: #f2c94c;
    }
    &:nth-child(3) {
      background-color: white;
      i {
        font-size: 20px;
        transform: scaleY(1.025);
        color: #7ec553;
      }
    }
  }

  .main {
    justify-content: space-between;
    position: relative;
    align-items: flex-end;
    // border-bottom: 2px solid $bg;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: $bg;
      bottom: 0;
    }
  }
}

#title {
  // width: min-content;
  text-align: right;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 1;
  padding-bottom: 7px;
}

nav {
  a {
    width: 130px;
    padding: 12px 0 12px 25px;
    display: inline-block;
    border: 2px solid transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 2px solid $bg;
    position: relative;
    transition: all 0.2s ease-in-out;

    &:before {
      content: "$";
      position: absolute;
      font-size: 20px;
      left: 9px;
      top: 9.5px;
      color: #73d0c5;
      opacity: 0;
    }

    &:after {
      content: "";
      height: 0px;
      width: 100%;
      position: absolute;
      bottom: -2px;
      left: 0;
      background: $bgFront;
      // opacity: 0;
    }

    &.active--exact .fa-square-full {
      animation-name: example;
      animation-duration: 0.9s;
      animation-iteration-count: infinite;
    }

    @keyframes example {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .fa-square-full {
      color: #73d0c5;
      transform: scale(0.8, 1.3);
      opacity: 0;
    }
  }

  .active--exact {
    border: 2px solid $bg;
    &:after {
      background: $bgFront;
      opacity: 1;
      height: 2px;
    }

    &:before {
      opacity: 1;
    }
  }
}
</style>
