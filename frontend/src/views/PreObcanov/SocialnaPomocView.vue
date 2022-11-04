<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Sociálna pomoc" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "SocialnaPomocView",
  data() {
    return {
      subpages: [
        {
          title: "Finančná pomoc primátora a zástupcu primátora",
          route: "/financna-pomoc-primatora-a-zastupcu-primatora",
        },
        {
          title: "Denné centrá",
          route: "/denne-centra",
        },
        {
          title: "Domáca opatrovateľská služba",
          route: "/domaca-opatrovatelska-sluzba",
        },
        {
          title: "Inštitút osobitného príjemcu",
          route: "/institut-osobitneho-prijemcu",
        },
        {
          title: "Mestská sociálna ubytovňa",
          route: "/mestska-socialna-ubytovna",
        },
        {
          title: "Mestský útulok",
          route: "/mestsky-utulok",
        },
        {
          title: "Sociálne služby s použitím telekomunikačných technológií",
          route: "/socialne-sluzby-s-pouzitim-telekomunikacnych-technologii",
        },
        {
          title: "Stredisko osobnej hygieny a práčovne",
          route: "/stredisko-osobnej-hygieny-a-pracovne",
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
