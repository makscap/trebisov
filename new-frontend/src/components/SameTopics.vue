<template>
  <div v-if="links.length > 0">
    <h3 class="govuk-heading-s black title">Súvisiace témy:</h3>

    <ul class="list">
      <li v-for="(item, i) in links" :key="i" class="item">
        <a :href="item.url" class="link">
          {{ item.name }}
        </a>
      </li>
    </ul>

    <div></div>
  </div>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "SameTopics",
  data() {
    return {};
  },
  methods: {},
  components: {
    ErrorComponent,
  },
  props: { links: Array },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 15px !important;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  border-bottom: 2px solid #949494;
  padding-bottom: 30px;
}

.link {
  display: inline-flex;
  align-items: center;
}

.item {
  margin-bottom: 15px;
}

.item:last-child {
  margin-bottom: 0px;
}
</style>
