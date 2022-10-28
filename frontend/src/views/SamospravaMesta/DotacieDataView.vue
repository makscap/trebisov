<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Dotácie poskytnuté v roku 2021</h2>

    <TableComponent :tableData="tableData" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import TableComponent from "../../components/TableComponent.vue";

export default {
  name: "DotacieDataView",
  data() {
    return {
      tableData: {
        columns: [
          "Dátum",
          "Žiadaná výška dotácie",
          "Schválená výška dotácie",
          "Výška čerpanej dotácie",
          "rozdiel vrátené",
        ],
        items: [
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
          {
            date: "SLAVOJ TREBIŠOV – futbal",
            dotacia_1: "180 000,00",
            dotacia_2: "122 575,00",
            dotacia_3: "122 575,00",
            back: "00",
          },
        ],
      },
    };
  },
  components: { TableComponent },
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
