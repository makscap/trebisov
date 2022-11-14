<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Hodnotiace správy</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent";
import { useMeta } from "vue-meta";

export default {
  name: "HodnotiaceSpravyView",
  data() {
    return {
      archive: [
        {
          title: "Hodnotiace správy za školský rok 2020/2021",
          isOpen: false,
          children: [
            {
              name: "MŠ Hviezdoslavova - Správa o výsledkoch a podmienkach výchovno-vzdelávacej činnosti za šk. rok 2020/2021",
              url: "/",
              size: "388.81 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Hodnotiace správy za školský rok 2020/2021",
          isOpen: false,
          children: [
            {
              name: "MŠ Hviezdoslavova - Správa o výsledkoch a podmienkach výchovno-vzdelávacej činnosti za šk. rok 2020/2021",
              url: "/",
              size: "388.81 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Hodnotiace správy za školský rok 2020/2021",
          isOpen: false,
          children: [
            {
              name: "MŠ Hviezdoslavova - Správa o výsledkoch a podmienkach výchovno-vzdelávacej činnosti za šk. rok 2020/2021",
              url: "/",
              size: "388.81 kB",
              ext: "PDF",
            },
          ],
        },
      ],
    };
  },
  components: { RazcestnikAndLinksComponent },
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
