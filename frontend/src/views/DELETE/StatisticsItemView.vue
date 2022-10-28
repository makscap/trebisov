<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">{{ records[selectedId - 1].title }}</h1>
    <div
      v-for="(graph, index) in records[selectedId - 1].graphs"
      :key="graph.title"
    >
      <h3 class="govuk-heading-m regular heading">{{ graph.title }}</h3>
      <img
        class="hero-image image"
        :src="
          require(`@/assets/staticticsDocs/doc${selectedId}_${index + 1}.png`)
        "
        alt="graph"
      />
      <p v-if="graph.source">Zdroj: {{ graph.source }}</p>
    </div>
  </div>
</template>

<script>
import statisticsData from "../assets/statistics.json";
import { useMeta } from "vue-meta";

export default {
  name: "StatisticsItemView",
  setup() {
    useMeta({
      title:
        "Zhodnotenie dopravno-bezpečnostnej situácie a cieľa akčnej dekády 2011 – 2020 v Slovenskej republike",
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
      selectedId: -1,
    };
  },
  beforeMount() {
    this.selectedId = this.$route.params.id;
    console.log(this.selectedId);
  },
  methods: {
    getImgUrl(img) {
      console.log(img);
      return require(img);
    },
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
  margin-top: 50px;
}
.image {
  margin-bottom: 15px;
  border: 1px solid black;
}
</style>
