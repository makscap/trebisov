<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Zasadnutia komisie finančnej</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "../../../components/RazcestnikAndLinksComponent.vue";

export default {
  name: "KomisieFinancnejView",
  data() {
    return {
      archive: [
        {
          title: "Rok 2022",
          isOpen: false,
          children: [
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2021",
          isOpen: false,
          children: [
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2020",
          isOpen: false,
          children: [
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2019",
          isOpen: false,
          children: [
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2018",
          isOpen: false,
          children: [
            {
              date: "19.04.2022",
              name: "Informatívna správa",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022",
              name: "Informatívna správa",
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
