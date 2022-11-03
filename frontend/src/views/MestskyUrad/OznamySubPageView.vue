<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">{{ article.name }}</h1>
      <p class="date">Publikované: {{ article.date }}</p>
      <img
        class="card-img"
        :src="article.image ? article.image : require('@/assets/primator.jpg')"
        :alt="article.imageAlt ? article.imageAlt : 'placeholder'"
      />
      <p class="text">{{ article.text }}</p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OznamySubPageView",
  data() {
    return {
      article: {
        name: "Elektronické čipovanie nádob na zmesový komunálny odpad",
        date: "26.07.2022",
        url: "/1",
        text: "V období od 14. júla do 31. decembra 2022 budú pracovníci Technických služieb mesta Trebišov a magistrátu navštevovať obyvateľov žijúcich v rodinných domoch v meste Trebišov za účelom bezplatného označenia nádob (110 alebo 120 litrových) na zber zmiešaného komunálneho odpadu elektronickým čipom a za účelom registrácie elektronického čipu v systéme evidencie odpadových nádob. Pri registrácii elektronického čipu je potrebné potvrdiť podpisom protokol o pridelení elektronického čipu.",
        image: "",
        imageAlt: "Ad",
      },
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
.card-img {
  width: 100% !important;
}

.text {
  margin-top: 30px;
}

.date {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #bfc1c3;
}
</style>
