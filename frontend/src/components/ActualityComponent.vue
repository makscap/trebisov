<template>
  <div class="govuk-width-container">
    <div class="govuk-main-wrapper">
      <h1 class="govuk-heading-l">{{ vision ? "" : "Aktuality" }}</h1>
      <LoadingSpin v-if="!loaded"></LoadingSpin>
      <div v-if="loaded && articles.length > 0">
        <div class="govuk-grid-row" v-if="page == 1 && !vision">
          <div class="govuk-grid-column-full">
            <div class="idsk-card idsk-card-hero">
              <router-link
                :to="getCrazyUrl(articles[0])"
                :title="
                  'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                  articles[0].attributes.name
                "
              >
                <img
                  style="object-fit: cover"
                  class="idsk-card-img idsk-card-img-hero hero-img"
                  width="100%"
                  :src="
                    articles[0].attributes.titleImage.data
                      ? articles[0].attributes.titleImage.data.attributes.url
                      : require('@/assets/becep_logo.svg')
                  "
                  :alt="
                    articles[0].attributes.titleImage.data
                      ? 'Alternatívny popis obrázka je nasledujúci. ' +
                        articles[0].attributes.titleImage.data.attributes.alternativeText.substring(
                          0,
                          70
                        )
                      : 'placeholder'
                  "
                  aria-hidden="true"
                />
              </router-link>

              <div class="idsk-card-content idsk-card-content-hero">
                <div class="idsk-card-meta-container">
                  <span class="idsk-card-meta idsk-card-meta-date"
                    ><a
                      href="#"
                      class="govuk-link"
                      @click="falseFunction"
                      :title="
                        'Pridané dňa : ' + articles[0].attributes.datetime
                      "
                      >{{
                        // eslint-disable-next-line vue/no-deprecated-filter
                        formatDate(articles[0].attributes.datetime)
                      }}</a
                    ></span
                  >
                  <span class="idsk-card-meta idsk-card-meta-tag"
                    ><a
                      href="#"
                      class="govuk-link"
                      :title="
                        'Článok patrí do kategórie ' +
                        articles[0].attributes.categories.data[0].attributes
                          .name
                      "
                      @click="falseFunction"
                      >{{
                        articles[0].attributes.categories.data[0].attributes
                          .name
                      }}</a
                    ></span
                  >
                </div>

                <div class="idsk-heading idsk-heading-hero">
                  <router-link
                    :to="getCrazyUrl(articles[0])"
                    class="idsk-card-title govuk-link"
                    :title="
                      'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                      articles[0].attributes.name
                    "
                    >{{ articles[0].attributes.name }}</router-link
                  >
                </div>

                <p class="idsk-body idsk-body-hero">
                  {{ articles[0].attributes.description.substring(0, 270) }} ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div v-if="loaded" class="govuk-grid-row">
            <div
              v-for="article in page == 1 && !vision
                ? articles.slice(1)
                : articles"
              :key="article.id"
              class="govuk-grid-column-one-third"
            >
              <div class="idsk-card idsk-card-secondary">
                <router-link
                  :to="getCrazyUrl(article)"
                  :title="
                    'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                    article.attributes.name
                  "
                >
                  <img
                    class="idsk-card-img idsk-card-img-secondary item-img"
                    style="width: 100%; object-fit: cover"
                    :src="
                      article.attributes.titleImage.data
                        ? article.attributes.titleImage.data.attributes.url
                        : require('@/assets/becep_logo.svg')
                    "
                    :alt="
                      article.attributes.titleImage.data
                        ? 'Alternatívny popis obrázka je nasledujúci. ' +
                          article.attributes.titleImage.data.attributes.alternativeText.substring(
                            0,
                            70
                          )
                        : 'placeholder'
                    "
                    aria-hidden="true"
                  />
                </router-link>

                <div class="idsk-card-content idsk-card-content-secondary">
                  <div class="idsk-card-meta-container">
                    <span class="idsk-card-meta idsk-card-meta-date"
                      ><a
                        href="#"
                        @click="falseFunction"
                        class="govuk-link"
                        title="Pridané dňa: 1.7.2020"
                        >{{ formatDate(article.attributes.datetime) }}</a
                      ></span
                    >
                    <span class="idsk-card-meta idsk-card-meta-tag"
                      ><a
                        :href="none"
                        class="govuk-link"
                        :title="
                          'Článok patrí do kategórie ' +
                          article.attributes.categories.data[0].attributes.name
                        "
                        @click="falseFunction"
                        >{{
                          article.attributes.categories.data[0].attributes.name
                        }}</a
                      ></span
                    >
                  </div>

                  <div class="idsk-heading idsk-heading-secondary">
                    <router-link
                      :to="getCrazyUrl(article)"
                      :title="
                        'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                        article.attributes.name
                      "
                      class="idsk-card-title govuk-link"
                    >
                      {{ article.attributes.name }}</router-link
                    >
                  </div>

                  <p class="idsk-body idsk-body-secondary">
                    {{ article.attributes.description.substring(0, 270) }} ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 v-if="loaded" class="govuk-heading-m">
          V tejto kategórii zatiaľ nemáme žiadne články
        </h1>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        "
      >
        <router-link
          style="margin: auto; font-size: 19px"
          class="govuk-link-custom"
          title="Po kliknutí sa otvorí stránka s ďalšími aktualitami."
          :to="vision ? '/aktuality/vizia-nula' : '/aktuality'"
          >Ďalšie aktuality</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import LoadingSpin from "@/components/Loader";
