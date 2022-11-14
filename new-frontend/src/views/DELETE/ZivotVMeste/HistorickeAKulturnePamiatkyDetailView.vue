<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">{{ detailData.title }}</h1>
      <div class="image_box">
        <img
          class="image"
          :src="require('@/assets/sights/' + detailData.sourceTitle)"
          :alt="detailData.title"
        />
      </div>
      <div v-html="detailData.textHtml"></div>
      <ArticleGallerySlider />
    </div>
  </div>
</template>

<script>
import { sights } from "@/store/sights";
import { useMeta } from "vue-meta";
import ArticleGallerySlider from "@/components/ArticleGallerySlider";

export default {
  name: "HistorickeAKulturnePamiatkyDetailView",
  data() {
    return {};
  },
  setup() {
    useMeta({
      title: "Domov",
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
  components: { ArticleGallerySlider },
  watch: {
    "$route.params.slug": {
      handler: function (slug) {
        if (slug) this.getData(slug);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async getData(slug) {
      this.detailData = sights.find((sight) => sight.slug === slug);
    },

    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
  mounted() {
    window.scrollTo(0, -30);
    const slug = this.$route.params.slug;
    if (slug) this.getData(slug);
  },
};
</script>
<style lang="scss" scoped></style>
