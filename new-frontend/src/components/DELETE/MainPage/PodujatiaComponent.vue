<template>
  <div class="govuk-width-container">
    <div
      class="govuk-main-wrapper"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* min-height: 968px; */
      "
    >
      <h1 class="govuk-heading-l">
        {{ vision ? "" : "Pozvánky na podujatia" }}
      </h1>
      <LoadingSpin v-if="!loaded"></LoadingSpin>

      <div v-if="loaded && articles.length > 0">
        <div
          v-for="article in page == 1 && !vision
            ? articles.slice(0, 3)
            : articles"
          :key="article.id"
          class="idsk-card idsk-card-secondary-horizontal"
        >
          <router-link
            :to="this.$route.path + getCrazyUrl(article)"
            :title="
              'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
              article.attributes.name
            "
          >
            <img
              class="idsk-card-img idsk-card-img-secondary-horizontal item-img"
              style="object-fit: cover"
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

          <div
            class="idsk-card-content idsk-card-content-secondary-horizontal text-box"
          >
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

            <div class="idsk-heading idsk-heading-secondary-horizontal">
              <router-link
                :to="this.$route.path + getCrazyUrl(article)"
                :title="
                  'Po kliknutií sa otvorí v tomto okne článok s názvom ' +
                  article.attributes.name
                "
                class="idsk-card-title govuk-link"
              >
                {{ article.attributes.name }}</router-link
              >
            </div>

            <p class="idsk-body idsk-body-secondary-horizontal">
              {{ article.attributes.description.substring(0, 270) }} ...
            </p>
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
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 8px;
        "
      >
        <button
          type="button"
          class="idsk-button idsk-header-web__main--login-loginbtn"
          data-module="idsk-button"
        >
          Ďalšie podujatia
        </button>
      </div>

      <!-- <div

      >
        <router-link
          style="margin: auto; font-size: 19px"
          class="govuk-link-custom"
          title="Po kliknutí sa otvorí stránka s ďalšími aktualitami."
          :to="vision ? '/aktuality/vizia-nula' : '/aktuality'"
          >Ďalšie podujatia</router-link
        >
      </div> -->
    </div>
  </div>
