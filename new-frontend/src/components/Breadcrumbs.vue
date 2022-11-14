/* eslint-disable */
<template>
  <div class="govuk-width-container breadcrumbs" v-if="!home">
    <div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <li
          class="govuk-breadcrumbs__list-item"
          v-for="(value, index) in values"
          :key="index"
        >
          <router-link
            class="govuk-breadcrumbs__link"
            :title="'Odkaz na podstránku ' + value"
            :to="getBackUrl(index)"
            v-if="values.length - 1 > index"
            ><i class="fas fa-home icon" v-if="!value"></i
            >{{
              !value
                ? "Domov"
                : getName(value, index) === "null"
                ? ""
                : getName(value, index)
            }}</router-link
          >
          {{ values.length - 1 === index ? getName(value, index) : "" }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router";
import statisticsData from "../assets/statistics.json";

export default {
  data() {
    return {
      values: [],
      article: {},
      home: false,
      types: [
        { name: "o-meste", title: "O meste" },
        { name: "zakladne-udaje", title: "Základné údaje" },
        { name: "historia-mesta", title: "História mesta Trebišov" },
        { name: "symboly-mesta", title: "Symboly mesta" },
        { name: "statut-mesta", title: "Štatút mesta" },
        { name: "infolist-mesta", title: "Infolist mesta Trebišov" },
        { name: "mestske-zastupitelstvo", title: "Mestské zastupiteľstvo" },
        {
          name: "o-mestskom-zastupitelstve",
          title: "O mestskom zastupiteľstve",
        },
        { name: "poslanci-msz-v-trebisove", title: "Poslanci MsZ v Trebišove" },
        {
          name: "prehlad-poslancov-volebnych-obdobi",
          title: "Prehľad poslancov volebných období ",
        },
        {
          name: "poslanci-za-volebne-obdobie-2018-2022",
          title: "Poslanci za volebné obdobie 2018-2022",
        },
        {
          name: "interpelacie-poslancov-msz",
          title: "Interpelácie poslancov MsZ v Trebišove",
        },
        {
          name: "podnety-poslancov-msz-v-trebisove",
          title: "Podnety poslancov MsZ v Trebišove",
        },
        {
          name: "oznamenia-funkcii-poslanci",
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
        },
        {
          name: "oznamenia-funkcii-tlaciva",
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
        },
        { name: "dokumenty", title: "Dokumenty" },
        { name: "zasadnutia", title: "Zasadnutia MsZ v Trebišove" },
        { name: "projekty", title: "Projekty" },
        { name: "mestska-rada", title: "Mestská rada" },
        { name: "clenovia-mestskej-rady", title: "Členovia mestskej rady" },
        {
          name: "zasadnutia-mestskej-rady",
          title: "Zasadnutia mestskej rady MsZ ",
        },
        { name: "komisie", title: "Komisie" },
        { name: "samosprava-mesta", title: "Samospráva mesta" },
        { name: "primator", title: "Primátor mesta" },
        { name: "zastupcovia-primatora", title: "Zástupcovia primátora" },
        { name: "mestsky-urad", title: "Mestský úrad" },
        { name: "hlavny-kontrolor", title: "Hlavný kontrolór" },
        { name: "o-hlavnom-kontrolorovi", title: "O hlavnom kontrolórovi" },
        {
          name: "plany-kontrolnej-cinnosti",
          title: "Plány kontrolnej činnosti",
        },
        {
          name: "spravy-z-kontrolnej-cinnosti",
          title: "Správy z kontrolnej činnosti",
        },
        { name: "ostatne-dokumenty", title: "Ostatné dokumenty" },
        { name: "uradna-tabula", title: "Úradná tabuľa" },
        { name: "rozpocet-mesta", title: "Rozpočet mesta Trebišov" },
        {
          name: "2010-2022",
          title: "Rozpočet mesta Trebišov 2022-2010",
        },
        {
          name: "zaverecny-ucet-mesta-2010-2021",
          title: "Záverečný účet mesta Trebišov 2021-2010",
        },
        { name: "dotacie", title: "Dotácie" },
        { name: "verejne-obstaravanie", title: "Verejné obstarávanie" },
        {
          name: "mesto-trebisov",
          title: "Profil verejného obstarávateľa mesto Trebišov",
        },
        {
          name: "technicke-sluzby-mesta",
          title:
            "Profil verejného obstarávateľa Technické služby mesta Trebišov",
        },
        {
          name: "mestsky-sportovy-klub-mladeze",
          title: "Profil verejného obstarávateľa MESTSKÝ ŠPORTOVÝ KLUB ",
        },
        {
          name: "zakladna-umelecka-skola",
          title: "Profil verejného obstarávateľa Základná umelecká škola",
        },
        { name: "zmluvy-faktury", title: "Zmluvy, faktúry, objednávky" },
        { name: "interne-predpisy", title: "Interné predpisy" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },

        { name: "o-mestskom-urade", title: "O mestskom úrade" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "", title: "" },
        { name: "prednosta", title: "Prednosta MsÚ" },

        { name: "oddelenia", title: "Oddelenia MsÚ v Trebišove" },
        { name: "kancelaria-primatora", title: "Kancelária primátora" },
        { name: "oddelenie-financne", title: "Oddelenie finančné" },
        { name: "", title: "" },
        { name: "strediska", title: "Strediská" },
        { name: "mestska-vnutorna-ochrana", title: "Mestská vnútorná ochrana" },
        {
          name: "mestske-kulturne-stredisko",
          title: "Mestské kultúrne stredisko",
        },
        { name: "oznamy", title: "Oznamy" },
        { name: "oznamy-o-umrtiach", title: "Oznamy o úmrtiach" },
        { name: "strategicke-dokumenty", title: "Strategické dokumenty" },
        { name: "cenniky", title: "Cenníky" },
        { name: "zivot-v-meste", title: "Život v meste" },
        { name: "aktuality", title: "Aktuality" },
        { name: "policia", title: "Polícia" },
        { name: "mestska-policia", title: "Mestská polícia" },
        { name: "pravne-predpisy", title: "Právne predpisy" },
        { name: "rozdelenie-sektorov", title: "Rozdelenie sektorov" },

        // PRE OBCANOV

        {
          name: "pre-obcanov",
          title: "Pre občanov",
        },
        {
          name: "evidencia-obyvatelov",
          title: "Evidencia obyvateľov",
        },
        {
          name: "potverdenie-o-trvalom-pobyte",
          title: "Potvrdenie o trvalom pobyte",
        },
        {
          name: "prihlasenie-k-prechodnemu-pobytu",
          title: "Prihlásenie k prechodnému pobytu",
        },
        {
          name: "prihlasenie-na-trvaly-pobyt",
          title: "Prihlásenie na trvalý pobyt",
        },
        {
          name: "vydanie-prveho-obcianskeho-preukazu",
          title: "Vydanie prvého občianského preukazu pri dovŕšení 15. roku",
        },
        {
          name: "matrika",
          title: "Matrika",
        },
        {
          name: "zapis-novorodenca-a-rodny-list",
          title: "Zápis novorodenca a rodný list",
        },
        {
          name: "oprava-rodneho-cisla",
          title: "Oprava rodného čísla",
        },
        {
          name: "karty",
          title: "Karty",
        },
        {
          name: "rezidencna-karta-na-rok-2022",
          title: "Rezidenčná karta na rok 2022",
        },
        {
          name: "senior-karta",
          title: "Senior karta",
        },
        {
          name: "socialna-pomoc",
          title: "Sociálna pomoc",
        },
        {
          name: "financna-pomoc-primatora-a-zastupcu-primatora",
          title: "Finančná pomoc primátora a zástupcu primátora",
        },
        {
          name: "ako-ziadat-o-financnu-pomoc-primatora-a-zastupcu-primatora",
          title: "Ako žiadať o finančnú pomoc primátora a zástupcu primátora",
        },
        {
          name: "financna-pomoc-primatora-a-zastupcu-primatora-2018-2022",
          title: "Finančná pomoc primátora a zástupcu primátora 2018 – 2022",
        },
        {
          name: "denne-centra",
          title: "Denné centrá",
        },
        {
          name: "domaca-opatrovatelska-sluzba",
          title: "Domáca opatrovateľská služba",
        },
        {
          name: "institut-osobitneho-prijemcu",
          title: "Inštitút osobitného príjemcu",
        },
        {
          name: "mestska-socialna-ubytovna",
          title: "Mestská sociálna ubytovňa",
        },
        {
          name: "mestsky-utulok",
          title: "Mestský útulok",
        },
        {
          name: "socialne-sluzby-s-pouzitim-telekomunikacnych-technologii",
          title: "Sociálne služby s použitím telekomunikačných technológií",
        },
        {
          name: "stredisko-osobnej-hygieny-a-pracovne",
          title: "Stredisko osobnej hygieny a práčovne",
        },
      ],
    };
  },
  name: "BreadcrumbsComponent",
  beforeMount() {
    this.types.forEach((element) => {
      routes.push({ name: element.name, title: element.title });
    });
    this.setValues();
  },
  mounted() {
    if (this.$route.query.id) {
      // console.log("sth");
      this.getArticle();
    }

    console.log(this.$route.path.split("/"));
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route() {
      this.setValues();
    },
  },
  methods: {
    setValues() {
      this.values = this.$route.path.split("/");
      // console.log("routes", routes);
      if (this.$route.query.id) this.values.push("name");
      if (this.$route.query.id) {
        // console.log("sth");
        this.getArticle();
      }
      this.home = this.$route.path === "/";
    },
    getName(value, index) {
      let route = routes.find((route) => route.name === value);
      if (
        this.$route.fullPath.includes("vyhladavanie") &&
        index === this.values.length - 1
      ) {
        route = {
          title: "Hľadať: " + this.$route.query.search,
        };
      }
      if (
        this.$route.fullPath.includes("statistiky/") &&
        index === this.values.length - 1
      ) {
        route = {
          title:
            statisticsData[parseInt(this.values[this.values.length - 1]) - 1]
              .title,
        };
      }
      if (value === "name") {
        route = {
          title: this.article.name,
        };
      }

      console.log("🍅", "hit the target!", route);

      return route ? route.title : "null";
    },
    getBackUrl(index) {
      let url = "";
      this.values.forEach((value, i) => {
        if (value && i <= index) url += "/" + value;
      });
      if (!url) url = "/";
      // console.log("final url", url);

      return url;
    },
    async getArticle() {
      const res = await fetch(
        process.env.VUE_APP_API_URL +
          `/articles/${this.$route.query.id}/?fields[0]=name`
      );
      const jsonData = await res.json();
      this.article = jsonData.data.attributes;
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  width: 100%;
  margin-bottom: 20px;
}
@media screen and (max-width: 1020px) {
  .breadcrumbs {
    width: auto;
  }
}
.icon {
  margin-right: 10px;
}
</style>
