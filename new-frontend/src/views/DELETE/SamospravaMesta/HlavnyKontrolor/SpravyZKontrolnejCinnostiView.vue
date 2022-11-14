<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Správy z kontrolnej činnosti</h1>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "../../../components/LinksAndSizeComponent.vue";

export default {
  name: "SpravyZKontrolnejCinnostiView",
  data() {
    return {
      files: [
        {
          name: "Smernica o poskytovaní informácií na žiadosť",
          size: "341.41 MB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Zásady hospodárenia a nakladania s majetkom mesta",
          size: "391.01 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: {
    LinksAndSizeComponent,
  },
  setup() {
    useMeta({
      title: "Domov",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Národný kooridnátor pre zvyšovanie bezpečnosti cestnej premávky",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },

  mounted() {},
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped></style>
