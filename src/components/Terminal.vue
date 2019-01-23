<template>
  <div
    id="wrapper"
    class="wrapper"
  >
    <ul>
      <li
        v-for="(item, idx) in list"
        :key="idx"
      >
        <div class="prompt">
          <i class="fas fa-terminal" />
          <div class="divider" />
          <!-- <div>{{ prompt }}</div> -->
        </div>
        <span class="user-input">
          {{ item.input }}
        </span>
        <p :class="['output', item.status ]">
          {{ item.output }}
        </p>
      </li>
    </ul>
    <div class="command-line">
      <div
        id="terminal"
        class="prompt"
      >
        <i class="fas fa-terminal" />
        <div class="divider" />
        <!-- <div>{{ prompt }}</div> -->
      </div>
      <input
        id="command"
        type="text"
        tabindex="1"
        @change="handleInput"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      prompt: 'tinychief.ru', // on every new line
      commandInput: null,
      wrapper: null,
      terminal: null,
      terminalAnswer: '',
      list: []
    }
  },
  mounted () {
    // INIT wrapper, commandInput and terminal
    this.wrapper = document.querySelector('#wrapper')
    this.commandInput = document.querySelector('#command')
    this.terminal = document.querySelector('#terminal')

    this.wrapper.addEventListener('click', () => {
      this.commandInput.focus()
    })
  },
  methods: {
    handleInput: function (e) {
      const userInput = e.target.value
      const ans = executeCommand(userInput)

      // Make input dissapper for 150ms
      this.terminal.style.opacity = 0
      setTimeout(() => {
        this.terminal.style.opacity = 1
      }, 150)

      if (ans === 'clear') {
        this.list = []
        e.target.value = ''
        return
      } else if (ans === 'No such command') {
        this.list.push({
          input: userInput,
          output: `${ans}`,
          status: 'not-found'
        })
      } else {
        this.list.push({
          input: userInput,
          output: ans,
          status: 'found'
        })
      }
      e.target.value = ''
    }
  }
}
// available commands
const commands = [
  {
    name: 'birth',
    answer: '10/10/1997'
  },
  {
    name: 'study',
    answer: 'Moscow Power Engineering Institute'
  },
  {
    name: 'wtf',
    answer: 'cuz'
  },
  {
    name: 'clear',
    answer: 'clear'
  }
]

function executeCommand (c) {
  const idx = commands.findIndex(el => el.name === c)
  return idx !== -1 ? commands[idx].answer : 'No such command'
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.command-line {
  display: flex;
  align-items: center;
}

.wrapper {
  display: block;
  width: 100%;
  height: 400px;
  background-color: var(--termBg);
  border: 2px solid $fontColor;
  border-radius: 10px;
  color: var(--termFont);
  font-family: var(--sans);
  font-size: 16px;
  padding: 8px 12px 100px 12px;
  overflow: scroll;
}

.prompt {
  display: inline-flex;
  align-items: center;
  color: var(--termPromptFont);
  background-color: var(--termPromptBg);
  margin-right: 15px;
  padding-left: 5px;
  font-weight: 500;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid whitesmoke;
    border-bottom: 10px solid transparent;
  }
  i {
    background-color: var(--termPromptBg);
  }
  div {
    background-color: whitesmoke;
    color: black;
    padding-right: 5px;
    line-height: 1.3;
  }
}
.divider {
  display: inline-block;
  width: 0;
  height: 0;
  background-color: whitesmoke;
  border-top: 10px solid transparent;
  border-left: 10px solid var(--termPromptBg);
  border-bottom: 10px solid transparent;
}

input[type="text"] {
  background-color: transparent;
  font-family: var(--sans);
  color: var(--termFont);
  border: none;
  font-size: 16px;
  line-height: 1.2;
  width: 100%;
  margin: 0;
  padding-left: 4px;
  padding-bottom: 0;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin: 0;
  line-height: 1.2;

}

.output {
  margin: 4px 0 4px 0;
  color: var(--termOutput)
}
</style>
