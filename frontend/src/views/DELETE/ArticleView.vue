<template>
  <div class="govuk-width-container">
    <LoadingSpin v-if="!loaded"></LoadingSpin>
    <div v-else style="padding-bottom: 50px">
      <span class="govuk-caption-xl idsk-article-pattern__subtitle">{{
        title
      }}</span>
      <h1 class="govuk-heading-l">{{ article.name }}</h1>
      <p class="govuk-body-s idsk-article-pattern__text-silver--down">
        Publikované {{ formatDate(new Date(article.publishedAt)) }}
      </p>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <Markdown :source="article.body" :html="true" class="markdown" />
      <!-- <ArticleGallerySlider
        v-if="
          article.photoGallery[0] &&
          article.photoGallery[0].images.data.length > 0
        "
        :images="
          article.photoGallery[0] &&
          article.photoGallery[0].images.data.length > 0
            ? article.photoGallery[0].images.data
            : []
        "
      ></ArticleGallerySlider> -->

      <!--      <h3 class="govuk-heading-s black">Zdieľať tento článok:</h3>-->
      <!--      <div-->
      <!--        class="ss-box"-->
      <!--        data-ss-social="facebook"-->
      <!--        v-if="pathname"-->
      <!--        :data-ss-link="pathname"-->
      <!--      ></div>-->
      <!--      <hr-->
      <!--        class="idsk-crossroad-line"-->
      <!--        style="background-color: black"-->
      <!--        aria-hidden="true"-->
      <!--      />-->
      <h3 class="govuk-heading-s black">Súvisiace témy:</h3>
      <div v-for="(similar, index) in similarArticles" :key="index">
        <router-link :to="getCrazyUrl(similar)" class="govuk-link-custom">
          {{ similar.attributes.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
import LoadingSpin from "@/components/Loader";
// import ArticleGallerySlider from "@/components/ArticleGallerySlider";
import { useMeta } from "vue-meta";

export default {
  data() {
    return {
      articleId: -1,
      article: "",
      similarArticles: [],
      loaded: false,
      pathname: "",
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
  props: {
    title: String,
  },
  setup() {
    useMeta({
      title: "Aktualita",
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
    Markdown,
    LoadingSpin,
    // ArticleGallerySlider,
  },
  beforeMount() {
    this.articleId = this.$route.query.id;
    this.getCategories();
    this.getArticle();
  },
  mounted() {
    console.log(window.location.origin + window.location.pathname);
    this.pathname = window.location.origin + window.location.pathname;
  },
  methods: {
    async getArticle() {
      const res = await fetch(
        process.env.VUE_APP_API_URL +
          `/articles/${this.articleId}/?populate=deep`
      );
      const jsonData = await res.json();
      this.article = jsonData.data.attributes;
      if (this.article.photoGallery.length !== 0)
        this.photos = this.article.photoGallery[0].images.data;
      this.loaded = true;
      await this.getSimilarArticles();
    },
    async getCategories() {
      // console.log("toto su typy before", this.types);
      const res = await fetch(process.env.VUE_APP_API_URL + `/categories`);
      const jsonData = await res.json();
      this.types = this.types.map((type) => {
        const data = jsonData.data.find((d) => {
          return d.attributes.name === type.value;
        });
        return { slug: type.slug, value: type.value, id: data.id };
      });
    },
    async getSimilarArticles() {
      const res = await fetch(
        process.env.VUE_APP_API_URL +
          "/articles/?populate[0]=categories&populate[1]=titleImage&populate[2]=photoGallery.images&sort[0]=datetime%3Adesc"
      );
      const jsonData = await res.json();
      const filter = jsonData.data
        .sort((a, b) => b.id - a.id)
        .filter((e) => e.id !== this.articleId)
        .slice(0, 2);
      if (filter) this.similarArticles = filter;
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },
    formatDate(date) {
      return [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join(".");
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
    printLog(value) {
      console.log("log", value);
    },
  },
  watch: {
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        this.loaded = false;
        this.articleId = this.$route.query.id;
        this.getCategories();
        this.getArticle();
      },
      deep: true,
    },
  },
};
</script>

<style>
.markdown img {
  width: 100% !important;
  object-fit: contain !important;
}
</style>