</template>
<script>
import LoadingSpin from "@/components/Loader";
export default {
  name: "PodujatiaComponent",
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
      return `/${
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
      //   this.articles = [];
      //   this.loaded = false;
      //   fetch(
      //     process.env.VUE_APP_API_URL +
      //       `/articles?populate[0]=categories&populate[1]=titleImage&populate[2]=photoGallery.images&sort=datetime:desc&filters[$or][0][archive][$eq]=false&filters[$or][1][archive][$null]=true&pagination[start]=0&pagination[limit]=4${
      //         this.vision
      //           ? "&filters[categories][name][$contains]=Vízia nula"
      //           : ""
      //       }`
      //   )
      //     .then((response) => response.json())
      //     .then((data) => {
      //       this.articles = data.data;
      //       this.loaded = true;
      //       this.itemcount = data.meta.pagination.total;

      //       // console.log(Math.ceil((data.meta.pagination.total - 10) / 9));
      //       // console.log(data.data);
      //     })

      //     .catch
      //     // catch any errors
      //     // that may arise
      //     ();
      this.articles = [
        {
          id: 293,
          attributes: {
            name: "Exkurzia v Jednotnom centre riadenia dopravy",
            body: "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou vo štvrtok 28. 7. 2022 exkurziu do Jednotného centra riadenia dopravy v Bratislave. \n\n\nDeti sa zoznámili s fungovaním centra, prehliadli si vozidlá údržby ciest a ich znalosti z oblasti bezpečnosti cestnej premávky preveril krátky test. \n\n\nVeríme, že sa všetci účastníci budú na cestách cítiť bezpečnejšie aj vďaka reflexným prvkom, ktoré dostali. \n\n\nBECEP ďakuje zamestnancom NDS za spoluprácu a organizáciu zaujímavého programu.\n\n![DUK 1](https:/uploads/DUK_1_1808263e51.jpg)",
            datetime: "2022-08-01T22:00:00.000Z",
            description:
              "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou",
            archive: false,
            createdAt: "2022-08-09T15:04:52.733Z",
            updatedAt: "2022-08-09T15:04:56.852Z",
            publishedAt: "2022-08-09T15:04:56.838Z",
            categories: {
              data: [
                {
                  id: 9,
                  attributes: {
                    name: "Deti",
                    createdAt: "2022-06-01T09:41:08.701Z",
                    updatedAt: "2022-06-01T09:41:08.701Z",
                  },
                },
              ],
            },
            titleImage: {
              data: {
                id: 1285,
                attributes: {
                  name: "DUK 1.jpg",
                  alternativeText: "DUK 1.jpg",
                  caption: "DUK 1.jpg",
                  width: 2048,
                  height: 1364,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "/uploads/large_DUK_1_1808263e51.jpg",
                      hash: "large_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "large_DUK 1.jpg",
                      path: null,
                      size: 122.61,
                      width: 1000,
                      height: 666,
                    },
                    small: {
                      ext: ".jpg",
                      url: "/uploads/small_DUK_1_1808263e51.jpg",
                      hash: "small_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "small_DUK 1.jpg",
                      path: null,
                      size: 41.21,
                      width: 500,
                      height: 333,
                    },
                    medium: {
                      ext: ".jpg",
                      url: "/uploads/medium_DUK_1_1808263e51.jpg",
                      hash: "medium_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "medium_DUK 1.jpg",
                      path: null,
                      size: 78.2,
                      width: 750,
                      height: 500,
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "/uploads/thumbnail_DUK_1_1808263e51.jpg",
                      hash: "thumbnail_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "thumbnail_DUK 1.jpg",
                      path: null,
                      size: 11.96,
                      width: 234,
                      height: 156,
                    },
                  },
                  hash: "DUK_1_1808263e51",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 260.9,
                  url: "https://picsum.photos/200/300/?blur",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-08-09T15:00:28.365Z",
                  updatedAt: "2022-08-09T15:00:28.365Z",
                },
              },
            },
            photoGallery: [
              {
                id: 289,
                images: {
                  data: [
                    {
                      id: 1287,
                      attributes: {
                        name: "DUK 2.jpg",
                        alternativeText: "DUK 2.jpg",
                        caption: "DUK 2.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_2_10db06ffd1.jpg",
                            hash: "large_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "large_DUK 2.jpg",
                            path: null,
                            size: 152.81,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_2_10db06ffd1.jpg",
                            hash: "small_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "small_DUK 2.jpg",
                            path: null,
                            size: 44.74,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_2_10db06ffd1.jpg",
                            hash: "medium_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "medium_DUK 2.jpg",
                            path: null,
                            size: 91.48,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_2_10db06ffd1.jpg",
                            hash: "thumbnail_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 2.jpg",
                            path: null,
                            size: 12.18,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_2_10db06ffd1",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 359.55,
                        url: "/uploads/DUK_2_10db06ffd1.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.522Z",
                        updatedAt: "2022-08-09T15:02:58.522Z",
                      },
                    },
                    {
                      id: 1288,
                      attributes: {
                        name: "DUK 3.jpg",
                        alternativeText: "DUK 3.jpg",
                        caption: "DUK 3.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_3_518778e841.jpg",
                            hash: "large_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "large_DUK 3.jpg",
                            path: null,
                            size: 145.82,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_3_518778e841.jpg",
                            hash: "small_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "small_DUK 3.jpg",
                            path: null,
                            size: 44.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_3_518778e841.jpg",
                            hash: "medium_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "medium_DUK 3.jpg",
                            path: null,
                            size: 89.24,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_3_518778e841.jpg",
                            hash: "thumbnail_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 3.jpg",
                            path: null,
                            size: 12.39,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_3_518778e841",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 332.81,
                        url: "/uploads/DUK_3_518778e841.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.768Z",
                        updatedAt: "2022-08-09T15:02:58.768Z",
                      },
                    },
                    {
                      id: 1286,
                      attributes: {
                        name: "DUK 4.jpg",
                        alternativeText: "DUK 4.jpg",
                        caption: "DUK 4.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_4_750c104556.jpg",
                            hash: "large_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "large_DUK 4.jpg",
                            path: null,
                            size: 93.41,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_4_750c104556.jpg",
                            hash: "small_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "small_DUK 4.jpg",
                            path: null,
                            size: 32.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_4_750c104556.jpg",
                            hash: "medium_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "medium_DUK 4.jpg",
                            path: null,
                            size: 60.36,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_4_750c104556.jpg",
                            hash: "thumbnail_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 4.jpg",
                            path: null,
                            size: 9.67,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_4_750c104556",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 188.6,
                        url: "/uploads/DUK_4_750c104556.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.442Z",
                        updatedAt: "2022-08-09T15:02:58.442Z",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 294,
          attributes: {
            name: "Exkurzia v Jednotnom centre riadenia dopravy",
            body: "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou vo štvrtok 28. 7. 2022 exkurziu do Jednotného centra riadenia dopravy v Bratislave. \n\n\nDeti sa zoznámili s fungovaním centra, prehliadli si vozidlá údržby ciest a ich znalosti z oblasti bezpečnosti cestnej premávky preveril krátky test. \n\n\nVeríme, že sa všetci účastníci budú na cestách cítiť bezpečnejšie aj vďaka reflexným prvkom, ktoré dostali. \n\n\nBECEP ďakuje zamestnancom NDS za spoluprácu a organizáciu zaujímavého programu.\n\n![DUK 1](https:/uploads/DUK_1_1808263e51.jpg)",
            datetime: "2022-08-01T22:00:00.000Z",
            description:
              "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou",
            archive: false,
            createdAt: "2022-08-09T15:04:52.733Z",
            updatedAt: "2022-08-09T15:04:56.852Z",
            publishedAt: "2022-08-09T15:04:56.838Z",
            categories: {
              data: [
                {
                  id: 9,
                  attributes: {
                    name: "Deti",
                    createdAt: "2022-06-01T09:41:08.701Z",
                    updatedAt: "2022-06-01T09:41:08.701Z",
                  },
                },
              ],
            },
            titleImage: {
              data: {
                id: 1285,
                attributes: {
                  name: "DUK 1.jpg",
                  alternativeText: "DUK 1.jpg",
                  caption: "DUK 1.jpg",
                  width: 2048,
                  height: 1364,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "/uploads/large_DUK_1_1808263e51.jpg",
                      hash: "large_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "large_DUK 1.jpg",
                      path: null,
                      size: 122.61,
                      width: 1000,
                      height: 666,
                    },
                    small: {
                      ext: ".jpg",
                      url: "/uploads/small_DUK_1_1808263e51.jpg",
                      hash: "small_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "small_DUK 1.jpg",
                      path: null,
                      size: 41.21,
                      width: 500,
                      height: 333,
                    },
                    medium: {
                      ext: ".jpg",
                      url: "/uploads/medium_DUK_1_1808263e51.jpg",
                      hash: "medium_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "medium_DUK 1.jpg",
                      path: null,
                      size: 78.2,
                      width: 750,
                      height: 500,
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "/uploads/thumbnail_DUK_1_1808263e51.jpg",
                      hash: "thumbnail_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "thumbnail_DUK 1.jpg",
                      path: null,
                      size: 11.96,
                      width: 234,
                      height: 156,
                    },
                  },
                  hash: "DUK_1_1808263e51",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 260.9,
                  url: "https://picsum.photos/200/300/?blur",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-08-09T15:00:28.365Z",
                  updatedAt: "2022-08-09T15:00:28.365Z",
                },
              },
            },
            photoGallery: [
              {
                id: 289,
                images: {
                  data: [
                    {
                      id: 1287,
                      attributes: {
                        name: "DUK 2.jpg",
                        alternativeText: "DUK 2.jpg",
                        caption: "DUK 2.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_2_10db06ffd1.jpg",
                            hash: "large_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "large_DUK 2.jpg",
                            path: null,
                            size: 152.81,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_2_10db06ffd1.jpg",
                            hash: "small_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "small_DUK 2.jpg",
                            path: null,
                            size: 44.74,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_2_10db06ffd1.jpg",
                            hash: "medium_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "medium_DUK 2.jpg",
                            path: null,
                            size: 91.48,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_2_10db06ffd1.jpg",
                            hash: "thumbnail_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 2.jpg",
                            path: null,
                            size: 12.18,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_2_10db06ffd1",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 359.55,
                        url: "/uploads/DUK_2_10db06ffd1.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.522Z",
                        updatedAt: "2022-08-09T15:02:58.522Z",
                      },
                    },
                    {
                      id: 1288,
                      attributes: {
                        name: "DUK 3.jpg",
                        alternativeText: "DUK 3.jpg",
                        caption: "DUK 3.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_3_518778e841.jpg",
                            hash: "large_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "large_DUK 3.jpg",
                            path: null,
                            size: 145.82,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_3_518778e841.jpg",
                            hash: "small_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "small_DUK 3.jpg",
                            path: null,
                            size: 44.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_3_518778e841.jpg",
                            hash: "medium_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "medium_DUK 3.jpg",
                            path: null,
                            size: 89.24,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_3_518778e841.jpg",
                            hash: "thumbnail_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 3.jpg",
                            path: null,
                            size: 12.39,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_3_518778e841",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 332.81,
                        url: "/uploads/DUK_3_518778e841.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.768Z",
                        updatedAt: "2022-08-09T15:02:58.768Z",
                      },
                    },
                    {
                      id: 1286,
                      attributes: {
                        name: "DUK 4.jpg",
                        alternativeText: "DUK 4.jpg",
                        caption: "DUK 4.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_4_750c104556.jpg",
                            hash: "large_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "large_DUK 4.jpg",
                            path: null,
                            size: 93.41,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_4_750c104556.jpg",
                            hash: "small_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "small_DUK 4.jpg",
                            path: null,
                            size: 32.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_4_750c104556.jpg",
                            hash: "medium_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "medium_DUK 4.jpg",
                            path: null,
                            size: 60.36,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_4_750c104556.jpg",
                            hash: "thumbnail_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 4.jpg",
                            path: null,
                            size: 9.67,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_4_750c104556",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 188.6,
                        url: "/uploads/DUK_4_750c104556.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.442Z",
                        updatedAt: "2022-08-09T15:02:58.442Z",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 295,
          attributes: {
            name: "Exkurzia v Jednotnom centre riadenia dopravy",
            body: "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou vo štvrtok 28. 7. 2022 exkurziu do Jednotného centra riadenia dopravy v Bratislave. \n\n\nDeti sa zoznámili s fungovaním centra, prehliadli si vozidlá údržby ciest a ich znalosti z oblasti bezpečnosti cestnej premávky preveril krátky test. \n\n\nVeríme, že sa všetci účastníci budú na cestách cítiť bezpečnejšie aj vďaka reflexným prvkom, ktoré dostali. \n\n\nBECEP ďakuje zamestnancom NDS za spoluprácu a organizáciu zaujímavého programu.\n\n![DUK 1](https:/uploads/DUK_1_1808263e51.jpg)",
            datetime: "2022-08-01T22:00:00.000Z",
            description:
              "BECEP ako partner jubilejného 20. ročníka Detskej Univerzity Komenského pripravil v spolupráci s Národnou diaľničnou spoločnosťou",
            archive: false,
            createdAt: "2022-08-09T15:04:52.733Z",
            updatedAt: "2022-08-09T15:04:56.852Z",
            publishedAt: "2022-08-09T15:04:56.838Z",
            categories: {
              data: [
                {
                  id: 9,
                  attributes: {
                    name: "Deti",
                    createdAt: "2022-06-01T09:41:08.701Z",
                    updatedAt: "2022-06-01T09:41:08.701Z",
                  },
                },
              ],
            },
            titleImage: {
              data: {
                id: 1285,
                attributes: {
                  name: "DUK 1.jpg",
                  alternativeText: "DUK 1.jpg",
                  caption: "DUK 1.jpg",
                  width: 2048,
                  height: 1364,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "/uploads/large_DUK_1_1808263e51.jpg",
                      hash: "large_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "large_DUK 1.jpg",
                      path: null,
                      size: 122.61,
                      width: 1000,
                      height: 666,
                    },
                    small: {
                      ext: ".jpg",
                      url: "/uploads/small_DUK_1_1808263e51.jpg",
                      hash: "small_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "small_DUK 1.jpg",
                      path: null,
                      size: 41.21,
                      width: 500,
                      height: 333,
                    },
                    medium: {
                      ext: ".jpg",
                      url: "/uploads/medium_DUK_1_1808263e51.jpg",
                      hash: "medium_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "medium_DUK 1.jpg",
                      path: null,
                      size: 78.2,
                      width: 750,
                      height: 500,
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "/uploads/thumbnail_DUK_1_1808263e51.jpg",
                      hash: "thumbnail_DUK_1_1808263e51",
                      mime: "image/jpeg",
                      name: "thumbnail_DUK 1.jpg",
                      path: null,
                      size: 11.96,
                      width: 234,
                      height: 156,
                    },
                  },
                  hash: "DUK_1_1808263e51",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 260.9,
                  url: "https://picsum.photos/200/300/?blur",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-08-09T15:00:28.365Z",
                  updatedAt: "2022-08-09T15:00:28.365Z",
                },
              },
            },
            photoGallery: [
              {
                id: 289,
                images: {
                  data: [
                    {
                      id: 1287,
                      attributes: {
                        name: "DUK 2.jpg",
                        alternativeText: "DUK 2.jpg",
                        caption: "DUK 2.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_2_10db06ffd1.jpg",
                            hash: "large_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "large_DUK 2.jpg",
                            path: null,
                            size: 152.81,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_2_10db06ffd1.jpg",
                            hash: "small_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "small_DUK 2.jpg",
                            path: null,
                            size: 44.74,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_2_10db06ffd1.jpg",
                            hash: "medium_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "medium_DUK 2.jpg",
                            path: null,
                            size: 91.48,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_2_10db06ffd1.jpg",
                            hash: "thumbnail_DUK_2_10db06ffd1",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 2.jpg",
                            path: null,
                            size: 12.18,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_2_10db06ffd1",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 359.55,
                        url: "/uploads/DUK_2_10db06ffd1.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.522Z",
                        updatedAt: "2022-08-09T15:02:58.522Z",
                      },
                    },
                    {
                      id: 1288,
                      attributes: {
                        name: "DUK 3.jpg",
                        alternativeText: "DUK 3.jpg",
                        caption: "DUK 3.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_3_518778e841.jpg",
                            hash: "large_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "large_DUK 3.jpg",
                            path: null,
                            size: 145.82,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_3_518778e841.jpg",
                            hash: "small_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "small_DUK 3.jpg",
                            path: null,
                            size: 44.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_3_518778e841.jpg",
                            hash: "medium_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "medium_DUK 3.jpg",
                            path: null,
                            size: 89.24,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_3_518778e841.jpg",
                            hash: "thumbnail_DUK_3_518778e841",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 3.jpg",
                            path: null,
                            size: 12.39,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_3_518778e841",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 332.81,
                        url: "/uploads/DUK_3_518778e841.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.768Z",
                        updatedAt: "2022-08-09T15:02:58.768Z",
                      },
                    },
                    {
                      id: 1286,
                      attributes: {
                        name: "DUK 4.jpg",
                        alternativeText: "DUK 4.jpg",
                        caption: "DUK 4.jpg",
                        width: 2048,
                        height: 1364,
                        formats: {
                          large: {
                            ext: ".jpg",
                            url: "/uploads/large_DUK_4_750c104556.jpg",
                            hash: "large_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "large_DUK 4.jpg",
                            path: null,
                            size: 93.41,
                            width: 1000,
                            height: 666,
                          },
                          small: {
                            ext: ".jpg",
                            url: "/uploads/small_DUK_4_750c104556.jpg",
                            hash: "small_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "small_DUK 4.jpg",
                            path: null,
                            size: 32.55,
                            width: 500,
                            height: 333,
                          },
                          medium: {
                            ext: ".jpg",
                            url: "/uploads/medium_DUK_4_750c104556.jpg",
                            hash: "medium_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "medium_DUK 4.jpg",
                            path: null,
                            size: 60.36,
                            width: 750,
                            height: 500,
                          },
                          thumbnail: {
                            ext: ".jpg",
                            url: "/uploads/thumbnail_DUK_4_750c104556.jpg",
                            hash: "thumbnail_DUK_4_750c104556",
                            mime: "image/jpeg",
                            name: "thumbnail_DUK 4.jpg",
                            path: null,
                            size: 9.67,
                            width: 234,
                            height: 156,
                          },
                        },
                        hash: "DUK_4_750c104556",
                        ext: ".jpg",
                        mime: "image/jpeg",
                        size: 188.6,
                        url: "/uploads/DUK_4_750c104556.jpg",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-09T15:02:58.442Z",
                        updatedAt: "2022-08-09T15:02:58.442Z",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ];

      this.loaded = true;

      console.log(".>>>>", this.articles);
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

.text-box {
  min-height: 195px !important;
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
