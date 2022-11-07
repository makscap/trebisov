<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">25. zasadnutie MsZ zo dňa 20.06.2022</h2>

    <div class="block">
      <div>Dátum konania: <span class="bold">20.06.2022 o 09.00 h</span></div>
      <div>Predsedajúci: <span class="bold">PhDr. Marek Čižmár</span></div>
    </div>

    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import SubPagesMenu from "@/components/SubPagesMenu.vue";

export default {
  name: "ZasadnutiaView",
  data() {
    return {
      subpages: [
        {
          title: "Hlasovanie poslancov",
          route: "/",
        },
        {
          title: "Materiály na zasadnutie",
          route: "/",
        },
        {
          title: "Uznesenia",
          route: "/",
        },
        {
          title: "Zápisnica zo zasadnutia",
          route: "/",
        },
        {
          title: "Interpelácie poslancov",
          route: "/",
        },
        {
          title: "Podnety poslancov",
          route: "/",
        },
        {
          title: "Zvukový záznam",
          route: "/",
        },
        {
          title: "Videozáznam",
          route: "/",
        },
        {
          title: "Dochádzka poslancov",
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
    toggle() {
      this.isOpen = !this.isOpen;
    },
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped>
.block {
  margin-bottom: 30px;
}
</style>
