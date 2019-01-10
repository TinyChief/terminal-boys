<template>
  <div id="wrapper" class="wrapper">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <div class="prompt">
          <i class="fas fa-terminal"></i>
          <div class="divider"></div>
          <div>{{prompt}}</div>
        </div>
        <span class="user-input">{{item.input}}</span>
        <p :class="['output', item.status ]">{{item.output}}</p>
      </li>
    </ul>
    <div id="terminal" class="prompt">
      <i class="fas fa-terminal"></i>
      <div class="divider"></div>
      <div>{{prompt}}</div>
    </div>
    <input id="command" type="text" @change="handleInput" tabindex="1">
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      prompt: "tinychief.ru", // on every new line
      snapshot: "", // terminal content after last exection of command
      command: "", // command to execute
      terminalAnswer: "",
      list: []
    };
  },
  methods: {
    handleInput: function(e) {
      const userInput = e.target.value;
      const ans = executeCommand(userInput);
      
      //Make input dissapper for 150ms
      terminal.style.opacity = 0;
      setTimeout(() => {
        terminal.style.opacity = 1;
      }, 150);
      
      if (ans == "clear") {
        this.list = [];
        e.target.value = "";
        return;
      } else if (ans == "No such command") {
        this.list.push({
          input: userInput,
          output: `⚠️ ${ans}`,
          status: "not-found"
        });
      } else {
        this.list.push({
          input: userInput,
          output: ans,
          status: "found"
        });
      }
      e.target.value = "";
    }
  }
};
// available commands
const commands = [
  {
    name: "birth",
    answer: "10/10/1997"
  },
  {
    name: "study",
    answer: "Moscow Power Engineering Institute"
  },
  {
    name: "wtf",
    answer: "cuz"
  },
  {
    name: "clear",
    answer: "clear"
  }
];

function executeCommand(c) {
  const idx = commands.findIndex(el => el.name == c);
  return idx != -1 ? commands[idx].answer : "No such command";
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.wrapper {
  display: block;
  width: 100%;
  height: 400px;
  background-color: transparent;
  border: 2px solid $fontColor;
  border-radius: 10px;
  color: $fontColor;
  font-size: 16px;
  padding: 8px 12px 60px 12px;
  overflow: scroll;
}

.prompt {
  display: inline-flex;
  align-items: center;
  color: navy;
  background-color: $bg;
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
    background-color: $bg;
  }
  div {
    background-color: whitesmoke;
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
  border-left: 10px solid $bg;
  border-bottom: 10px solid transparent;
}

input[type="text"] {
  // background-color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: $fontColor;
  border: none;
  font-size: 14px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin: 0;
}

.output {
  margin: 4px 0 4px 0;
}
</style>

