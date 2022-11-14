<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Ostatné" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "OstatneView",
  data() {
    return {
      subpages: [
        {
          title: "Konanie verejného zhromaždenia",
          route: "/konanie-verejnoho-zhromazdenia",
        },
        {
          title: "Podanie petície",
          route: "/podanie-peticie",
        },
        {
          title: "Podanie sťažnosti",
          route: "/podanie-staznost",
        },
        {
          title: "Vydanie osvedčenia pre samostatne hospodáriaceho roľníka",
          route: "/vydanie-osvedcenia",
        },
        {
          title:
            "Žiadosť o parkovacie miesto na krytom parkovisku na ulici Berehovskej v Trebišove",
          route: "/ziadost-o-parkovacie-miesto",
        },
        {
          title: "Neuhradené pohladávky za nájomné",
          route: "/neuhradene-pohladavky",
        },
        {
          title: "Vydanie rybárskeho lístka",
          route: "/vydanie-rybarskeho-listka",
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
