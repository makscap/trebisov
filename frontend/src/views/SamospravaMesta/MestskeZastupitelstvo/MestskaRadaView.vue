<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenuVertical :subpages="subpages" title="Mestská rada" />
    </div>
  </div>
</template>

<script>
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MestskaRadaView",
  data() {
    return {
      subpages: [
        {
          title: "Členovia mestskej rady",
          route: "/clenovia-mestskej-rady",
        },
        {
          title: "Zasadnutia mestskej rady ",
          route: "/zasadnutia-mestskej-rady",
        },
      ],
    };
  },
  components: { SubPagesMenuVertical },
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
