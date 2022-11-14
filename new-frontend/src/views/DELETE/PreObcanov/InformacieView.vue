<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Informácie" />
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
          route: "/dolezite-telefonne-cisla",
        },
        {
          title: "Poruchy dodávky teplej vody",
          route: "/v-pripade-poruch-s-dodavkou-tepla",
        },
        {
          title: "Lekárenská pohotovostná služba",
          route: "",
          url: "https://www.e-vuc.sk/ksk/lekarenska-pohotovostna-sluzba-v-ksk.html?page_id=87105&okres=Okres+Trebi%C5%A1ov",
        },
        {
          title: "Postup mesta pri vybavovaní žiadostí",
          route: "/postup-mesta-pri-vybavovani-ziadosti",
        },
        {
          title: "Postup pri sprístupňovaní informácií",
          route: "/postup-pri-spristupnovani-informacii",
        },
        {
          title: "Ako podať opravný prostriedok",
          route: "/ako-podat-opravny-prostriedok",
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
