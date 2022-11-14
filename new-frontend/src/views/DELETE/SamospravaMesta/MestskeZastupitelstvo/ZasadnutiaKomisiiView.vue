<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Zasadnutia komisií" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "ZasadnutiaKomisiiView",
  data() {
    return {
      subpages: [
        {
          title: "Komisia finančná",
          route: "/komisia-financna",
        },
        {
          title: "Komisia výstavby a majetku",
          route: "/",
        },
        {
          title: "Komisia sociálna",
          route: "/",
        },
        {
          title: "Komisia bytová",
          route: "/",
        },
        {
          title: "Komisia školstva, kultúry a športu",
          route: "/",
        },
        {
          title:
            "Komisia na riešenie problémov marginalizovanej rómskej komunity",
          route: "/",
        },
        {
          title:
            "Komisia na ochranu verejného záujmu pri výkone funkcií verejných funkcionárov",
          route: "/",
        },
        {
          title: "Komisia pre časť mesta Milhostov",
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
