<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Testovanie</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent";
import { useMeta } from "vue-meta";

export default {
  name: "TestovanieView",
  data() {
    return {
      archive: [
        {
          title: "Školský rok 2021/2022",
          isOpen: false,
          children: [
            {
              name: "Testovanie T9",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Školský rok 2021/2022",
          isOpen: false,
          children: [
            {
              name: "Testovanie T9",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Školský rok 2021/2022",
          isOpen: false,
          children: [
            {
              name: "Testovanie T9",
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
