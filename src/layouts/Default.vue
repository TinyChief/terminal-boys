<template>
  <div class="layout">
    <header id="header">
      <div class="row main">
        <div class="row icons">
          <div class="soc-icon">
            <a
              href="https://vk.com/cgm_chief"
              target="_blank"
            >
              <i class="fab fa-vk" />
            </a>
          </div>
          <div class="soc-icon">
            <a
              href="https://twitter.com/narsacgm"
              target="_blank"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
          <div class="soc-icon">
            <a
              href="https://github.com/TinyChief"
              target="_blank"
            >
              <i class="fab fa-github-alt" />
            </a>
          </div>
          <div class="soc-icon">
            <a
              href="/"
              target="_blank"
            >
              <i class="fa fa-home" />
            </a>
          </div>
        </div>
        <!-- <strong id="title">
          <g-link :to="{ name: 'home' }">
            Terminal
            <br>Boys
          </g-link>
        </strong>-->
        <nav class="nav">
          <g-link
            class="nav__link"
            :to="{ name: 'home' }"
            data-name="home"
          >
            Главная
            <i class="fas fa-square-full" />
          </g-link>
          <g-link
            class="nav__link"
            :to="{ name: 'blog' }"
          >
            Блог
            <i class="fas fa-square-full" />
          </g-link>
          <g-link
            class="nav__link"
            :to="{ name: 'about' }"
          >
            Работы
            <i class="fas fa-square-full" />
          </g-link>
        </nav>
        <div class="toggle-themer">
          <i class="fas fa-ellipsis-v" />
        </div>
        <div class="themer hidden">
          <div class="switcher dark" />
          <div class="switcher light" />
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
    </header>
    <div class="wrapper">
      <slot />
    </div>
    <footer id="footer" />
  </div>
</template>

<script>
export default {
  metaInfo: {},
  mounted () {
    // THEME SWITCHER TOGGLE
    const themer = document.querySelector('.themer')
    const toggleThemer = document.querySelector('.toggle-themer')
    toggleThemer.addEventListener('click', () => {
      themer.classList.toggle('hidden')
    })
    // THEME TOGGLE
    const switches = document.querySelectorAll('.switcher')
    const htmlTag = document.getElementsByTagName('HTML')[0]
    const themeColors = {
      dark: {
        bg: '#303030',
        font: '#C1C1C1',
        hl: '#73d0c5'
      },
      light: {
        bg: 'rgb(246, 247, 248)',
        font: 'rgb(74, 74, 74)',
        hl: '#4e3dad'
      }
    }

    switches.forEach(el => {
      el.addEventListener('click', e => {
        const selectedTheme = e.target.classList[1]
        ;['font', 'bg', 'hl'].forEach(el =>
          htmlTag.style.setProperty(`--${el}`, themeColors[selectedTheme][el])
        )
        themer.classList.toggle('hidden')
      })
    })
  }
}
</script>

<style lang="scss">
@import '~/styles/main.scss';
.toggle-themer {
  font-size: 20px;
  position: absolute;
  right: 0;
  top: 22px;
  transform: translateY(-50%);
  padding: 10px 5px;
  color: var(--font);
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    top: 12px
  }
}
.themer {
  @media only screen and (max-width: 768px) {
    width: 140px;
  }
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  bottom: 2px;
  transform: translateY(100%);
  background-color: var(--bg2);
  border-bottom-left-radius: 20px;
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

a {
  text-decoration: none;
  color: inherit;
}

.layout {
  @media only screen and (max-width: 768px) {
    padding: 10px 18px;
  }
  max-width: 750px;
  box-shadow: 0px -1px 27px 5px rgba(84, 84, 84, 0.75);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 25px;
  background-color: var(--bg);
  transition: box-shadow 2s ease-in;
  // animation: rgb-shadow 3s infinite linear;
}

@keyframes rgb-shadow {
  0% {
    box-shadow: 0px -1px 27px 5px rgba(255, 126, 126, 0.35);
  }
  14% {
    box-shadow: 0px -1px 27px 5px rgba(247, 255, 126, 0.35);
  }
  29% {
    box-shadow: 0px -1px 27px 5px rgba(108, 255, 104, 0.35);
  }
  42% {
    box-shadow: 0px -1px 27px 5px rgba(107, 255, 248, 0.35);
  }
  57% {
    box-shadow: 0px -1px 27px 5px rgba(98, 114, 255, 0.35);
  }
  71% {
    box-shadow: 0px -1px 27px 5px rgba(225, 86, 255, 0.35);
  }
  85% {
    box-shadow: 0px -1px 27px 5px rgba(255, 93, 247, 0.35);
  }
  100% {
    box-shadow: 0px -1px 27px 5px rgba(255, 126, 126, 0.35);
  }
}

#footer {
  padding: 30px 0;
}

#header {
  font-family: var(--sans);
  padding-top: 5px;
  .row {
    display: flex;
  }
  .icons {
    @media only screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  .soc-icon {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    overflow: hidden;
    i {
      font-size: 20px;
      color: var(--hl);
    }
  }

  .main {
    justify-content: space-between;
    position: relative;
    align-items: center;
    padding-right: 25px;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--bg2);
      bottom: 0;
    }
  }
}

#title {
  // width: min-content;
  text-align: right;
  font-size: 24px;
  font-family: var(--sans);
  text-transform: uppercase;
  line-height: 1;
  padding-bottom: 7px;
  width: 100px;
  display: flex;
}

.nav-mobile {
  @media only screen and (min-width: 768px) {
    display: none;
  }
  margin-bottom: 5px;
  li {
    padding: 3px 0 3px 10px;
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
    padding: 8.5px 0 8.5px 25px;
    display: inline-block;
    border: 2px solid transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 2px solid var(--bg2);
    position: relative;
    transition: all 0.2s ease-in-out;

    &:before {
      content: '$';
      position: absolute;
      font-size: 21px;
      left: 9px;
      top: 5.5px;
      color: var(--hl);
      opacity: 0;
    }

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
      color: var(--hl);
      transform: scale(0.8, 1.3);
      opacity: 0;
    }
  }

  .active--exact {
    border: 2px solid var(--bg2);
    &:after {
      background: var(--bg);
      opacity: 1;
      height: 2px;
    }

    &:before {
      opacity: 1;
    }
  }
}
</style>
