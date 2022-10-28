<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">
      Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného
      funkcionára - poslanci
    </h2>

    <div
      class="govuk-accordion"
      data-module="idsk-accordion"
      id="2"
      data-attribute="value"
    >
      <div
        v-for="(item, ind) in archive"
        :key="ind"
        class="govuk-accordion__section list"
      >
        <div class="idsk-crossroad__item label govuk-heading-m">
          {{ item.title }}
        </div>

        <div v-for="(child, indx) in item.children" :key="indx" class="">
          <div class="govuk-accordion__section-header">
            <h2 class="govuk-accordion__section-heading">
              <button
                type="button"
                id="2-heading-1"
                aria-controls="2-content-1"
                class="govuk-accordion__section-button"
                aria-expanded="false"
                @click="toggleAccordion(child)"
              >
                {{ child.name }}</button
              ><span class="govuk-accordion__icon" aria-hidden="true"></span>
            </h2>
          </div>
          <div
            v-for="(el, i) in child.info"
            :key="i"
            id="2-content-1"
            :class="
              child.isOpen
                ? 'govuk-accordion__section'
                : 'govuk-accordion__section-content'
            "
            aria-labelledby="2-heading-1"
          >
            <p class="govuk-body"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OznameniaFunkciiPoslanciView",
  data() {
    return {
      archive: [
        {
          title: "Mesto Trebišov",
          children: [
            {
              name: "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci za rok 2020",
              isOpen: true,
              info: [
                {
                  name: "Mesto Trebišov, M. R. Štefánika 862/204, 075 25 Trebišov",
                  size: "Povinne zverejňované zmluvy sú od 31.03.2022 v zmysle § 5a ods. 6 zákona č. 211/2000 Z. z. o slobodnom prístupe k informáciám a o zmene a doplnení niektorých zákonov (zákon o slobode informácií) v znení neskorších predpisov zverejňované v Centrálnom registri zmlúv.",
                  url: "https://crz.gov.sk",
                  ext: "https://crz.gov.sk",
                },
              ],
            },
            {
              name: "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci za rok 2019",
              isOpen: false,
              info: [
                {
                  organization:
                    "Mesto Trebišov, M. R. Štefánika 862/204, 075 25 Trebišov",
                  text: "Povinne zverejňované zmluvy sú od 31.03.2022 v zmysle § 5a ods. 6 zákona č. 211/2000 Z. z. o slobodnom prístupe k informáciám a o zmene a doplnení niektorých zákonov (zákon o slobode informácií) v znení neskorších predpisov zverejňované v Centrálnom registri zmlúv.",
                  site: "https://crz.gov.sk",
                },
              ],
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
