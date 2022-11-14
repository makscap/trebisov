<template>
  <div v-html="content" v-if="content"></div>
  <div v-else>Obsah bol nesprávne načítaný.</div>
</template>

<script>
export default {
  name: "ContentBox",
  data() {
    return {};
  },
  props: {
    content: String,
  },
};
</script>

<style scoped></style>
