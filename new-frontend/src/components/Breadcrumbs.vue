/* eslint-disable */
<template>
  <div class="govuk-width-container breadcrumbs" v-if="!home">
    <div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <!-- <li
          class="govuk-breadcrumbs__list-item"
          v-for="(value, index) in routes"
          :key="index"
        >
          <router-link
            class="govuk-breadcrumbs__link"
            :title="'Odkaz na podstránku ' + value.title"
            :to="getBackUrl(index)"
            v-if="values.length - 1 > index"
            ><i class="fas fa-home icon" v-if="!value"></i
            >{{
              !value
                ? "Domov"
                : getName(value, index) === "null"
                ? ""
                : getName(value, index)
            }}</router-link
          >
          {{ values.length - 1 === index ? getName(value, index) : "" }}
        </li> -->

        <li
          class="govuk-breadcrumbs__list-item"
          v-for="(value, index) in routes"
          :key="index"
        >
          <router-link
            class="govuk-breadcrumbs__link"
            :title="'Odkaz na podstránku ' + value.title"
            :to="getBackUrl(index)"
            v-if="values.length - 1 > index"
          >
            <i class="fas fa-home icon" v-if="!value"></i>
            {{ !value ? "Domov" : "1" ? "" : "2" }}</router-link
          >{{ value.title }}
          <!-- {{ values.length - 1 === index ? getName(value, index) : "" }} -->
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [],
      home: false,
      types: [
        { name: "o-meste", title: "O meste" },
        { name: "zakladne-udaje", title: "Základné údaje" },
      ],
    };
  },
  name: "BreadcrumbsComponent",
  beforeMount() {
    this.home = this.$route.path === "/";
  },
  mounted() {},
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route() {
      this.home = this.$route.path === "/";
    },
  },
  methods: {
    //     getBackUrl(index) {
    //   let url = "";
    //   this.values.forEach((value, i) => {
    //     if (value && i <= index) url += "/" + value;
    //   });
    //   if (!url) url = "/";
    //   // console.log("final url", url);
    //   return url;
    // },
  },
  props: {
    routes: Array,
  },
};
</script>

<style scoped>
.breadcrumbs {
  width: 100%;
  margin-bottom: 20px;
}
@media screen and (max-width: 1020px) {
  .breadcrumbs {
    width: auto;
  }
}
.icon {
  margin-right: 10px;
}
</style>
