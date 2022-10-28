<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Hlavný kontrolór</h2>
    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "HlavnyKontrolorView",
  data() {
    return {
      subpages: [
        {
          title: "O hlavnom kontrolórovi",
          route: "/o-hlavnom-kontrolorovi",
        },
        {
          title: "Plány kontrolnej činnosti",
          route: "/plany-kontrolnej-cinnosti",
        },
        {
          title: "Správy z kontrolnej činnosti",
          route: "/spravy-z-kontrolnej-cinnosti",
        },
        {
          title: "Ostatné dokumenty",
          route: "/ostatne-dokumenty",
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
