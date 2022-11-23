<template>
  <div>
    <h1 v-if="title" class="govuk-heading-l">{{ title }}</h1>
    <div class="content">
      <ul class="list menu">
        <li v-for="(sub, ind) in this.subpages" :key="ind" class="item">
          <div class="idsk-crossroad idsk-crossroad-2">
            <div class="idsk-crossroad__item">
              <router-link
                v-if="sub.route"
                :to="this.$route.path + sub.route"
                class="govuk-link idsk-crossroad-title"
                :title="sub.title"
                aria-hidden="false"
                >{{ sub.title }}
              </router-link>

              <a
                v-if="sub.url"
                :href="sub.url"
                class="govuk-link idsk-crossroad-title"
                aria-hidden="false"
                >{{ sub.title }}
              </a>
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
  name: "SubMenuView",
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
  width: calc((100% / 2) - 23px);
  margin-right: 23px;
}
.item a {
  font-weight: 700;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
