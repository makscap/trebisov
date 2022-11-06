<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Hlas občanov" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "HlasObcanovView",
  data() {
    return {
      subpages: [
        {
          title: "Participatívny rozpočet",
          route: "/participativny-rozpocet",
        },
        {
          title: "Hlasovanie o participatívnom rozpočte mesta",
          route: "/hlasovanie-o-participativnom-rozpocte-mesta",
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
