<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">TOPIC ??????? title in menu comp!</h2>
    <div>Dátum konania: 20.06.2022 o 09.00 h</div>
    <div>Predsedajúci: PhDr. Marek Čižmár</div>

    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "ZasadnutiaSubPageView",
  data() {
    return {
      subpages: [
        {
          title: "Hlasovanie poslancov",
          route: "/o-mestskom-zastupitelstve",
        },
        {
          title: "Materiály na zasadnutie",
          route: "/poslanci-msz-v-trebisove",
        },
        { title: "Uznesenia", route: "/uznesenia" },
        { title: "Zápisnica zo zasadnutia", route: "/" },
        { title: "Interpelácie poslancov", route: "/interpelacie-poslancov" },
        { title: "Podnety poslancov", route: "/podnety-poslancov" },
        { title: "Zvukový záznam", route: "/" },
        { title: "Videozáznam", route: "/videozaznam" },
        { title: "Dochádzka poslancov", route: "/dochadzka-poslancov" },
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
