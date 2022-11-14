<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Komunálny odpad" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "KomunalnyOdpadView",
  data() {
    return {
      subpages: [
        {
          title: "Harmonogram vývozu komunálneho odpadu",
          route: "/harmonogram-vyvozu-lomunalnego-odpadu",
        },
        {
          title: "Zberný dvor",
          route: "/zberny-dvor",
        },
        {
          title: "Doseparačné stredisko",
          route: "/doseparacne-stredisko",
        },
        {
          title: "Tlačivá",
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
