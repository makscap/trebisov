<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">
        Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného
        funkcionára - poslanci
      </h1>
      <RazcestnikAndLinksComponent :archive="archive" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent";

export default {
  name: "OznameniaFunkciiPoslanciView",
  data() {
    return {
      archive: [
        {
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci za rok 2020",
          isOpen: false,
          children: [
            {
              name: "Mgr. Martin Begala",
              url: "/",
              size: "279.42 kB",
              ext: "PDF",
            },
            {
              name: "Mgr. Martin Begala",
              url: "/",
              size: "279.42 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci za rok 2019",
          isOpen: false,
          children: [
            {
              name: "Mgr. Martin Begala",
              url: "/",
              size: "279.42 kB",
              ext: "PDF",
            },
            {
              name: "Mgr. Martin Begala",
              url: "/",
              size: "279.42 kB",
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
    toggleAccordion(item) {
      if (item.isOpen) {
        this.archive.forEach((el) => {
          el.isOpen = false;
        });
      } else {
        this.archive.forEach((el) => {
          el.isOpen = false;
        });
        item.isOpen = true;
      }
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
