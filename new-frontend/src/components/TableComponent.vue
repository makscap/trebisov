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
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    tableData: Array,
  },
};
</script>
<style lang="scss" scoped></style>
