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
  name: "MestoTrebisovView",
  data() {
    return {
      data: {
        verejny: "Mesto Trebišov",
        sidlo: "M. R. Štefánika 862/204, 075 25 Trebišov",
        zastupca: "PhDr. Marek Čižmár, primátor",
        ico: "00 331 996",
        dic: "2020773590",
        phone: "+ 421 56 672 2665",
        fax: "+ 421 56 672 6668",
        email: "trebisov@trebisov.sk",
      },
      contact_person: {
        person: "Ing. Valéria Maďarová",
        phone: "+421 907 611 528",
        email: "nacelnik@trebisov.sk",
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
              name: "Informácie podľa § 21 ods. 2 (správy o zákazkách, o rámcových dohodách a o zriadení dynamického nákupného systému)",
            },
            {
              name: "Informácie podľa § 41 ods. 1 (o otváraní príslušnej časti ponúk)",
            },
            {
              name: "Informácie podľa § 44 ods. 2 (o výsledkoch vyhodnotenia ponúk)",
            },
            {
              name: "Informácie podľa § 49a ods. 1 (súťažné podklady, zmluvy) – nadlimitné zákazky",
            },
          ],
        },
        {
          text: "Oznámenia a informácie o zákazkách vyhlásených po 27.2.2014 sa zverejňujú už len v profile verejného obstarávateľa vytvorenom na Úrade pre verejné obstarávanie.",
          items: [{ name: "Výzvy na predloženie cenovej ponuky" }],
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
