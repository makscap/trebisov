<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Plány kontrolnej činnosti</h2>

    <RazcestnikAndLinksComponent :archive="archive" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "../../../components/RazcestnikAndLinksComponent";

export default {
  name: "PlanyKontrolnejCinnostiView",
  data() {
    return {
      isOpen: false,
      archive: [
        {
          title: "Rok 2022",
          isOpen: false,
          children: [
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
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
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
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
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
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
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
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
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Zápisnica zo zasadnutia",
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
    toggle() {
      this.isOpen = !this.isOpen;
    },
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
