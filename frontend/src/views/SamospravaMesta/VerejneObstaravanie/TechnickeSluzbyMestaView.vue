<template>
  <ProfilVerejnehoSubPage
    :data="data"
    :links="links"
    :contact_person="contact_person"
  />
</template>

<script>
import ProfilVerejnehoSubPage from "@/components/ProfilVerejnehoSubPage.vue";
import { useMeta } from "vue-meta";

export default {
  name: "TechnickeSluzbyMestaView",
  data() {
    return {
      data: {
        verejny: "Technické služby mesta Trebišov",
        sidlo: "Stavebná 2165/2, 075 01 Trebišov",
        zastupca: "Ing. Imrich Fekete, riaditeľ",
        ico: "00188433",
        dic: "SK2020749951",
        phone: "+421 56 672 4039",
        fax: "+421 56 672 7773",
        email: "ts-info@trebisov.sk",
      },
      contact_person: {
        person: "Ing. Imrich Fekete",
        phone: "+421 905 527 468",
        email: "ts-fekete@trebisov.sk",
      },
      links: [
        {
          text: "Oznámenia a informácie zverejňované  v profile verejného obstarávateľa podľa zákona č. 25/2006 Z. z. o verejnom obstarávaní v znení neskorších predpisov",
          items: [
            {
              name: "Súhrnné správy o zákazkách podľa § 9 ods. 9",
            },
            {
              name: "Súhrnné správy o zákazkách z e-trhoviska",
            },
            {
              name: "Výzvy na predloženie cenovej ponuky",
            },
          ],
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
  components: { ProfilVerejnehoSubPage },
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
.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
</style>
