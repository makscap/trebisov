<template>
  <ul class="list" v-if="items">
    <li class="item" v-for="(item, i) in items" :key="i">
      <h5 class="name">{{ item.name }}</h5>
      <p class="text">{{ item.text }}</p>
    </li>
  </ul>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "OznamyCard",
  data() {
    return {};
  },
  methods: {},
  components: {
    ErrorComponent,
  },
  props: { items: Array },
};
</script>
<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f2f1;
  border: 2px solid #0b0c0c;
  border-radius: 4px;
  padding: 43px 0px;
  margin-bottom: 30px;
}

.item:last-child {
  margin-bottom: 0px;
}

.name {
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #0b0c0c;
  text-align: center;
}
.text {
  padding: 0;
  margin: 0;
  max-width: 425px;
  text-align: center;
}
</style>
