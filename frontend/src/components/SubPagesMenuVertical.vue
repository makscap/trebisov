<template>
  <div>
    <h1 v-if="title" class="govuk-heading-l">{{ title }}</h1>
    <div :class="title ? 'content' : 'mb-30'">
      <ul class="list menu">
        <li v-for="(sub, ind) in this.subpages" :key="ind" class="item">
          <div class="idsk-crossroad idsk-crossroad-2">
            <div class="idsk-crossroad__item">
              <router-link
                :to="this.$route.path + sub.route"
                class="govuk-link idsk-crossroad-title"
                title="Title for 1st element"
                aria-hidden="false"
                >{{ sub.title }}
              </router-link>
              <hr class="idsk-crossroad-line" aria-hidden="true" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubPagesMenuVertical",
  data() {
    return {};
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
  props: {
    subpages: Array,
    title: String,
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}

.item {
  width: 100%;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
