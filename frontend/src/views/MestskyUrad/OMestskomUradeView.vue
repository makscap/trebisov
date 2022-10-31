<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Mestský úrad</h2>
    <MapComponent :dataMap="dataMap" />

    <div class="content">
      <div class="">
        <h4 class="label">Adresa</h4>

        <div>1</div>
        <div>2</div>
      </div>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <h4 class="label">Úlohy primátora mesta</h4>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import MapComponent from "../../components/MapComponent.vue";

export default {
  name: "MestskeUradView",
  data() {
    return {
      dataMap: {
        name: "Mestská polícia Trebišov",
        street: "M. R. Štefánika 862/204",
        city: "075 25 Trebišov",
        text: "Prízemie v budove Mestského úradu v Trebišove",
      },
      subpages: [
        {
          title: "O mestskom úrade",
          route: "/o-mestskom-urade",
        },
        {
          title: "Prednosta",
          route: "/",
        },
        {
          title: "Oddelenia",
          route: "/",
        },
        { title: "Strediská", route: "/" },
        { title: "Oznamy", route: "/" },
        { title: "Oznamy o úmrtiach", route: "/" },
        { title: "Strategické dokumenty", route: "/" },
        { title: "Všeobecne záväzné nariadenia", route: "/" },
        { title: "Cenník", route: "/" },
      ],
    };
  },
  components: { MapComponent },
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
.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
</style>
