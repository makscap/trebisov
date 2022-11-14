<template>
  <div class="govuk-width-container box">
    <h2 class="govuk-heading-l title">{{ title }}</h2>

    <ul class="list">
      <li v-for="(sub, ind) in this.subpages" :key="ind" class="item">
        <div class="idsk-crossroad idsk-crossroad-2">
          <div class="idsk-crossroad__item">
            <router-link
              :to="sub.route"
              class="govuk-link idsk-crossroad-title"
              title="Title for 1st element"
              aria-hidden="false"
              >{{ sub.title }}
            </router-link>
            <hr class="idsk-crossroad-line" aria-hidden="true" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SubMenuView",
  data() {
    return {
      values: [],
      subpages: [],
      title: "",
      url_main: "",
      o_meste: {
        title: "O meste",
        url: "o-meste",
        children_one: [
          { title: "Základné údaje", route: "o-meste/zakladne-udaje" },
          { title: "História mesta", route: "o-meste/historia-mesta" },
          { title: "Symboly mesta", route: "o-meste/symboly-mesta" },
          { title: "Štatút mesta", route: "o-meste/statut-mesta" },
          { title: "Infolist mesta Trebišov", route: "o-meste/infolist-mesta" },
        ],
      },
      samosprava_mesta: {
        title: "Samospráva mesta",
        url: "samosprava-mesta",
        children_one: [
          { title: "Primátor", route: "samosprava-mesta/primator" },
          {
            title: "Zástupcovia primátora",
            route: "samosprava-mesta/zastupcovia-primatora",
          },
          {
            title: "Mestské zastupiteľstvo",
            route: "samosprava-mesta/mestske-zastupitelstvo",
            children_two: [
              {
                title: "O mestskom zastupiteľstve",
                route: "mestske-zastupitelstvo/o-mestskom-zastupitelstve",
              },
              {
                title: "Poslanci MsZ v Trebišove",
                route: "mestske-zastupitelstvo/poslanci-msz-v-trebisove",
                children_third: [
                  {
                    title: "Prehľad poslancov volebných období",
                    route:
                      "poslanci-msz-v-trebisove/prehlad-poslancov-volebnych-obdobi",
                    children_four: [
                      {
                        title: "Poslanci za volebné obdobie 2018-2022",
                        route:
                          "prehlad-poslancov-volebnych-obdobi/poslanci-za-volebne-obdobie-2018-2022",
                      },
                    ],
                  },
                  {
                    title: "Interpelácie poslancov MsZ v Trebišove",
                    route:
                      "poslanci-msz-v-trebisove/interpelacie-poslancov-msz",
                    children_four: [
                      {
                        title: "Rok 2022",
                        route: "interpelacie-poslancov-msz/rok-2022",
                      },
                      {
                        title: "Rok 2021",
                        route: "interpelacie-poslancov-msz/rok-2021",
                      },
                      {
                        title: "Rok 2020",
                        route: "interpelacie-poslancov-msz/rok-2020",
                      },
                      {
                        title: "Rok 2019",
                        route: "interpelacie-poslancov-msz/rok-2019",
                      },
                      {
                        title: "Rok 2018",
                        route: "interpelacie-poslancov-msz/rok-2018",
                      },
                      {
                        title: "Rok 2017",
                        route: "interpelacie-poslancov-msz/rok-2017",
                      },
                      {
                        title: "Rok 2016",
                        route: "interpelacie-poslancov-msz/rok-2016",
                      },
                    ],
                  },
                  {
                    title: "Podnety poslancov MsZ v Trebišove",
                    route:
                      "poslanci-msz-v-trebisove/podnety-poslancov-msz-v-trebisove",
                    children_four: [
                      {
                        title: "Rok 2022",
                        route: "",
                      },
                      {
                        title: "Rok 2021",
                        route: "",
                      },
                      {
                        title: "Rok 2020",
                        route: "",
                      },
                      {
                        title: "Rok 2019",
                        route: "",
                      },
                      {
                        title: "Rok 2018",
                        route: "",
                      },
                      {
                        title: "Rok 2017",
                        route: "",
                      },
                      {
                        title: "Rok 2016",
                        route: "",
                      },
                    ],
                  },
                  {
                    title:
                      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
                    route:
                      "poslanci-msz-v-trebisove/oznamenia-funkcii-poslanci",
                  },
                  {
                    title:
                      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
                    route: "",
                  },
                ],
              },
              {
                title: "Zasadnutia MsZ v Trebišove",
                route: "",
                children_third: [
                  {
                    title: "Prehľad poslancov volebných období",
                    route:
                      "poslanci-msz-v-trebisove/prehlad-poslancov-volebnych-obdobi",
                    children_four: [
                      {
                        title: "Poslanci za volebné obdobie 2018-2022",
                        route:
                          "prehlad-poslancov-volebnych-obdobi/poslanci-za-volebne-obdobie-2018-2022",
                      },
                    ],
                  },
                  {
                    title: "Interpelácie poslancov MsZ v Trebišove",
                    route: "",
                  },
                  {
                    title: "Podnety poslancov MsZ v Trebišove",
                    route: "",
                  },
                  {
                    title:
                      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
                    route: "",
                  },
                  {
                    title:
                      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
                    route: "",
                  },
                ],
              },
            ],
          },
          {
            title: "Hlavný kontrolór",
            route: "samosprava-mesta/hlavny-kontrolor",
          },
          { title: "Úradná tabuľa", route: "samosprava-mesta/uradna-tabula" },
          { title: "Rozpočet", route: "samosprava-mesta/rozpocet-mesta" },
          {
            title: "Verejné obstarávanie",
            route: "samosprava-mesta/verejne-obstaravanie",
          },
          {
            title: "Interné predpisy",
            route: "samosprava-mesta/interne-predpisy",
          },
          {
            title: "Zmluvy, faktúry, objednávky",
            route: "samosprava-mesta/zmluvy-faktury",
          },
        ],
      },
      mestsky_urad: [
        { title: "O mestskom úrade", route: "/" },
        { title: "Prednosta", route: "/" },
        { title: "Oddelenia", route: "/" },
        { title: "Strediská", route: "/" },
        { title: "Oznamy", route: "/" },
        { title: "Oznamy o úmrtiach", route: "/" },
        { title: "Strategické dokumenty", route: "/" },
        { title: "Všeobecne záväzné nariadenia", route: "/" },
        { title: "Cenník", route: "/" },
      ],
      pre_obcanov: [
        { title: "Evidencia obyvateľov", route: "/" },
        { title: "Matrika", route: "/" },
        { title: "Karty", route: "/" },
        { title: "Stavebný úrad", route: "/" },
        { title: "Sociálna pomoc", route: "/" },
        { title: "Komunálny odpad", route: "/" },
        { title: "Miestne dane a poplatky", route: "/" },
        { title: "Doprava a komunikácie", route: "/" },
        { title: "Životné prostredie", route: "/" },
        { title: "Informácie", route: "/" },
        { title: "Otázky a odpovede", route: "/" },
        { title: "Ostatné", route: "/" },
      ],
      zivot_v_meste: [
        { title: "Aktuality", route: "/" },
        { title: "Historické a kultúrne pamiatky", route: "/" },
        { title: "Podujatia", route: "/" },
        { title: "Fotogaléria", route: "/" },
        { title: "Kam do mesta", route: "/" },
        { title: "Školstvo", route: "/" },
        { title: "Mestský športový klub mládeže", route: "/" },
        { title: "Polícia", route: "/" },
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

  mounted() {
    this.setValues();
  },
  methods: {
    setValues() {
      this.values = this.$route.path;
      switch (this.values) {
        case "/o-meste":
          this.title = this.o_meste.title;
          this.subpages = this.o_meste.children_one;
          break;
        case "/samosprava-mesta":
          this.title = this.samosprava_mesta.title;
          this.subpages = this.samosprava_mesta.children_one;
          break;
        case "/samosprava-mesta/mestske-zastupitelstvo":
          this.title = this.samosprava_mesta.children_one[2].title;
          this.subpages = this.samosprava_mesta.children_one[2].children_two;
          break;
        case "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove":
          this.title =
            this.samosprava_mesta.children_one[2].children_two[1].title;
          this.subpages =
            this.samosprava_mesta.children_one[2].children_two[1].children_third;
          break;
        case "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/prehlad-poslancov-volebnych-obdobi":
          this.title =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[0].title;
          this.subpages =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[0].children_four;
          break;
        case "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/interpelacie-poslancov-msz":
          this.title =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[1].title;
          this.subpages =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[1].children_four;
          break;
        case "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/podnety-poslancov-msz-v-trebisove":
          this.title =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[2].title;
          this.subpages =
            this.samosprava_mesta.children_one[2].children_two[1].children_third[2].children_four;
          break;
        case "/samosprava-mesta/hlavny-kontrolor":
          this.title = this.samosprava_mesta.children_one[3].title;
          this.subpages = this.samosprava_mesta.children_one[3].children_two;
          break;

        case "/samosprava-mesta/dotacie":
          this.title = this.samosprava_mesta.children_one[6].title;
          this.subpages = this.samosprava_mesta.children_one[6].children_two;
          break;
        case "/mestsky-urad":
          this.subpages = this.mestsky_urad;
          break;
        case "/pre-obcanov":
          this.subpages = this.pre_obcanov;
          break;
        case "/zivot-v-meste":
          this.subpages = this.zivot_v_meste;
          break;
      }
    },

    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },

  watch: {
    $route() {
      this.setValues();
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding-top: 30px;
  padding-bottom: 50px;
}

.title {
  margin-bottom: 7px !important;
}
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}

.item {
  width: calc((100% / 2) - 23px);
  margin-top: 23px;
  margin-right: 23px;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
