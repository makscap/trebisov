<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">
      Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného
      funkcionára - tlačivá
    </h2>

    <div v-for="link in data" :key="link.id" class="govuk-accordion__section">
      <a
        :href="require('@/assets/pdf/test.pdf')"
        target="_blank"
        title="Štatút mesta Trebišov"
        class="govuk-link-custom"
        >{{ link.name }}</a
      ><span class="no-link"> ({{ link.ext }}, {{ link.size }})</span>

      <p class="govuk-body"></p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OznameniaFunkciiTlacivaView",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Oznámenie funkcií, zamestnaní, činností a majetkových pomerov verejných funkcionárov - Tlačivo A, B pre ručné vypĺňanie ",
          ext: "PDF",
          size: "3.38 MB",
        },
        {
          id: 2,
          name: "Oznámenie funkcií, zamestnaní, činností a majetkových pomerov verejných funkcionárov - Tlačivo A, B pre elektronické vypĺňanie",
          ext: "PDF",
          size: "2.97 MB",
        },
        {
          id: 3,
          name: "Oznámenie verejného funkcionára po skončení výkonu verejnej funkcie - Tlačivo C pre ručné vypĺňanie",
          ext: "PDF",
          size: "1.93 MB",
        },
        {
          id: 4,
          name: "Oznámenie verejného funkcionára po skončení výkonu verejnej funkcie - Tlačivo C pre elektronické vypĺňanie",
          ext: "PDF",
          size: "1.76 MB",
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
