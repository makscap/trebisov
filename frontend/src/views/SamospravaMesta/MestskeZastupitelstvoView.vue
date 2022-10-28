<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Mestské zastupiteľstvo</h2>
    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MestskeZastupitelstvoView",
  data() {
    return {
      subpages: [
        {
          title: "O mestskom zastupiteľstve",
          route: "/o-mestskom-zastupitelstve",
        },
        {
          title: "Poslanci MsZ v Trebišove",
          route: "/poslanci-msz-v-trebisove",
        },
        {
          title: "Zasadnutia MsZ v Trebišove",
          route: "/zasadnutia",
        },
        { title: "Uznesenia", route: "/uznesenia" },
        { title: "Priamy prenos zo zasadnutia", route: "/" },
        { title: "Mestská rada", route: "/mestska-rada" },
        { title: "Komisie", route: "/komisie" },
        { title: "Dokumenty", route: "/dokumenty" },
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
