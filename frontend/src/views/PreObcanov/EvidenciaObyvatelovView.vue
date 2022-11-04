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
  name: "EvidenciaObyvatelovView",
  data() {
    return {
      subpages: [
        {
          title: "Potvrdenie o trvalom pobyte",
          route: "/potverdenie-o-trvalom-pobyte",
        },
        {
          title: "Prihlásenie k prechodnému pobytu",
          route: "/prihlasenie-k-prechodnemu-pobytu",
        },
        {
          title: "Prihlásenie na trvalý pobyt",
          route: "/prihlasenie-na-trvaly-pobyt",
        },
        {
          title: "Vydanie prvého občianského preukazu pri dovŕšení 15. roku",
          route: "/vydanie-prveho-obcianskeho-preukazu",
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
