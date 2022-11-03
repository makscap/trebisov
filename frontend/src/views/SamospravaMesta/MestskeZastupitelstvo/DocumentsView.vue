<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Dokumenty</h1>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "../../../components/LinksAndSizeComponent.vue";

export default {
  name: "DocumentsView",
  data() {
    return {
      files: [
        {
          name: "Rokovací poriadok mestského zastupiteľstva v znení dodatku č. 1",
          size: "515.18 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Rokovací poriadok komisií mestského zastupiteľstva v znení dodatkov č. 1 a č. 2",
          size: "389.68 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Rokovací poriadok mestskej rady v znení dodatku č. 1",
          size: "411.69 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Plán zasadnutí mestského zastupiteľstva na rok 2022",
          size: "85.38 kB",
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
