<template>
  <div class="govuk-width-container">
    <div class="content">
      <h2 class="govuk-heading-l title">Cenníky</h2>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "../../components/LinksAndSizeComponent.vue";

export default {
  name: "CennikyView",
  data() {
    return {
      files: [
        {
          name: "Cenník služieb poskytovaných mestom a mestskými organizáciami - účinný od 01.07.2022",
          size: "299.15kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Cenník služieb poskytovaných Technickými službami mesta Trebišov - účinný od 01.07.2022",
          size: "534 kB",
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
