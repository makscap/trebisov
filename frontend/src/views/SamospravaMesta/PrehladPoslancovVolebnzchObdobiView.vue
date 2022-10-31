<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu :subpages="subpages" title="Poslanci MsZ v Trebišove" />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PrehladPoslancovVolebnzchObdobiView",
  data() {
    return {
      subpages: [
        {
          title: "Poslanci za volebné obdobie 2018-2022",
          route: "/poslanci-za-volebne-obdobie-2018-2022",
        },
        {
          title: "Poslanci za volebné obdobie 2014-2018",
          route: "/poslanci-za-volebne-obdobie-2018-2022",
        },
        {
          title: "Poslanci za volebné obdobie 2010-2014",
          route: "/poslanci-za-volebne-obdobie-2018-2022",
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
