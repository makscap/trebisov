<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Mestský úrad" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MestskeUradView",
  data() {
    return {
      subpages: [
        {
          title: "O mestskom úrade",
          route: "/o-mestskom-urade",
        },
        {
          title: "Prednosta",
          route: "/prednosta",
        },
        {
          title: "Oddelenia",
          route: "/oddelenia",
        },
        { title: "Strediská", route: "/strediska" },
        { title: "Oznamy", route: "/oznamy" },
        { title: "Oznamy o úmrtiach", route: "/oznamy-o-umrtiach" },
        { title: "Strategické dokumenty", route: "/strategicke-dokumenty" },
        {
          title: "Všeobecne záväzné nariadenia",
          route: "/vseobecne-zavazne-nariadenia",
        },
        { title: "Cenník", route: "/cenniky" },
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
