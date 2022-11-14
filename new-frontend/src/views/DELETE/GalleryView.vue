<template>
  <div>
    <div v-if="!articleId">
      <div class="govuk-width-container">
        <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
          <h1 class="govuk-heading-l">Galéria</h1>
          <LoadingSpin v-if="!loaded"></LoadingSpin>
          <div v-if="loaded && articles.length > 0">
            <div>
              <div v-if="loaded" class="govuk-grid-row">
                <div
                  v-for="article in page == 1 ? articles : articles"
                  :key="article.id"
                  class="govuk-grid-column-one-half"
                >
                  <div class="idsk-card idsk-card-simple">
                    <router-link
                      :to="this.$route.path + getCrazyUrl(article)"
                      :title="article.attributes.name"
                    >
                      <img
                        class="idsk-card-img idsk-card-img-simple item-img"
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

                    <div class="idsk-card-content idsk-card-content-simple">
                      <div class="idsk-card-meta-container">
                        <span class="idsk-card-meta idsk-card-meta-date"
                          ><a
                            href="#"
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

                      <div class="idsk-heading idsk-heading-simple">
                        <router-link
                          :to="this.$route.path + getCrazyUrl(article)"
                          :title="article.attributes.name"
                          class="idsk-card-title govuk-link"
                        >
                          {{ article.attributes.name }}</router-link
                        >
                      </div>
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
    </div>

    <ArticleView v-if="articleId" title="Aktualita" />
  </div>
</template>
<script>
import LoadingSpin from "@/components/Loader";
import ArticleView from "@/views/ArticleView.vue";
import { useMeta } from "vue-meta";

export default {
  name: "GalleryView",
  setup() {
    useMeta({
      title: "Galéria",
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
    LoadingSpin,
    ArticleView,
  },
  data() {
    return {
      articles: [],
      loaded: false,
      page: 1,
      pages: 5,
      itemcount: 6,
      type: null,
    };
  },
  watch: {
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        this.loaded = false;

        this.type = null;
        this.articleId = this.$route.query.id;
        if (this.articleId) {
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
    getArticles() {
      this.articles = [];
      this.loaded = false;

      fetch(
        process.env.VUE_APP_API_URL +
          `/articles?populate[0]=categories&populate[1]=titleImage&populate[2]=photoGallery.images&sort=datetime:desc&filters[photoGallery][id][$notNull]=true&pagination[start]=${
            (this.page - 1) * 6
          }&pagination[limit]=6`
      )
        .then((response) => response.json())
        .then((data) => {
          this.articles = data.data;
          this.itemcount = data.meta.pagination.total;
          console.log(data);
          this.pages =
            data.meta.total <= 6
              ? 1
              : Math.ceil(data.meta.pagination.total / 6);
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
      return `?id=${article.id}&name=${this.toNormalForm(
        article.attributes.name
      )}`;
    },
  },
  mounted() {
    this.articleId = this.$route.query.id;
    this.getArticles();
  },
};
</script>
<style lang="scss" scoped>
.archive-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 40px;
}
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
// ul,
// ol {
//   list-style: none;
// }
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
.idsk-card-content,
.idsk-card-content-secondary {
  min-height: 0 !important;
}

@media (min-width: 40.0625em) {
  .idsk-heading-basic-variant,
  .idsk-heading-simple {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.3157894737;
    min-height: 100px;
  }
}
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
@media (min-width: 40.0625em) {
  .idsk-card-simple {
    width: 100%;
    float: left;
  }
}
</style>
