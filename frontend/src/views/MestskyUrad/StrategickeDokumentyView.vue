<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Strategické dokumenty</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "../../components/RazcestnikAndLinksComponent.vue";

export default {
  name: "StrategickeDokumentyView",
  data() {
    return {
      archive: [
        {
          title: "Územný plán",
          isOpen: false,
          children: [
            {
              name: "Programový rozpočet mesta Trebišov na rok 2022 s výhľadom na roky 2023 - 2024 (PDF, 5.86 MB)",
              url: "/",
              size: "181.32 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 1/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 2/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 3/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
      ],
    };
  },

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
  components: { RazcestnikAndLinksComponent },
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
