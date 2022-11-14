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
  name: "ZakladnaUmeleckaSkolaView",
  data() {
    return {
      data: {
        verejny: "Základná umelecká škola",
        sidlo: "Mariánske námestie 252/5, 075 01 Trebišov",
        zastupca: "PaedDr. Veronika Jakimová, riaditeľka školy",
        ico: "355 44 635",
        dic: "202 166 3028",
        phone: "+421 56 672 2152, riad.- +421 56 668 6017",
        mobil: "riad.: +421 918 645 217, zást.: +421 918 645 216",
        fax: "+421 672 2152",
        email: "zustrebisov@gmail.com",
      },

      contact_person: {
        person: "PaedDr. Veronika Jakimová",
        phone: "+421 918 645 217",
        email: "zustrebisov@trebisov.sk",
      },
      links: [
        {
          text: "Oznámenia a informácie zverejňované  v profile verejného obstarávateľa podľa zákona č. 25/2006 Z. z. o verejnom obstarávaní v znení neskorších predpisov",
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
