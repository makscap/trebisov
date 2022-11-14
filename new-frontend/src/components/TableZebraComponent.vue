<template>
  <div data-module="idsk-table" id="priklad-1">
    <table class="idsk-table">
      <thead class="idsk-table__head">
        <tr class="idsk-table__row">
          <th
            scope="col"
            class="idsk-table__header"
            v-for="(col, i) in tableData.columns"
            :key="i"
          >
            <span class="th-span"> {{ col }} </span>
          </th>
        </tr>
      </thead>
      <tbody class="idsk-table__body" style="">
        <tr
          class="idsk-table__row"
          v-for="(row, i) in tableData.items"
          :key="i"
        >
          <td class="idsk-table__cell" v-for="(value, ind) in row" :key="ind">
            <div class="coluns_sides" v-if="!value.link">
              <router-link
                :to="this.$route.path + '/' + value.url"
                class="govuk-link idsk-crossroad-title"
                :title="value.name"
                aria-hidden="false"
              >
                {{ value.name }}
              </router-link>
            </div>

            <div v-if="value.link">
              {{ value }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableZebraComponent",
  props: {
    tableData: Array,
  },
  data() {
    return {};
  },
  components: {},
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
<style lang="scss" scoped>
// th:nth-child(1) {
//   width: 100px;
// }

// th:nth-child(2) {
//   flex: 1;
// }

// th:nth-child(3) {
//   width: 100px;
// }

th:nth-child(1),
td:nth-child(1) {
  width: 100px;
}

th:nth-child(2),
td:nth-child(2) {
  flex: 1;
}

th:nth-child(3),
td:nth-child(3) {
  width: 100px;
}

tr {
  border-radius: 4px;
}

tr:nth-child(2n + 2) {
  background-color: #f3f2f1;
}

.idsk-table__cell {
  border-bottom: none !important;
}
</style>
