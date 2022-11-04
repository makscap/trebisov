<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Bývanie" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "ByvanieView",
  data() {
    return {
      subpages: [
        {
          title: "Bytový podnik Trebišov s.r.o.",
          route: "/bytovy-podnik",
        },
        {
          title: "Žiadosť o prechod nájmu mestského nájomného bytu",
          route: "/ziadost-o-prechod-majmu-mestskeho-najomneho-bytu",
        },
        {
          title: "Žiadosť o pridelenie mestského nájomného bytu",
          route: "/ziadost-o-pridelenie-mestskeho-najomneho-bytu",
        },
        {
          title: "Žiadosť o súhlas k výmene bytu vo vlastníctve mesta",
          route: "/ziadost-o-suhlas-k-vymene-bytu-vo-vlastnictve-mesta",
        },
        {
          title: "Súpisné a orientačné čísla",
          route: "/urcenie-supisneho-alebo-orientacneho-cisla",
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
