<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Štatistiky</h1>
    <div
      v-for="record in records"
      :key="record.id"
      class="idsk-crossroad__item"
      style="width: 50%; margin-top: 40px"
    >
      <router-link
        :to="`/statistiky/${record.id}`"
        class="idsk-crossroad-title green link"
      >
        {{ record.title }}
      </router-link>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
import statisticsData from "../assets/statistics.json";
import { useMeta } from "vue-meta";

export default {
  name: "StatisticsView",
  setup() {
    useMeta({
      title: "Štatistiky",
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
      records: statisticsData,
    };
  },
};
</script>

<style scoped>
.link {
  font-size: 19px;
}
</style>
