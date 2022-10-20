<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Štatút mesta</h2>

    <p class="content">
      Štatút mesta Trebišov upravuje v súlade so všeobecne záväznými právnymi
      predpismi najmä postavenie a pôsobnosť mesta, práva a povinnosti
      obyvateľov mesta, základné zásady hospodárenia a financovania, nakladania
      s majetkom mesta, ďalej postavenie a pôsobnosť mestského zastupiteľstva,
      primátora a ďalších orgánov mestskej samosprávy, ich vnútornú štruktúru,
      deľbu práce medzi nimi, formy a metódy ich práce, rieši tiež širšie vzťahy
      mesta, symboly mesta, udeľovanie čestného občianstva, cien mesta a
      vyznamenaní. Štatút mesta Trebišov je základným normatívno-právnym a
      organizačným predpisom mesta. <br />
      <br />Štatút mesta Trebišov bol schválený Mestským zastupiteľstvom v
      Trebišove dňa 11.01.2007 uznesením č. 7/2007. <br /><br />Dodatok č. 1
      schválilo Mestské zastupiteľstvo v Trebišove na zasadnutí dňa 30.12.2013
      uznesením č. 114/2013. <br />
      <br />Dodatok č. 2 schválilo Mestské zastupiteľstvo v Trebišove na
      zasadnutí dňa 5.10.2015 uznesením č. 92/2015. <br />
      <br />Dodatok č. 3 schválilo Mestské zastupiteľstvo v Trebišove na
      zasadnutí dňa 19.12.2018 uznesením č. 23/2018.
    </p>
    <a
      :href="require('@/assets/pdf/test.pdf')"
      target="_blank"
      title="Štatút mesta Trebišov"
      class="govuk-link-custom"
      >Štatút mesta Trebišov </a
    ><span class="no-link">(PDF,502.63 kB)</span>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
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

  mounted() {},
  components: {},
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
.main-box {
  width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.hero-img {
  width: 100% !important;
}

.box {
  margin-bottom: 35px;
  margin-top: 30px;
}

.box img {
  height: 100%;
}

.content {
}
</style>
