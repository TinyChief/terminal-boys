---
title: Вторая статья
tags: ['vue']
created: 10/10/1997
head: Про обновления в Vue 3.0
author: Вадим Юлдашбаев
---

Почему реакт такой популярный?

![Тайга](./pic.jpg)

## Hello world

Первая часть статьи, в которой пойдет речь об использовании реакта для создания пользовательских интерфейсов

- Весна
- Лето
- Осень
- Зима

Так выглядит вставка кода `Gridsome`

## Вторая часть статьи

### JS

```javascript
export default {
  components: { Terminal },
  metaInfo: {
    title: 'Главная'
  },
  methods: {
    showTerminal: function () {
      const terminalWrapper = document.querySelector('.terminal-wrapper')

      terminalWrapper.classList.remove('hidden')
      const terminalTop = terminalWrapper.offsetTop

      console.log(terminalTop + window.scrollY)

      window.scrollTo({
        top: terminalTop + window.scrollY - 40,
        behavior: 'smooth'
      })
    }
  }
}
```

### SCSS

```SCSS
body {
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  * {
    box-sizing: inherit;
  }
  background-color: var(--bg);
  height: 100vh;
  color: var(--font);
}
```

### HTML

```HTML
<a href="/about" data-v-11459c7f>
  информации
</a>
обо мне, почитать
<a href="/blog" data-v-11459c7f>
  статьи
</a>
на разные темы, а также поискать
<a href="#" data-v-11459c7f>
  пасхалки
</a>.
```
