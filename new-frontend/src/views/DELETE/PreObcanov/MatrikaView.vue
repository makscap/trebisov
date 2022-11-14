<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Matrika" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MatrikaView",
  data() {
    return {
      subpages: [
        {
          title: "Zápis novorodenca a rodný list",
          route: "/zapis-novorodenca-a-rodny-list",
        },
        {
          title: "Oprava rodného čísla",
          route: "/oprava-rodneho-cisla",
        },
        {
          title: "Uzavretie manželstva",
          route: "/uzavretie-manzelstva",
        },
        {
          title: "Potvrdenie k uzavretiu manželstva v cudzine",
          route: "/potvrdenie-k-uzavretiu-manzelstva-v-cudzine",
        },
        {
          title: "Vystavenie úmrtného listu",
          route: "/vystavenie-umrtneho-listu",
        },
        {
          title: "Osobitná matrika",
          route: "/osobitna-matrika",
        },
        {
          title: "Zápis do matriky na základe dokladov z cudzích štátov",
          route: "/zapis-do-matriky-na-zaklade-dokladov-z-cudzich-statov",
        },
        {
          title: "Oznámenie o prijatí skoršieho priezviska po rozvode",
          route: "/oznamenie-o-prijati-skorsieho-priezviska-po-rozvode",
        },
        {
          title: "Zmena mena osvojenca",
          route: "/zmena-mena-osvojenca",
        },
        {
          title:
            "Zmena cudzojazyčného priezviska do slovenskej pravopisnej podoby",
          route:
            "/zmena-cudzojazycneho-priezviska-do-slovenskej-pravopisnej-podoby",
        },
        {
          title: "Osvedčovanie listín a podpisov na listinách",
          route: "/osvedcovanie-listin-a-podpisov-na-listinach",
        },
        {
          title: "Ďalšie činnosti Matričného úradu",
          route: "/dalsie-cinnosti0matricneho-uradu",
        },
        {
          title: "Vystavenie úmrtného listu",
          route: "/vystavenie-umrtneho-listu",
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
