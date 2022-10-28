<template>
  <div>
    <div class="govuk-width-container">
      <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
        <h1 class="govuk-heading-l">Videá</h1>
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
                  <div
                    class="video-container"
                    :innerHTML="article.attributes.iframe"
                  ></div>

                  <div class="idsk-card-content idsk-card-content-simple">
                    <div class="idsk-heading idsk-heading-simple">
                      <a
                        href="#"
                        class="idsk-card-title govuk-link"
                        :title="article.attributes.name"
                        >{{ article.attributes.name }}</a
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
                  falseFunction;
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
                  falseFunction;
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
                  falseFunction;
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
</template>
<script>
import LoadingSpin from "@/components/Loader";
import { useMeta } from "vue-meta";

export default {
  name: "GalleryView",
  setup() {
    useMeta({
      title: "Videá",
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
        this.getArticles();
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
          `/videos?sort[0]=datetime%3Adesc&pagination[start]=${
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
  },

  mounted() {
    this.getArticles();
  },
};
</script>
<style>
.video-container {
  position: relative !important;
  width: 100% !important;
  padding-bottom: 56.25% !important;
  overflow: hidden !important;
}
.video-container iframe {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
}
#embedplayer {
  width: 100% !important;
  height: 100% !important;
}
html > body > div > div > video {
  width: 100% !important;
  height: 100% !important;
}
html#facebook.svg .archive-grid {
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
ul,
ol {
  list-style: none;
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
