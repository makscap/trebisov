<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Interpelácie poslancov 2022</h2>

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
              <span class="th-span">Poslanec</span>
            </th>
            <th scope="col" class="idsk-table__header">
              <span class="th-span"> </span>
            </th>
          </tr>
        </thead>
        <tbody class="idsk-table__body">
          <tr class="idsk-table__row" v-for="(item, i) in tableData" :key="i">
            <td class="idsk-table__cell">{{ item.number }}</td>
            <td class="idsk-table__cell">{{ item.date }}</td>
            <td class="idsk-table__cell">{{ item.name }}</td>
            <td class="idsk-table__cell">
              <a
                :href="item.url"
                target="_blank"
                :title="item.doc_name"
                class="govuk-link-custom link"
              >
                {{ item.doc_name }} ({{ item.doc_size }} {{ item.doc_ext }})
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "InterpelaciePoslancovRokView",
  data() {
    return {
      tableData: [
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Ing. Martin Telepovský",
          doc_name: "Interpelácia č. 131/2022",
          doc_size: "365 kB",
          doc_ext: "PDF",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Ing. Martin Telepovský",
          doc_name: "Interpelácia č. 131/2022",
          doc_size: "365 kB",
          doc_ext: "PDF",
          url: "/",
        },
        {
          number: "131/2022",
          date: "25.04.2022",
          name: "Ing. Martin Telepovský",
          doc_name: "Interpelácia č. 131/2022",
          doc_size: "365 kB",
          doc_ext: "PDF",
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
