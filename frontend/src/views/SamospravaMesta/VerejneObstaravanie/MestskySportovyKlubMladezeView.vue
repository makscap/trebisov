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
  name: "MestskySportovyKlubMladezeView",
  data() {
    return {
      data: {
        verejny: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
        sidlo: "M. R. Štefánika 862/204, 075 01 Trebišov",
        zastupca: "PhDr. Marek Čižmár",
        ico: "00 188 549",
        dic: "2020749973",
        email: "mskm@trebisov.sk",
      },
      links: [
        {
          text: "Oznámenia a informácie zverejňované  v profile verejného obstarávateľa podľa zákona č. 25/2006 Z. z. o verejnom obstarávaní v znení neskorších predpisov",
          items: [
            {
              name: "Súhrnné správy o zákazkách podľa § 9 ods. 9",
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
