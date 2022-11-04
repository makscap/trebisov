<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Životné prostredie" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "ZivotneProstredieView",
  data() {
    return {
      subpages: [
        {
          title: "Poplatok za znečisťovanie ovzdušia",
          route: "/",
        },
        {
          title:
            "Súhlas k povoleniu stavby malého zdroja znečisťovania ovzdušia",
          route: "/",
        },
        {
          title: "Povolenie na výrub dreviny",
          route: "/",
        },
        {
          title:
            "Súhlas k užívaniu stavby malého zdroja znečisťovania ovzdušia",
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
