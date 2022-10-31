<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Infolist mesta Trebišov</h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "../../components/RazcestnikAndLinksComponent";

export default {
  name: "InfolistMestaView",
  data() {
    return {
      isOpen: [],
      archive: [
        {
          title: "Rok 2022",
          isOpen: false,
          children: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          title: "Rok 2021",
          isOpen: false,
          children: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          title: "Rok 2020",
          isOpen: false,
          children: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          title: "Rok 2019",
          isOpen: false,
          children: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          title: "Rok 2018",
          isOpen: false,
          children: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              url: "@/assets/pdf/test.pdf",
              ext: "PDF",
              size: 181.32,
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

  mounted() {},
  components: { RazcestnikAndLinksComponent },
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
