<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Doseparačné stredisko</h1>
      <p>
        Obyvatelia mesta Trebišov majú možnosť odovzdať vytriedené zložky
        komunálneho odpadu: papier, plasty a sklo v areáli Doseparačného
        strediska, Paričovská 703, Trebišov a to v pracovných dňoch (pondelok –
        piatok), v čase od 7.30 do 14.00 h.
      </p>
      <p>
        V prevádzke nie je možné odovzdať ostatné zložky komunálneho odpadu.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "DoseparacneStrediskoView",
  data() {
    return {
      contactsData: [
        {
          name: "Mgr. Marek Horovský",
          position: "referentka pre evidenciu obyvateľov a stavieb",
          mobil: ["0905 611 931"],
          email: ["ts-horovsky@trebisov.sk"],
        },
      ],
    };
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
.label {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
.inline {
  display: inline;
}

.label_box {
  margin-top: 30px;
  margin-bottom: 20px;
}
.label_box span {
  font-weight: 400 !important;
}
</style>
