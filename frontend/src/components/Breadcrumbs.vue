/* eslint-disable */
<template>
  <div class="govuk-width-container breadcrumbs" v-if="!home">
    <div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <li
          class="govuk-breadcrumbs__list-item"
          v-for="(value, index) in values"
          :key="index"
        >
          <router-link
            class="govuk-breadcrumbs__link"
            :title="'Odkaz na podstránku ' + value"
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
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router";
import statisticsData from "../assets/statistics.json";

export default {
  data() {
    return {
      values: [],
      article: {},
      home: false,
      types: [
        {
          name: "o-meste",
          title: "O meste",
          children: [{ name: "1111", title: "1111" }],
        },
        { name: "samosprava-mesta", title: "Samospráva mesta" },
        { name: "o-meste/samosprava-mesta", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        // { name: "cyklisti", title: "Cyklisti" },
        // { name: "deti", title: "Deti" },
        // { name: "mladi-vodici", title: "Mladí vodiči" },
        // { name: "motocyklisti", title: "Motocyklisti" },
        // { name: "profesionali", title: "Profesionáli" },
        // { name: "seniori", title: "Seniori" },
        // { name: "vizia-nula", title: "Vízia nula" },
        // { name: "vodici", title: "Vodiči" },
        // { name: "becep", title: "BECEP" },
      ],
    };
  },
  name: "BreadcrumbsComponent",
  beforeMount() {
    this.types.forEach((element) => {
      routes.push({ name: element.name, title: element.title });
    });
    this.setValues();
  },
  mounted() {
    if (this.$route.query.id) {
      // console.log("sth");
      this.getArticle();
    }

    console.log(this.$route.path.split("/"));
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route() {
      this.setValues();
    },
  },
  methods: {
    setValues() {
      this.values = this.$route.path.split("/");
      // console.log("routes", routes);
      if (this.$route.query.id) this.values.push("name");
      if (this.$route.query.id) {
        // console.log("sth");
        this.getArticle();
      }
      this.home = this.$route.path === "/";
    },
    getName(value, index) {
      let route = routes.find((route) => route.name === value);
      if (
        this.$route.fullPath.includes("vyhladavanie") &&
        index === this.values.length - 1
      ) {
        route = {
          title: "Hľadať: " + this.$route.query.search,
        };
      }
      if (
        this.$route.fullPath.includes("statistiky/") &&
        index === this.values.length - 1
      ) {
        route = {
          title:
            statisticsData[parseInt(this.values[this.values.length - 1]) - 1]
              .title,
        };
      }
      if (value === "name") {
        route = {
          title: this.article.name,
        };
      }

      return route ? route.title : "null";
    },
    getBackUrl(index) {
      let url = "";
      this.values.forEach((value, i) => {
        if (value && i <= index) url += "/" + value;
      });
      if (!url) url = "/";
      // console.log("final url", url);
      return url;
    },
    async getArticle() {
      const res = await fetch(
        process.env.VUE_APP_API_URL +
          `/articles/${this.$route.query.id}/?fields[0]=name`
      );
      const jsonData = await res.json();
      this.article = jsonData.data.attributes;
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  width: 100%;
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
