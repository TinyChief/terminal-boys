<template>
  <Layout>
    <div>
    <g-image alt="Example image" src="~/favicon.png" width="135"/>

    <Terminal/>
    </div>
  </Layout>
</template>

<script>
import Terminal from "~/components/Terminal.vue";

export default {
  components: { Terminal },
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
