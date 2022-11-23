/* eslint-disable */
<template>
  <div>
    <div v-if="!articleId" class="govuk-width-container">
      <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
        <h1 class="govuk-heading-l">
          {{ type ? type.value : "Rady a informácie" }}
        </h1>
        <Loader v-if="!loaded"></Loader>
        <div v-if="loaded && articles.length > 0">
          <div class="govuk-grid-row height-grid" v-if="page == 1">
            <div class="govuk-grid-column-full">
              <div class="idsk-card idsk-card-hero">
                <router-link
                  :to="this.$route.path + getCrazyUrl(articles[0])"
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
                        ? 'https://strapi.becep.sk/' +
                          articles[0].attributes.titleImage.data.attributes.url
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
                        href="
                          #
                        "
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
                      :to="this.$route.path + getCrazyUrl(articles[0])"
                      class="idsk-card-title govuk-link"
                      :title="
                        'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                        articles[0].attributes.name
                      "
                      >{{ articles[0].attributes.name }}</router-link
                    >
                  </div>

                  <p class="idsk-body idsk-body-hero">
                    {{ articles[0].attributes.description.substring(0, 270) }}
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div v-if="loaded" class="govuk-grid-row">
              <div
                v-for="article in page == 1 ? articles.slice(1) : articles"
                :key="article.id"
                class="govuk-grid-column-one-third height-grid"
              >
                <div class="idsk-card idsk-card-secondary">
                  <router-link
                    :to="this.$route.path + getCrazyUrl(article)"
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
                          ? 'https://strapi.becep.sk/' +
                            article.attributes.titleImage.data.attributes.url
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
                          :title="
                            'Pridané dňa:' +
                            formatDate(article.attributes.datetime)
                          "
                          >{{ formatDate(article.attributes.datetime) }}</a
                        ></span
                      >
                      <span class="idsk-card-meta idsk-card-meta-tag"
                        ><a
                          :href="none"
                          class="govuk-link"
                          :title="
                            'Článok patrí do kategórie ' +
                            article.attributes.categories.data[0].attributes
                              .name
                          "
                          @click="falseFunction"
                          >{{
                            article.attributes.categories.data[0].attributes
                              .name
                          }}</a
                        ></span
                      >
                    </div>

                    <div class="idsk-heading idsk-heading-secondary">
                      <router-link
                        :to="this.$route.path + getCrazyUrl(article)"
                        class="idsk-card-title govuk-link"
                        :title="
                          'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                          article.attributes.name
                        "
                        >{{ article.attributes.name }}</router-link
                      >
                    </div>

                    <p class="idsk-body idsk-body-secondary">
                      {{ article.attributes.description }} ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul v-if="this.pages > 1 && loaded" class="pagination">
            <li class="page-item prev" :class="page == 1 ? 'disabled ' : ''">
              <a
                class="page-link"
                href="#"
                @click="
                  falseFunction();
                  setPageFunction(-1);
                "
                >«</a
              >
            </li>
            <li v-for="i in this.pages" :key="i" class="page-item">
              <a
                :class="i === page ? 'activated' : 'page-link'"
                href="#"
                @click="
                  falseFunction();
                  setPage(i);
                "
                >{{ i }}</a
              >
            </li>

            <li class="page-item next">
              <a
                class="page-link"
                :class="page == pages ? 'disabled ' : ''"
                href="#"
                @click="
                  falseFunction();
                  setPageFunction(1);
                "
                >»</a
              >
            </li>
          </ul>
        </div>
        <div v-else>
          <h1 v-if="loaded" class="govuk-heading-m">
            V tejto kategórii zatiaľ nemáme žiadne články
          </h1>
        </div>
      </div>
    </div>
    <ArticleView v-if="articleId" title="Aktualita" />
  </div>
</template>
<script>
import Loader from "@/components/Loader";
import ArticleView from "@/views/ArticleView.vue";
import { useMeta } from "vue-meta";

export default {
  name: "RadyAInformacieView",
  setup() {
    useMeta({
      title: "Aktivity",
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
  components: {
    Loader,
    ArticleView,
  },
  data() {
    return {
      articles: [],
      loaded: false,
      page: 1,
      pages: 5,
      itemcount: 10,
      type: null,
      archive: false,
      articleId: null,
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
  beforeMount() {
    this.articleId = this.$route.query.id;
    this.getCategories();
  },
  watch: {
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        this.loaded = false;
        this.articleId = this.$route.query.id;
        const type = val.params.type;
        // console.log(type);
        if (type !== undefined) {
          const checkType = this.types.filter((value) => {
            return value.slug == type;
          });
          if (checkType.length != 0) {
            this.type = checkType[0];
            this.getArticles();
          }
        } else {
          this.type = null;
          this.getArticles();
        }
      },
      deep: true,
    },
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
    setPage(page) {
      this.page = page;
      this.getArticles();
    },
    setPageFunction(number) {
      if (number == -1) {
        if (this.page > 1) {
          this.page += number;
          this.getArticles();
        }
      } else {
        if (this.page < this.pages) {
          this.page += number;
          this.getArticles();
        }
      }
    },
    async getCategories() {
      // const res = await fetch(process.env.VUE_APP_API_URL + `/categories`);
      const res = await fetch(
        "        https://strapi.becep.sk/api" + `/categories`
      );
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
        // process.env.VUE_APP_API_URL +
        "https://strapi.becep.sk/api" +
          `/articles?populate[0]=categories&populate[1]=titleImage&populate[2]=photoGallery.images&sort=datetime:desc&filters[$or][0][archive][$eq]=false&filters[$or][1][archive][$null]=true${
            this.type
              ? "&filters[categories][name][$contains]=" + this.type.value
              : ""
          }&pagination[start]=${
            this.page == 1 ? 0 : (this.page - 2) * 9 + 10
          }&pagination[limit]=${this.page == 1 ? 10 : 9}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.articles = data.data;
          this.itemcount = data.meta.pagination.total;
          this.pages =
            data.meta.total <= 10
              ? 1
              : Math.ceil((data.meta.pagination.total - 10) / 9) + 1;
          // console.log(Math.ceil((data.meta.pagination.total - 10) / 9));
          // console.log(data.data);
          this.loaded = true;
        })

        .catch
        // catch any errors
        // that may arise
        ();
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
      return `/${
        this.types.find(
          (t) => t.id === article.attributes.categories.data[0].id
        )?.slug
      }?id=${article.id}&name=${this.toNormalForm(article.attributes.name)}`;
    },
  },

  mounted() {
    const type = this.$route.params.type;
    // console.log(type);
    if (type !== undefined) {
      const checkType = this.types.filter((value) => {
        return value.slug == type;
      });
      if (checkType.length != 0) {
        this.type = checkType[0];
        this.getArticles();
      }
    } else {
      this.getArticles();
    }
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
/* ul,
ol {
  list-style: none;
} */
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
