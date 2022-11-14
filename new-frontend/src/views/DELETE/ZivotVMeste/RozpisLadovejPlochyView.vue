<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Rozpis ľadovej plochy a tréningov</h1>

      <div class="image_box">
        <div class="title-wrap">
          <div class="title-box">24.12.-30.12.2018</div>
          <div class="title-box">ROZPIS ĽADOVEJ PLOCHY</div>
          <div class="title-box">52.TÝŽDEŇ</div>
        </div>
        <img
          class="image"
          src="@/assets/rozpis-1.jpg"
          alt="Rozdelenie sektorov"
        />
      </div>

      <div class="image_box">
        <div class="title-wrap title-wrap-center">
          <div class="title-box">
            ROZPIS TRÉNINGOV NA MESIAC AUGUST OD 13.8-17.8.2018
          </div>
        </div>
        <img
          class="image"
          src="@/assets/rozpis-2.jpg"
          alt="Rozdelenie sektorov"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "RozpisLadovejPlochyView",
  data() {
    return {};
  },
  components: {},
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

  mounted() {},
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped>
.title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #024497;
  border-radius: 4px 4px 0px 0px;
  padding: 0px 20px;
}

.title-wrap-center {
  justify-content: center;
}
.title-box {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
</style>
