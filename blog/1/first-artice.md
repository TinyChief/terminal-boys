---
title: Первая статья
tags: ["react", "javascript", "vue"]
created: 10/10/1997
head: Тестовая статья на проверку source-file plugin
author: Вадим Юлдашбаев
---

Почему реакт такой популярный?

![Тайга](./pic.jpg)

## Hello world

Первая часть статьи, в которой пойдет речь об использовании реакта для создания пользовательских интерфейсов

* Весна
* Лето
* Осень
* Зима

Так выглядит вставка кода `Gridsome`

## Вторая часть статьи

```
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