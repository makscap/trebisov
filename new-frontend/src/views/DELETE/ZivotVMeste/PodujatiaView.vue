<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Podujatia v meste</h2>
    <PodujatiaComponent />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import PodujatiaComponent from "@/components/MainPage/PodujatiaComponent.vue";

export default {
  name: "PodujatiaView",
  data() {
    return {};
  },
  components: { PodujatiaComponent },
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
