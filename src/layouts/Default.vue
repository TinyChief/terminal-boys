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
        </div>
        <!-- <strong id="title">
          <g-link :to="{ name: 'home' }">
            Terminal
            <br>Boys
          </g-link>
        </strong> -->
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
                data-name="home"
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
  metaInfo: {
    link: [
      {
        rel: 'stylesheet',
        integrity:
          'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&amp;subset=cyrillic'
      }
    ]
  },
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
        bg: 'rgb(255, 255, 242)',
        font: 'rgb(74, 74, 74)',
        hl: '#4e3dad'
      }
    }

    switches.forEach(el => {
      el.addEventListener('click', e => {
        const selectedTheme = e.target.classList[1];
        ['font', 'bg', 'hl'].forEach(el =>
          htmlTag.style.setProperty(`--${el}`, themeColors[selectedTheme][el])
        )
        themer.classList.toggle('hidden')
      })
    })
  }
}
</script>

<style lang="scss">
@import "~/styles/main.scss";
.toggle-themer {
  font-size: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 5px;
  color: var(--font);
  cursor: pointer;
}
.themer {
  @media only screen and (max-width: 768px) {
    width: 140px;
  }
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
    padding: 10px 15px;
  }
  // padding-top: 10px;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--bg);
}

#footer {
  padding: 30px 0;
}

#header {
  font-family: var(--sans);
  margin-bottom: 20px;
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

    // &:nth-child(1) {
    //   // background-color: #ec5151;
    // }
    // &:nth-child(2) {
    //   // background-color: #f2c94c;
    // }
    // &:nth-child(3) {
    //   background-color: white;
    //   i {
    //     font-size: 28px;
    //     // transform: scaleY(0.95);
    //     color: var(--bg);
    //   }
    // }
  }

  .main {
    justify-content: space-between;
    position: relative;
    align-items: center;
    padding-right: 25px;
    &::before {
      content: "";
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
  margin-bottom: 10px;
  li {
    padding: 7px 0 7px 10px;
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
    padding: 12px 0 12px 25px;
    display: inline-block;
    border: 2px solid transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 2px solid var(--bg2);
    position: relative;
    transition: all 0.2s ease-in-out;

    &:before {
      content: "$";
      position: absolute;
      font-size: 21px;
      left: 9px;
      top: 9.5px;
      color: var(--hl);
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
