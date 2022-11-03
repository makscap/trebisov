<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Pre občanov" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PreObcanovView",
  data() {
    return {
      subpages: [
        {
          title: "Mestská polícia",
          route: "/mestska-policia",
        },
        {
          title: "Okresné riaditeľstvo policajného zboru v Trebišove",
          route: "/okresne-riaditelstvo-policajneho-zboru",
        },
        {
          title: "Policajné aktuality",
          route: "/policajne-aktuality",
        },
        {
          title: "Právne predpisy",
          route: "/pravne-predpisy",
        },
        {
          title: "Mestský kamerový systém",
          route: "/mestsky-kamerovy-system",
        },
        {
          title: "Rozdelenie sektorov",
          route: "/rozdelenie-sektorov",
        },
        {
          title: "Rady a informácie",
          route: "/rady-a-informacie",
        },
      ],
    };
  },
  components: { SubPagesMenu },
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
