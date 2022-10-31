<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Oddelenia MsÚ v Trebišove" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "OddeleniaMsuView",
  data() {
    return {
      subpages: [
        {
          title: "Kancelária primátora",
          route: "/kancelaria-primatora",
        },
        {
          title: "Oddelenie finančné",
          route: "/oddelenie-financne",
        },
        {
          title: "Oddelenie výstavby a majetku",
          route: "/",
        },
        {
          title: "Oddelenie školstva",
          route: "/",
        },
        {
          title: "Oddelenie sociálnych vecí",
          route: "/",
        },
        {
          title: "Oddelenie organizačné",
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
