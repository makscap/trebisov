<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Výsledok vyhľadávania</h1>
    <form
      class="idsk-header-web__main-action-search"
      :action="`/vyhladavanie?search=${searchText}`"
    >
      <input
        class="govuk-input govuk-!-display-inline-block"
        id="idsk-header-web__main-action-search-input"
        name="search"
        v-model="searchText"
        placeholder="Zadajte hľadaný výraz"
        title="Zadajte hľadaný výraz"
        type="search"
        aria-describedby="input-width-30-hint"
        aria-label="Zadajte hľadaný výraz"
      />
      <button type="submit" class="govuk-button" data-module="govuk-button">
        <span class="govuk-visually-hidden">Vyhľadať</span>
        <i aria-hidden="true" class="fas fa-search"></i>
      </button>
    </form>
    <div class="search-container">
      <div class="idsk-customer-surveys-radios">
        <div class="govuk-radios">
          <div class="govuk-radios__item">
            <input
              class="govuk-checkboxes__input"
              id="Podstránky"
              type="checkbox"
              v-model="subpages"
            />
            <label class="govuk-label govuk-radios__label">
              Podstránky
              <small>({{ getResultPages.length }} {{ getSubpagesText }})</small>
            </label>
          </div>
          <div class="govuk-radios__item">
            <input
              class="govuk-checkboxes__input"
              id="Články"
              name="nationality"
              type="checkbox"
              v-model="articles"
            />
            <label class="govuk-label govuk-radios__label" for="Články">
              Články <small>({{ results.length }} {{ getArticlesText }})</small>
            </label>
          </div>
        </div>
        <hr class="idsk-crossroad-line" aria-hidden="true" />
      </div>
      <div style="width: 100%">
        <h3 class="govuk-heading-m black">
          {{ getCount }} {{ getSearchText }}
        </h3>
        <hr class="idsk-crossroad-line" aria-hidden="true" />
        <div v-for="(page, index) in getResultPages" :key="index">
          <div v-if="subpages">
            <router-link
              class="idsk-crossroad-title green link"
              :to="page.path"
            >
              {{ page.title }}
            </router-link>
            <hr class="idsk-crossroad-line" aria-hidden="true" />
          </div>
        </div>
        <div v-for="result in results" :key="result.id">
          <router-link
            class="idsk-crossroad-title green link"
            :to="getCrazyUrl(result)"
          >
            {{ result.name }}
          </router-link>
          <p>{{ result.description }}</p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router";
import { useMeta } from "vue-meta";

export default {
  name: "SearchResultView",
  setup() {
    useMeta({
      title: "Výsledok vyhľadávania",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Národný kooridnátor pre zvyšovanie bezpečnosti cestnej premávky",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
  data() {
    return {
      pages: routes,
      results: [],
      loading: false,
      articles: true,
      subpages: false,
      searchText: "",
      types: [
        { slug: "becep", value: "BECEP" },
        { slug: "aktivity", value: "Aktivity" },
        { slug: "vizia-nula", value: "Vízia nula" },
        { slug: "chodci", value: "Chodci" },
        { slug: "deti", value: "Deti" },
        { slug: "seniori", value: "Seniori" },
        { slug: "cyklisti", value: "Cyklisti" },
        { slug: "motocyklisti", value: "Motocyklisti" },
        { slug: "vodici", value: "Vodiči" },
        { slug: "mladi-vodici", value: "Mladí vodiči" },
        { slug: "profesionali", value: "Profesionáli" },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    getResultPages: function () {
      const filtered = this.pages.filter((page) => {
        const utils = require("@/assets/utils.js");
        return this.removePunctuation(utils.latin(page.title))
          .toLowerCase()
          .includes(this.$route.query.search);
      });
      console.log(filtered);
      return filtered;
    },
    getCount: function () {
      let count = 0;
      if (this.subpages) count += this.getResultPages.length;
      if (this.articles) count += this.results.length;
      return count;
    },
    getSearchText: function () {
      if (this.getCount === 1) return "výsledok";
      if (this.getCount >= 2 && this.getCount <= 4) return "výsledky";
      return "výsledkov";
    },
    getSubpagesText: function () {
      if (this.getResultPages.length === 1) return "výsledok";
      if (this.getResultPages.length >= 2 && this.getCount <= 4)
        return "výsledky";
      return "výsledkov";
    },
    getArticlesText: function () {
      if (this.results.length === 1) return "výsledok";
      if (this.results.length >= 2 && this.getCount <= 4) return "výsledky";
      return "výsledkov";
    },
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(
        process.env.VUE_APP_API_URL +
          `/get-search-result?search=${this.$route.query.search}`
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.results = data;
          console.log(data);
        })
        .finally(() => (this.loading = false));
    },
    removePunctuation(string) {
      return string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    },
    toNormalForm(str) {
      return (
        str
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replaceAll(" ", "-")
          .toLowerCase()
          .substring(0, 30) + "..."
      );
    },
    getCrazyUrl(article) {
      return `/aktuality/${
        this.types.find((t) => t.value === article.categories[0].name)?.slug
      }?id=${article.id}&name=${this.toNormalForm(article.name)}`;
    },
    async getCategories() {
      const res = await fetch(process.env.VUE_APP_API_URL + `/categories`);
      const jsonData = await res.json();
      this.types = this.types.map((type) => {
        const data = jsonData.data.find((d) => {
          return d.name === type.value;
        });
        return { slug: type.slug, value: type.value, id: data.id };
      });
    },
  },

  beforeMount() {
    this.getCategories();
  },
};
</script>

<style scoped>
.idsk-header-web__main-action-search {
  width: auto;
}
.link {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.idsk-customer-surveys-radios {
  min-width: 30%;
  padding-right: 20px;
}
.search-container {
  display: flex;
}
.govuk-checkboxes__input {
  opacity: 1;
  width: 30px;
}
.idsk-crossroad-title {
  width: 100%;
}
</style>
