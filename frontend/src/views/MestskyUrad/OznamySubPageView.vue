<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">TITLE !!!???</h2>

    <p>Publikované: 15.07.2022</p>
    <hr class="idsk-crossroad-line" aria-hidden="true" />
    <img class="card-img" src="../../assets/primator.jpg" alt="house" />

    <div class="content">
      <p class="text">
        V období od 14. júla do 31. decembra 2022 budú pracovníci Technických
        služieb mesta Trebišov a magistrátu navštevovať obyvateľov žijúcich v
        rodinných domoch v meste Trebišov za účelom bezplatného označenia nádob
        (110 alebo 120 litrových) na zber zmiešaného komunálneho odpadu
        elektronickým čipom a za účelom registrácie elektronického čipu v
        systéme evidencie odpadových nádob. Pri registrácii elektronického čipu
        je potrebné potvrdiť podpisom protokol o pridelení elektronického čipu.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OznamySubPageView",
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
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.card-img {
  width: 100% !important;
}

.text {
  margin-top: 30px;
}
</style>
