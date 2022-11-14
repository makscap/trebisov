<template>
  <div style="margin-bottom: 80px" class="govuk-width-container">
    <h1 class="govuk-heading-l">Dokumenty</h1>
    <div style="width: 50%; margin-top: 40px">
      <router-link
        :to="`/dokumenty/pravne-predpisy`"
        class="idsk-crossroad-title green link"
      >
        Právne predpisy
      </router-link>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>
    <div style="width: 50%; margin-top: 40px">
      <a :href="pdfLink" class="idsk-crossroad-title green link">
        Národná stratégia
      </a>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>
    <div class="idsk-crossroad__item" style="width: 50%; margin-top: 40px">
      <a
        href="https://www.mindop.sk/ministerstvo-1/doprava-3/bezpecnost-cestnej-premavky/cestny-bezpecnostny-audit"
        class="idsk-crossroad-title green link"
      >
        Cestný bezpečnostný audit
      </a>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "DocumentsView",
  setup() {
    useMeta({
      title: "Dokumenty",
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
  data() {
    return {
      pdfLink: require("../assets/pdf_files/NS SR pre BECEP 2021-2030 schválené znenie.pdf"),
    };
  },
};
</script>
