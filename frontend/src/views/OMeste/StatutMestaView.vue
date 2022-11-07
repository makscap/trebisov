<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Štatút mesta</h1>
      <p>
        Štatút mesta Trebišov upravuje v súlade so všeobecne záväznými právnymi
        predpismi najmä postavenie a pôsobnosť mesta, práva a povinnosti
        obyvateľov mesta, základné zásady hospodárenia a financovania,
        nakladania s majetkom mesta, ďalej postavenie a pôsobnosť mestského
        zastupiteľstva, primátora a ďalších orgánov mestskej samosprávy, ich
        vnútornú štruktúru, deľbu práce medzi nimi, formy a metódy ich práce,
        rieši tiež širšie vzťahy mesta, symboly mesta, udeľovanie čestného
        občianstva, cien mesta a vyznamenaní. Štatút mesta Trebišov je základným
        normatívno-právnym a organizačným predpisom mesta. <br />
        <br />Štatút mesta Trebišov bol schválený Mestským zastupiteľstvom v
        Trebišove dňa 11.01.2007 uznesením č. 7/2007. <br /><br />Dodatok č. 1
        schválilo Mestské zastupiteľstvo v Trebišove na zasadnutí dňa 30.12.2013
        uznesením č. 114/2013. <br />
        <br />Dodatok č. 2 schválilo Mestské zastupiteľstvo v Trebišove na
        zasadnutí dňa 5.10.2015 uznesením č. 92/2015. <br />
        <br />Dodatok č. 3 schválilo Mestské zastupiteľstvo v Trebišove na
        zasadnutí dňa 19.12.2018 uznesením č. 23/2018.
      </p>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "../../components/LinksAndSizeComponent.vue";

export default {
  name: "StatutMestaView",
  data() {
    return {
      files: [
        {
          name: "Štatút mesta Trebišov",
          size: "502.63 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
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
  components: { LinksAndSizeComponent },
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
  margin-bottom: 50px;
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
</style>
