<template>
  <div data-module="idsk-footer-extended ">
    <div class="idsk-crossroad__item label govuk-heading-m">
      Profil verejného obstarávateľa
    </div>

    <div data-module="idsk-crossroad" class="">
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
    </div>
  </div>
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
.list {
  margin-bottom: 45px;
}
</style>
