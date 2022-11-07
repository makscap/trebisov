<template>
  <div class="govuk-width-container">
    <div class="content">KONTAKT</div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SkolstvoKontaktyView",
  data() {
    return {
      subpages: [
        {
          title: "Aktuality v školstve",
          route: "/",
        },
        {
          title: "Školy a školské zariadenia",
          route: "/skoly-a-skolske-zariadenia",
        },
        {
          title: "Výberové konanie",
          route: "/",
        },
        {
          title: "Pracovné miesta",
          route: "/",
        },
        {
          title: "Testovanie",
          route: "/testovanie",
        },
        {
          title: "Hodnotiace správy",
          route: "/hodnotiace-spravy",
        },
        {
          title: "Školské súťaže",
          route: "/skolske-sutaze",
        },
        {
          title: "Kontakt",
          route: "/",
        },
      ],
    };
  },
  components: {},
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
