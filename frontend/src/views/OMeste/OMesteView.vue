<template>
  <div class="govuk-width-container">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="O meste" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "OMesteView",
  data() {
    return {
      subpages: [
        { title: "Základné údaje", route: "/zakladne-udaje" },
        { title: "História mesta", route: "/historia-mesta" },
        { title: "Symboly mesta", route: "/symboly-mesta" },
        { title: "Štatút mesta", route: "/statut-mesta" },
        { title: "Infolist mesta Trebišov", route: "/infolist-mesta" },
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
