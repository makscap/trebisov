<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Samospráva mesta" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "SamospravaMestaView",
  data() {
    return {
      subpages: [
        { title: "Primátor mesta", route: "/primator" },
        {
          title: "Zástupcovia primátora",
          route: "/zastupcovia-primatora",
        },
        {
          title: "Mestské zastupiteľstvo",
          route: "/mestske-zastupitelstvo",
        },
        {
          title: "Hlavný kontrolór",
          route: "/hlavny-kontrolor",
        },
        { title: "Úradná tabuľa", route: "/uradna-tabula" },
        { title: "Rozpočet", route: "/rozpocet-mesta" },
        { title: "Dotácie", route: "/dotacie" },
        { title: "Projekty", route: "/projekty" },
        {
          title: "Verejné obstarávanie",
          route: "/verejne-obstaravanie",
        },
        {
          title: "Zmluvy, faktúry, objednávky",
          route: "/zmluvy-faktury",
        },
        {
          title: "Interné predpisy",
          route: "/interne-predpisy",
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
