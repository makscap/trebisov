<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Polícia" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PoliciaView",
  data() {
    return {
      subpages: [
        {
          title: "Mestská polícia",
          route: "/",
        },
        {
          title: "Okresné riaditeľstvo policajného zboru v Trebišove",
          route: "/",
        },
        {
          title: "Policajné aktuality",
          route: "/",
        },
        {
          title: "Právne predpisy",
          route: "/",
        },
        {
          title: "Mestský kamerový systém",
          route: "/",
        },
        {
          title: "Rozdelenie sektorov",
          route: "/",
        },
        {
          title: "Rady a informácie",
          route: "/",
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
