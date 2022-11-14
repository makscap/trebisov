<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Okresné riaditeľstvo policajného zboru v Trebišove
      </h1>
      <MapComponent :dataMap="dataMap" />

      <ul class="m-0 p-0 list-none mt-30 mb-30">
        <li
          v-for="(person, i) in personsData"
          :key="i"
          class="item pb-30 pt-30"
        >
          <div class="bold">{{ person.name }}</div>
          <div>{{ person.position }}</div>
        </li>
      </ul>

      <SubPagesMenuVertical :subpages="subpages" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import MapComponent from "@/components/MapComponent.vue";
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";

export default {
  name: "OkresneRiaditelstvoView",
  data() {
    return {
      dataMap: {
        name: "Okresné riaditeľstvo PZ v Trebišove",
        floor: "",
        street: "M. R. Štefánika 2319/180",
        city: "Trebišov",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.720605213585!2d21.71765875817752!3d48.62053851787241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac9adf1db69%3A0xd6e1190baa0f2517!2zRG9wcmF2bsO9IGluxaFwZWt0b3LDoXQgT1IgUFo!5e0!3m2!1sru!2ssk!4v1668002928915!5m2!1sru!2ssk",
      },
      personsData: [
        {
          name: "plk. JUDr. Radoslav Fedor",
          position: "Riaditeľ okresného riaditeľstva",
        },
        {
          name: "plk. Ing. Imrich Jurko",
          position: "Zástupca riaditeľa pre výkon služby",
        },
        {
          name: "plk. Ing. Marcel Hurčík",
          position: "Riaditeľ odboru kriminálnej polície",
        },
        {
          name: "mjr. Ing. Martin Telepovský",
          position: "Riaditeľ okresného dopravného inšpektorátu",
        },
        {
          name: "pplk. Ing. Jozef Matys",
          position: "Riaditeľ odboru poriadkovej polície",
        },
      ],
      subpages: [
        {
          title: "Stránkové hodiny",
          route: "/strankove-hodiny",
        },
        {
          title: "Rady a informácie",
          route: "/",
        },
        {
          title: "Krimi správy",
          route: "/krimi-spravy",
        },
        {
          title: "Pátranie",
          route: "/patranie",
        },
        {
          title: "Kontakty",
          route: "/kontakty",
        },
      ],
    };
  },
  components: { MapComponent, SubPagesMenuVertical },
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
.item {
  border-bottom: 1px solid #bfc1c3;
}

.item:first-child {
  border-top: 1px solid #bfc1c3;
}
</style>
