<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Dotácie" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "DotacieView",
  data() {
    return {
      subpages: [
        {
          title: "Dotácie poskytnuté v roku 2021",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2020",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2019",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2018",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2017",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2016",
          route: "/1",
        },
        {
          title: "Dotácie poskytnuté v roku 2015",
          route: "/1",
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
