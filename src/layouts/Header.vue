<template>
  <header id="header">
    <div class="row main">
      <div class="row icons left">
        <div class="soc-icon">
          <a
            href="https://vk.com/cgm_chief"
            target="_blank"
          >
            <!-- <i class="fab fa-vk" /> -->
            <font-awesome-icon :icon="['fab', 'vk']" />
          </a>
        </div>
        <div class="soc-icon">
          <a
            href="https://twitter.com/narsacgm"
            target="_blank"
          >
            <!-- <i class="fab fa-twitter" /> -->
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
        <div class="soc-icon">
          <a
            href="https://github.com/TinyChief"
            target="_blank"
          >
            <!-- <i class="fab fa-github-alt" /> -->
            <font-awesome-icon :icon="['fab', 'github-alt']" />
          </a>
        </div>
        <div class="soc-icon">
          <a
            href="/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fa', 'home']" />
            <!-- <i class="fa fa-home" /> -->
          </a>
        </div>
      </div>
      <div class="row">
        <nav class="nav">
          <g-link
            class="nav__link"
            :to="{ name: 'home' }"
            data-name="home"
          >
            Главная
            <font-awesome-icon :icon="['fas', 'square-full']" />
          </g-link>
          <g-link
            class="nav__link"
            :to="{ name: 'blog' }"
          >
            Блог
            <font-awesome-icon :icon="['fas', 'square-full']" />
          </g-link>
          <g-link
            class="nav__link"
            :to="{ name: 'about' }"
          >
            Обо мне
            <font-awesome-icon :icon="['fas', 'square-full']" />
          </g-link>
        </nav>
        <div
          class="header-icon_btn"
          @click="handleChangeMode"
        >
          <font-awesome-icon :icon="['fa', isLightTheme ? 'moon' : 'sun']" />
        </div>
        <div
          class="header-icon_btn mob_nav-toggle"
          @click="handleThemer"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
          />
        </div>
        <div class="mob_nav hidden">
          <ul class="nav-mobile">
            <li>
              <g-link
                class="nav__link-mobile"
                :to="{ name: 'home' }"
              >
                Главная
              </g-link>
            </li>
            <li>
              <g-link
                class="nav__link-mobile"
                :to="{ name: 'blog' }"
              >
                Блог
              </g-link>
            </li>
            <li>
              <g-link
                class="nav__link-mobile"
                :to="{ name: 'about' }"
              >
                Работы
              </g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isLightTheme: true
    }
  },
  metaInfo: {},
  mounted () {
    const cachedTheme = localStorage.getItem('theme')
    console.log(cachedTheme)
    if (cachedTheme) {
      this.isLightTheme = cachedTheme === 'light'
      const htmlTag = document.getElementsByTagName('HTML')[0]
      const themeColors = {
        dark: {
          bg: '#2D2B30',
          font: 'rgba(255 ,255, 255, 0.9)',
          hl: '#fff482',
          code: '#525252'
        },
        light: {
          bg: 'rgb(246, 247, 248)',
          font: '#202020',
          hl: '#4e3dad',
          code: '#dcdcdc'
        }
      };
      ['font', 'bg', 'hl', 'code'].forEach(el =>
        htmlTag.style.setProperty(`--${el}`, themeColors[this.isLightTheme ? 'light' : 'dark'][el])
      )
    }
  },
  methods: {
    handleChangeMode () {
      const htmlTag = document.getElementsByTagName('HTML')[0]
      const themeColors = {
        dark: {
          bg: '#2D2B30',
          font: 'rgba(255 ,255, 255, 0.9)',
          hl: '#fff482',
          code: '#525252'
        },
        light: {
          bg: 'rgb(246, 247, 248)',
          font: '#202020',
          hl: '#4e3dad',
          code: '#dcdcdc'
        }
      };
      ['font', 'bg', 'hl', 'code'].forEach(el =>
        htmlTag.style.setProperty(`--${el}`, themeColors[this.isLightTheme ? 'dark' : 'light'][el])
      )
      localStorage.setItem('theme', this.isLightTheme ? 'dark' : 'light')
      this.isLightTheme = !this.isLightTheme
    },
    handleThemer (e) {
      const mobNav = document.querySelector('.mob_nav')
      mobNav.classList.toggle('hidden')
    }
  }
}
</script>

<style lang="scss">
@import '~/styles/main.scss';
.header-icon_btn {
  padding: 5px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    width: 20px !important;
    height: 20px;
  }
  &:first-of-type {
    margin-right: 10px;
  }
  &.mob_nav-toggle {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
}
.mob_nav {
  width: 100px;
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  bottom: -5px;
  transform: translateY(100%);
  background-color: white;
  border: 2px solid var(--hl);
  border-radius: 10px;
  text-align: right;
  .dark {
    background-color: #303030;
    border: 2px solid #c1c1c1;
  }
  .light {
    background-color: rgb(255, 255, 242);
    border: 2px solid black;
  }
}
.hidden {
  display: none;
}
.switcher {
  margin: 10px;
  width: 25px;
  height: 25px;
  background-color: coral;
  border-radius: 50%;
  cursor: pointer;
}

#header {
  font-family: var(--sans);
  padding: 5px 25px;
  @media screen and (max-width: 768px) {
    padding: 5px 16px;
  }
  margin-bottom: 10px;
  .row {
    display: flex;
    min-height: 34px;
    align-items: center
  }
  .soc-icon {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    overflow: hidden;
    font-size: 20px;
    color: var(--hl);
  }

  .main {
    justify-content: space-between;
    position: relative;
    align-items: center;
  }
}

.nav-mobile {
  @media only screen and (min-width: 768px) {
    display: none;
  }
  margin-bottom: 5px;
  li {
    padding: 6px 10px;
    color: black;
  }
  a {
    display: block;
  }
  width: 100%;
}

nav {
  @media only screen and (max-width: 768px) {
    display: none;
  }

  a {
    width: 110px;
    padding: 9px;
    display: inline-block;
    border: 2px solid transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    // border-bottom: 2px solid var(--bg2);
    position: relative;
    transition: all 0.2s ease-in-out;

    &:after {
      content: '';
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
      animation-duration: 1.2s;
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
      color: var(--hl);
      transform: scale(0.8, 1.3);
      opacity: 0;
    }
  }

  .active--exact {
    // border: 2px solid var(--bg2);
    // &:after {
    //   background: var(--bg);
    //   opacity: 1;
    //   height: 2px;
    // }

    &:before {
      opacity: 1;
    }
  }
}
</style>
