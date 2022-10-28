<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Podnety poslancov MsZ v Trebišove</h2>
    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PodnetyPoslancovMszView",
  data() {
    return {
      subpages: [
        {
          title: "Rok 2022",
          route: "/rok-2022",
        },
        {
          title: "Rok 2021",
          route: "/rok-2021",
        },
        {
          title: "Rok 2020",
          route: "/rok-2020",
        },
        {
          title: "Rok 2019",
          route: "/rok-2019",
        },
        {
          title: "Rok 2018",
          route: "/rok-2018",
        },
        {
          title: "Rok 2017",
          route: "/rok-2017",
        },
        {
          title: "Rok 2016",
          route: "/rok-2016",
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
