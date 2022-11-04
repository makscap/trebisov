<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Karty" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "InformacieView",
  data() {
    return {
      subpages: [
        {
          title: "Dôležité telefónne čísla",
          route: "/",
        },
        {
          title: "Poruchy dodávky teplej vody",
          route: "/",
        },
        {
          title: "Lekárenská pohotovostná služba",
          route: "/",
        },
        {
          title: "Postup mesta pri vybavovaní žiadostí",
          route: "/",
        },
        {
          title: "Postup pri sprístupňovaní informácií",
          route: "/",
        },
        {
          title: "Ako podať opravný prostriedok",
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
