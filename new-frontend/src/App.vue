<template>
  <div class="page-container">
    <metainfo>
      <template v-slot:title="{ content }">
        {{ content ? `${content} | TREBISOV` : `TREBISOV` }}
      </template>
    </metainfo>
    <Header />
    <Breadcrumbs />
    <div class="content-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import "@/index.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useMeta } from "vue-meta";

// import { initAll } from "@id-sk/frontend/idsk/all";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Národný kooridnátor pre zvyšovanie bezpečnosti cestnej premávky.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
  data() {
    return {
      GOVUKFrontend: require("../node_modules/@id-sk/frontend/idsk/all"),
      metaInfo: {
        title: "TREBISOV",
        titleTemplate: "%s | TREBISOV",
      },
    };
  },
  mounted() {
    console.log("robim");
    this.GOVUKFrontend.initAll();
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  overflow-x: hidden;
}
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-container {
  width: 100%;
  flex-grow: 2;
}
</style>
