<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Miestne dane a poplatky" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MiestneDaneView",
  data() {
    return {
      subpages: [
        {
          title: "Daň z nehnuteľností",
          route: "/dan-z-nehnutelnosti",
        },
        {
          title: "Daň za psa",
          route: "/",
        },
        {
          title: "Daň za predajné automaty",
          route: "/",
        },
        {
          title: "Daň za nevýherné hracie prístroje",
          route: "/",
        },
        {
          title: "Daň za užívanie verejného priestranstva",
          route: "/",
        },
        {
          title: "Daň za ubytovanie",
          route: "/",
        },
        {
          title: "Poplatok za komunálne odpady a drobné stavebné odpady",
          route: "/",
        },
        {
          title: "Nedoplatky na daniach a poplatkoch",
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