export default {
  name: "ActualityComponent",
  components: {
    LoadingSpin,
  },
  props: {
    vision: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      articles: [],
      loaded: false,
      page: 1,
      types: [
        { slug: "aktivity", value: "Aktivity" },
        { slug: "chodci", value: "Chodci" },
        { slug: "cyklisti", value: "Cyklisti" },
        { slug: "deti", value: "Deti" },
        { slug: "mladi-vodici", value: "Mladí vodiči" },
        { slug: "motocyklisti", value: "Motocyklisti" },
        { slug: "profesionali", value: "Profesionáli" },
        { slug: "seniori", value: "Seniori" },
        { slug: "vizia-nula", value: "Vízia nula" },
        { slug: "vodici", value: "Vodiči" },
      ],
    };
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      let day = date.toLocaleDateString("en-us", { day: "numeric" });
      let month = date.toLocaleDateString("en-us", { month: "numeric" });
      let year = date.toLocaleDateString("en-us", { year: "numeric" });
      return `${day}.${month}.${year}`;
      // Then specify how you want your dates to be formatted
    },
    falseFunction(e) {
      e.preventDefault();
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
        this.types.find(
          (t) => t.id === article.attributes.categories.data[0].id
        )?.slug
      }?id=${article.id}&name=${this.toNormalForm(article.attributes.name)}`;
    },
    async getCategories() {
      const res = await fetch(process.env.VUE_APP_API_URL + `/categories`);
      const jsonData = await res.json();
      this.types = this.types.map((type) => {
        const data = jsonData.data.find((d) => {
          return d.attributes.name === type.value;
        });
        return { slug: type.slug, value: type.value, id: data.id };
      });
    },

    getArticles() {
      this.articles = [];
      this.loaded = false;
      fetch(
        process.env.VUE_APP_API_URL +
          `/articles?populate[0]=categories&populate[1]=titleImage&populate[2]=photoGallery.images&sort=datetime:desc&filters[$or][0][archive][$eq]=false&filters[$or][1][archive][$null]=true&pagination[start]=0&pagination[limit]=4${
            this.vision
              ? "&filters[categories][name][$contains]=Vízia nula"
              : ""
          }`
      )
        .then((response) => response.json())
        .then((data) => {
          this.articles = data.data;
          this.loaded = true;
          this.itemcount = data.meta.pagination.total;

          // console.log(Math.ceil((data.meta.pagination.total - 10) / 9));
          // console.log(data.data);
        })

        .catch
        // catch any errors
        // that may arise
        ();
    },
  },
  beforeMount() {
    this.articleId = this.$route.query.id;
    this.getCategories();
  },
  mounted() {
    this.getArticles();
  },
};
</script>
<style>
.idsk-card-meta .govuk-link:visited {
  color: #626a6e;
  text-decoration: none;
}
.idsk-card-meta .govuk-link {
  color: #626a6e;
  text-decoration: none;
}
.pagination {
  margin-bottom: 70px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  font-size: 1.2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.pagination .disabled .page-link {
  color: #dee0e2;
}
.pagination .disabled {
  pointer-events: none;
}
.pagination .page-item .page-link:hover {
  background: #dee0e2;
  color: #204e2e;
}

/* .pagination .page-item .page-link:hover,
.pagination .page-item .page-link:active {
  background: #dee0e2;
  color: black;
} */
.pagination .page-item {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.pagination .page-item .page-link {
  position: relative;
  display: block;
  color: #204e2e;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee0e2;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  padding: 0.375rem 0.75rem;
}
.pagination .page-item .activated {
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
  background-color: #204e2e;
  border: 1px solid #dee0e2;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  padding: 0.375rem 0.75rem;
}
.hero-img {
  height: 250px;
}
.item-img {
  height: 200px;
}
.height-grid {
  height: 400px;
}
@media (max-width: 960px) {
  .hero-img {
    height: 200px;
  }
  .item-img {
    height: 200px;
  }
  .height-grid {
    height: 410px;
  }
}
@media (min-width: 960px) {
  .hero-img {
    height: 300px;
  }
  .item-img {
    height: 200px;
  }
  .height-grid {
    height: 410px;
  }
}
</style>
