<template>
  <div class="govuk-width-container box">
    <h2 class="govuk-heading-l title">{{ title }}</h2>

    <ul class="list">
      <li v-for="(sub, ind) in this.subpages" :key="ind" class="item">
        <div class="idsk-crossroad idsk-crossroad-2">
          <div class="idsk-crossroad__item">
            <router-link
              :to="url_main + sub.route"
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
</template>

<script>
export default {
  name: "SubMenus",
  data() {
    return {};
  },
  props: {
    title: String,
    url_main: String,
    subpages: Array,
  },
};
</script>

<style scoped>
.box {
  padding-top: 30px;
  padding-bottom: 50px;
}

.title {
  margin-bottom: 7px !important;
}
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
  margin-top: 23px;
  margin-right: 23px;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
