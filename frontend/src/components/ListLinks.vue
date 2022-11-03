<template>
  <!-- <div data-module="idsk-footer-extended "> -->
  <!-- <h3 class="idsk-crossroad__item label govuk-heading-m">
      Profil verejného obstarávateľa
    </h3> -->

  <ul class="list menu">
    <li v-for="(item, i) in links" :key="i" class="item">
      <div class="idsk-crossroad idsk-crossroad-2">
        <div class="idsk-crossroad__item">
          <router-link
            :to="this.$route.path + item.url"
            class="govuk-link idsk-crossroad-title"
            title="Title for 1st element"
            aria-hidden="false"
            >{{ item.name }}
          </router-link>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
      </div>
    </li>
  </ul>

  <!-- <div data-module="idsk-crossroad" class="">
      <div class="idsk-crossroad idsk-crossroad-1 list">
        <div class="idsk-crossroad__item" v-for="(item, i) in links" :key="i">
          <router-link
            :to="this.$route.path + item.url"
            class="govuk-link idsk-crossroad-title"
            >{{ item.name }}
          </router-link>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "ListLinks",
  data() {
    return {};
  },
  props: {
    title: String,
    links: Array,
  },
};
</script>

<style scoped>
/* .list {
  margin-bottom: 45px;
} */

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

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
