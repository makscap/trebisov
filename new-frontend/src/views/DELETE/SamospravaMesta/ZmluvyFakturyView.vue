<template>
  <div class="govuk-width-container main-box">
    <div class="container">
      <h2 class="govuk-heading-l title">Zmluvy, faktúry, objednávky</h2>

      <p class="text">
        Povinne zverejňované zmluvy, povinne zverejňované údaje o vyhotovených
        objednávkach tovarov, služieb a prác a povinne zverejňované údaje o
        faktúrach za tovary, služby a práce v zmysle zákona č. 211/2000 Z. z. o
        slobodnom prístupe k informáciám a o zmene a doplnenní niektorých
        zákonov (zákon o slobode informácií) v znení neskorších predpisov.
      </p>
    </div>
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
            <p>Organizácia:</p>
            <p>{{ el.organization }}</p>
            <p>{{ el.text }}</p>
            <p>
              {{
                indx === 0
                  ? "Odkaz na Centrálny register zmlúv:"
                  : "Aktuálne zverejňované faktúry nájdete na stránke:"
              }}
            </p>
            <a target="_blank" class="govuk-link-custom">{{ el.site }}</a>

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
  name: "ZmluvyFakturyView",
  data() {
    return {
      archive: [
        {
          title: "Mesto Trebišov",
          children: [
            {
              name: "Zmluvy",
              isOpen: false,
              info: [
                {
                  organization:
                    "Mesto Trebišov, M. R. Štefánika 862/204, 075 25 Trebišov",
                  text: "Povinne zverejňované zmluvy sú od 31.03.2022 v zmysle § 5a ods. 6 zákona č. 211/2000 Z. z. o slobodnom prístupe k informáciám a o zmene a doplnení niektorých zákonov (zákon o slobode informácií) v znení neskorších predpisov zverejňované v Centrálnom registri zmlúv.",
                  site: "www.crz.gov.sk/6275911-sk/mesto-trebisov/?order=32",
                },
              ],
            },
            {
              name: "Faktúry",
              isOpen: false,
              info: [
                {
                  organization:
                    "Mesto Trebišov, M. R. Štefánika 862/204, 075 25 Trebišov",
                  text: "Povinne zverejňované údaje o faktúrach za tovary, služby a práce v zmysle § 5b zákona č. 211/2000 Z. z. o slobodnom prístupe k informáciám a o zmene a doplnenní niektorých zákonov (zákon o slobode informácií) v znení neskorších predpisov.",
                  site: "www.egov.trebisov.sk",
                },
              ],
            },
            {
              name: "Objednávky",
              isOpen: false,
              info: [
                {
                  organization:
                    "Mesto Trebišov, M. R. Štefánika 862/204, 075 25 Trebišov",
                  text: "Povinne zverejňované údaje o vyhotovených objednávkach tovarov, služieb a prác v zmysle § 5b zákona č. 211/2000 Z. z. o slobodnom prístupe k informáciám a o zmene a doplnenní niektorých zákonov (zákon o slobode informácií) v znení neskorších predpisov.",
                  site: "www.egov.trebisov.sk",
                },
              ],
            },
          ],
        },

        {
          title: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
          children: [
            {
              name: "Zmluvy",
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
            {
              name: "Faktúry",
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
            {
              name: "Objednávky",
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
        {
          title: "Bytový podnik Trebišov, s.r.o.",
          children: [
            {
              name: "Zmluvy",
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
            {
              name: "Faktúry",
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
            {
              name: "Objednávky",
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
        {
          title: "Základná umelecká škola",
          children: [
            {
              name: "Zmluvy",
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
            {
              name: "Faktúry",
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
            {
              name: "Objednávky",
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
  components: {},
  methods: {
    toggle(elem) {
      // console.log(elem);
      this.isOpen = (prevState) =>
        prevState.map((item) => ({
          ...item,
          show: item == elem ? !item.show : false,
        }));
    },
    toggleAccordion(item) {
      // console.log(this.isOpen);
      // if (this.isOpen.includes(index)) {
      //   this.isOpen = this.isOpen.filter((i) => i !== index);
      //   return;
      // }

      // this.isOpen.push(index);
      item.isOpen = !item.isOpen;
    },
    // toggle(elem) {
    // setExtraData((prevState) =>
    //   prevState.map((item) => ({
    //     ...item,
    //     show: item == elem ? !item.show : false,
    //   }))
    // );
    //   }
    // this.isOpen = !this.isOpen;

    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped>
.main-box {
  // width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}

.list {
  margin-bottom: 40px !important;
}

.text {
  margin-bottom: 30px;
}
</style>
