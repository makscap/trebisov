<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Pre občanov" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PreObcanovView",
  data() {
    return {
      subpages: [
        {
          title: "Evidencia obyvateľov",
          route: "/evidencia-obyvatelov",
        },
        {
          title: "Matrika",
          route: "/matrika",
        },
        {
          title: "Karty",
          route: "/karty",
        },
        {
          title: "Sociálna pomoc",
          route: "/socialna-pomoc",
        },
        {
          title: "Technické služby mesta Trebišov",
          route: "technicke-sluzby-mesta/",
        },
        {
          title: "Bývanie",
          route: "/byvanie",
        },
        {
          title: "Stavebný úrad",
          route: "/stavebny-urad",
        },
        {
          title: "Komunálny odpad",
          route: "/komunalny-odpad",
        },
        {
          title: "Miestne dane a poplatky",
          route: "/miestne-dane-a-poplatky",
        },
        {
          title: "Doprava a komunikácie",
          route: "/doprava-a-komunikacie",
        },
        {
          title: "Informácie",
          route: "/informacie",
        },
        {
          title: "Životné prostredie",
          route: "/zivotne-prostredie",
        },
        {
          title: "Ostatné",
          route: "/ostatne",
        },
        {
          title: "Otázky a odpovede",
          route: "/otazky-a-odpovede",
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
