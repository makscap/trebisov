<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Uznesenia</h1>

      <div data-module="idsk-table" id="priklad-1">
        <table class="idsk-table">
          <thead class="idsk-table__head">
            <tr class="idsk-table__row">
              <th scope="col" class="idsk-table__header">
                <span class="th-span">Číslo</span>
              </th>
              <th scope="col" class="idsk-table__header">
                <span class="th-span">Dátum</span>
              </th>
              <th scope="col" class="idsk-table__header">
                <span class="th-span"> </span>
              </th>
            </tr>
          </thead>
          <tbody class="idsk-table__body" style="">
            <tr class="idsk-table__row" v-for="(item, i) in tableData" :key="i">
              <td class="idsk-table__cell">{{ item.number }}</td>
              <td class="idsk-table__cell">{{ item.date }}</td>
              <td class="idsk-table__cell">
                <a
                  :href="item.url"
                  target="_blank"
                  :title="item.name"
                  class="govuk-link-custom link"
                >
                  {{ item.name }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "UzneseniaView",
  data() {
    return {
      tableData: [
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie finančnej",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie výstavby a majetku",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie bytovej",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie školstva, kultúry a športu",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Záverečný účet mesta Trebišov za rok 2021",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Žiadosť o úverový produkt – kontokorentný úver",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Žiadosť o úverový produkt – dlhodobý investičný úver",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Použitie prostriedkov rezervného fondu – zriadenie pivničných kóji dofinancovanie",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Nadobudnutie majetku (Východoslovenská vodárenská spoločnosť, a.s.)",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Prijatie daru (GREEN SIDE TV, s.r.o.)",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Prijatie daru (ABG Trebišov, s.r.o.)",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Nájomná zmluva (SLOVENSKÝ VODOHOSPODÁRSKY PODNIK, štátny podnik)",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Zmluva o budúcej zmluve o zriadení vecného bremena (MVDr. Jozef Ciberej)",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie finančnej",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie finančnej",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Informatívna správa zo zasadnutia Komisie finančnej",
          url: "/",
        },
      ],
    };
  },
  components: {},
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
