<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Cestovný poriadok MHD</h1>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "CestovnyPoriadokView",
  data() {
    return {
      files: [
        {
          name: "MHD001 Milhostov / ul. kpt. Nálepku - AS - OÚ - nemocnica - ul. SNP - ul. Mlynská - Paričov",
          size: "125 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "MHD001 Milhostov / ul. kpt. Nálepku - AS - OÚ - nemocnica - ul. SNP - ul. Mlynská - Paričov",
          size: "125 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "MHD001 Milhostov / ul. kpt. Nálepku - AS - OÚ - nemocnica - ul. SNP - ul. Mlynská - Paričov",
          size: "125 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent },
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
.label {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
.inline {
  display: inline;
}

.label_box {
  margin-top: 30px;
  margin-bottom: 20px;
}
.label_box span {
  font-weight: 400 !important;
}
</style>
