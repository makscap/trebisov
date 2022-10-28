<template>
  <div class="govuk-width-container">
    <div class="content">
      <h2 class="govuk-heading-l title">Ostatné dokumenty</h2>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "../../../components/LinksAndSizeComponent.vue";

export default {
  name: "OstatneDokumentyView",
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
<style lang="scss" scoped>
.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
</style>
