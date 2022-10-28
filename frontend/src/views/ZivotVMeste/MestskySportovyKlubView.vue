<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Mestský športový klub mládeže</h2>
    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MestskySportovyKlubView",
  data() {
    return {
      subpages: [
        {
          title: "O klube",
          route: "/o-klube",
        },
        {
          title: "Aktuality",
          route: "/aktuality-klubu",
        },
        {
          title: "Fotogaléria",
          route: "/fotogaleria",
        },
        {
          title: "Rozpis ľadovej plochy a tréningov",
          route: "/rozpis-ladovej-plochy",
        },
        {
          title: "Prenájom ihriska s umelou trávou",
          route: "/prenajom-ihriska",
        },
        {
          title: "Program zápasov",
          route: "/program-zapasov",
        },
        {
          title: "Dokumenty",
          route: "/dokumenty",
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
