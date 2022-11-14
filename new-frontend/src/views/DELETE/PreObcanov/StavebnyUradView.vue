<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Stavebný úrad" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "StavebnyUradView",
  data() {
    return {
      subpages: [
        {
          title: "Kolaudačné rozhodnutie",
          route: "/kolaudacne-rozhodnutie",
        },
        {
          title: "Odstránenie stavby",
          route: "/odstranenie-stavby",
        },
        {
          title: "Ohlásenie drobnej stavby",
          route: "/ohlasenie-drobnej-stavby",
        },
        {
          title: "Ohlásenie stavebných úprav",
          route: "/ohlasenie-dstavebnych-uprav",
        },
        {
          title: "Povolenie informačných, reklamných a propagačných zariadení",
          route: "/povolenie-informachnycn-zariadeni",
        },
        {
          title: "Povolenie zmeny užívania stavby",
          route: "/",
        },
        {
          title: "Stavebné povolenie",
          route: "/",
        },
        {
          title: "Územné rozhodnutie",
          route: "/",
        },
        {
          title: "Vydanie záväzného stanoviska k stavbe",
          route: "/",
        },
        {
          title: "Zmena stavby pred dokončením",
          route: "/",
        },
        {
          title: "Súpisné a orientačné čísla",
          route: "/",
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
