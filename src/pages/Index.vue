<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135"/>
    <h1>Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
    <Card/>
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: { Card },
  metaInfo: {
    title: "FrontPage",
    link: [
      {
        rel: "stylesheet",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      }
    ]
  }
};
</script>
