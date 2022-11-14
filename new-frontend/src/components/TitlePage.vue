<template>
  <h1 class="govuk-heading-l blue" v-if="title">
    {{ title }}
  </h1>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "TitlePage",
  data() {
    return {};
  },
  props: {
    title: String,
  },
  components: {
    ErrorComponent,
  },
};
</script>

<style scoped></style>
