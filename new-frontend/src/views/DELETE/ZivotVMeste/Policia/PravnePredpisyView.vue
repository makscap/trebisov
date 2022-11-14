<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Právne predpisy</h1>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "PravnePredpisyView",
  data() {
    return {
      files: [
        {
          name: "Zákon č. 564/1991 Zb. o obecnej polícii",
          size: "515.18 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Vyhláška MV SR 532/2003",
          size: "389.68 kB",
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
