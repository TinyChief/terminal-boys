<template>
  <div class="pieID pie" />
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => {
        return ['other']
      }
    },
    /* eslint-disable vue/require-default-prop */
    id: String
  },
  data () {
    return {
      mapper: {
        vue: '#17bd95',
        tech: 'tomato',
        javascript: '#ffe700',
        other: '#4e3dad'
      }
    }
  },
  mounted () {
    function sliceSize (dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360
    }
    function addSlice (sliceSize, pieElement, offset, sliceID, color) {
      const currentElement = document.querySelector(pieElement)
      currentElement.innerHTML += ("<div class='slice " + sliceID + "'><span></span></div>")
      offset = offset - 1
      var sizeRotation = -179 + sliceSize
      currentElement.querySelector('.' + sliceID).style.transform = 'rotate(' + offset + 'deg) translate3d(0,0,0)'

      currentElement.querySelector('.' + sliceID + ' span').style.transform = 'rotate(' + sizeRotation + 'deg) translate3d(0,0,0)'
      currentElement.querySelector('.' + sliceID + ' span').style.backgroundColor = color
    }
    function iterateSlices (sliceSize, pieElement, offset, dataCount, sliceCount, color) {
      var sliceID = 's' + dataCount + '-' + sliceCount
      var maxSize = 179
      if (sliceSize <= maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color)
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color)
        iterateSlices(sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color)
      }
    }
    const createPie = (pieElement) => {
      var listData = this.tags.map((el, i, arr) => {
        return 1
      })

      var listTotal = 0
      for (var i = 0; i < listData.length; i++) {
        listTotal += listData[i]
      }
      var offset = 0
      for (let i = 0; i < listData.length; i++) {
        const color = this.mapper[this.tags[i].toLowerCase()] || this.mapper.other
        var size = sliceSize(listData[i], listTotal)
        iterateSlices(size, pieElement, offset, i, 0, color)
        offset += size
      }
    }
    createPie(`[data-id="${this.id}"]`)
  }
}
</script>

<style>
.pieID {
  display: inline-block;
  vertical-align: top;
}
.pie {
  height: 50px;
  width: 50px;
  position: relative;
}
.slice {
  position: absolute;
  width: 50px;
  height: 50px;
  clip: rect(0px, 50px, 50px, 25px);
  animation: bake-pie 1s;
}
.slice span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  clip: rect(0px, 50px, 50px, 25px);
}
</style>
