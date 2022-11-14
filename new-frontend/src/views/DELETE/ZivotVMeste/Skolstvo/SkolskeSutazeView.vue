<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Školské súťaže</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent";
import { useMeta } from "vue-meta";

export default {
  name: "SkolskeSutazeView",
  data() {
    return {
      archive: [
        {
          title: "Školské súťaže za školský rok 2019/2020",
          isOpen: false,
          children: [
            {
              name: "Vyhodnotenie okresného kola v cezpoľnom behu - žiačky SŠ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Školské súťaže za školský rok 2019/2020",
          isOpen: false,
          children: [
            {
              name: "Vyhodnotenie okresného kola v cezpoľnom behu - žiačky SŠ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Školské súťaže za školský rok 2019/2020",
          isOpen: false,
          children: [
            {
              name: "Vyhodnotenie okresného kola v cezpoľnom behu - žiačky SŠ",
              url: "/",
              size: "365 kB",
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
