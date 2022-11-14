<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Doprava a komunikácie" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "DopravaAKomunikacieView",
  data() {
    return {
      subpages: [
        {
          title: "Dopravné značenia na miestnych komunikáciach",
          route: "/doprava-znacenia-na-miestnych-komunikaciah",
        },
        {
          title: "Obchádzky a uzávierky miestnych komunikácií",
          route: "/obchadzky-a-uzavierky-miestnych-komunikacii",
        },
        {
          title: "Rozkopávky miestnych komunikácií",
          route: "/rozkopavky-miestnych-komunikacii",
        },
        {
          title: "Cestovný poriadok MHD",
          route: "/cestovny-poriadok-mhd",
        },
        {
          title: "Bikesharing-zdieľané bicykle ANTIK",
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
