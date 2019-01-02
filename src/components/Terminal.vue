<template>
  <div class="wrapper">
    <textarea type="textarea" spellcheck="false" :value="snapshot" v-on:input="handleType" v-on:keypress="handleEnter">
    </textarea>
  </div>
</template>

<script>

export default {
  name: 'Card',
  data () {
    return {
      text: '',
      prompt: 'NAME_OF_SITE >>', // on every new line
      snapshot: '', // terminal content after last exection of command
      command: '', // command to execute
      terminalAnswer: ''
    }
  },
  methods: {
    handleType (e) {
      if (e.target.value.length < this.snapshot.length) {
        e.target.value = this.snapshot
      }
    },
    handleEnter (e) {
      if (e.code == 'Enter') {
        e.preventDefault()
        this.command = e.target.value.substr(this.snapshot.length)
        this.terminalAnswer = executeCommand(this.command)
        if (this.terminalAnswer == 'clear') {
          this.snapshot = this.prompt
          e.target.value = this.prompt
        } else {
          e.target.value += `\n${this.terminalAnswer}\n${this.prompt}`
          this.snapshot = e.target.value
        }
        console.log(this.terminalAnswer, this.command)

      }
      // console.log(e)
    }
  },
  beforeMount () {
    this.snapshot = this.prompt
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
  const idx = commands.findIndex(el => el.name == c)
  return (idx != -1) ? commands[idx].answer : 'No such command.'
}


</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.wrapper {
  display: block
}
textarea {
  width: 100%;
  min-height: 400px;
  background-color: transparent;
  border: 2px solid $fontColor;
  border-radius: 10px;
  color: $fontColor;
  font-size: 14px;
  vertical-align: top;
  line-height: 1.5;
  padding: 8px 12px 8px 12px;
}

</style>

