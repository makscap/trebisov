<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <SubPagesMenuVertical
        :subpages="subpages"
        title="Rozpočet mesta Trebišov"
      />
      <div>
        <p>
          Zostavovanie rozpočtu obce a rozpočtu mesta v celku vychádza
          predovšetkým z viacročného rozpočtu, z určeného podielu na výnosoch
          daní v správe štátu ustanovených osobitným predpisom a zo schválených
          finančných vzťahov štátneho rozpočtu k rozpočtom územných samospráv.
          <br />
          <br />Základom finančného hospodárenia mesta Trebišov je rozpočet
          mesta zostavovaný na obdobie príslušného kalendárneho roka a
          schvaľovaný mestským zastupiteľstvom.Mestské zastupiteľstvo schvaľuje
          tiež jeho zmeny, kontroluje jeho čerpanie a schvaľuje záverečný účet
          mesta. <br />
          <br />Pred schválením sa rozpočet mesta musí zverejniť najmenej na
          pätnásť dní na úradnej tabuli v meste, aby sa k nemu mohli obyvatelia
          mesta vyjadriť (§ 9 ods. 3 zák. SNR č. 369/1990 Zb. v znení zmien a
          doplnkov - ďalej len zákona). To isté sa týka záverečného účtu mesta,
          ako aj návrhu na vyhlásenie dobrovoľnej zbierky. <br />
          <br />Rozpočet mesta obsahuje príjmy a výdavky spojené s činnosťou
          samosprávy, finančné vzťahy k štátnemu rozpočtu, k rozpočtu
          samosprávneho kraja a finančné vzťahy k právnickým osobám a fyzickým
          osobám. <br />
          <br />Na krytie mimoriadnych výdavkov vo všeobecnom záujme môže mesto
          rozhodnúť o zavedení verejnej dávky (príspevku, poplatku, naturálnom
          plnení), o vyhlásení dobrovoľnej zbierky alebo o prijatí úveru alebo
          pôžičky. O zavedení verejnej dávky rozhodujú obyvatelia mesta
          hlasovaním. O vyhlásení dobrovoľnej zbierky alebo o prijatí úveru
          rozhoduje mestské zastupiteľstvo na návrh primátora. <br />
          <br />Prebytky rozpočtu mesta možno previesť do mimorozpočtového
          peňažného fondu mesta, alebo rozpočtu mesta na ďalší kalendárny rok.
          <br />
          <br />Účtovníctvo o stave a pohybe majetku mesta, o výnosoch, príjmoch
          a výdavkoch a o finančných vzťahoch k štátnemu rozpočtu, v súlade s
          platnou úpravou vedie mestský úrad. <br />
          <br />Hospodárenie s prostriedkami rozpočtu mesta sa riadi osobitnými
          právnymi predpismi - Rozpočtovými pravidlami SR na ten-ktorý rok.
          Mesto môže využívať ekonomické nástroje (dane, poplatky, pokuty a iné)
          ako regulatíva na podporu ochrany životného prostredia. <br />
          <br />Výsledky hospodárenia mesta, vrátane výsledkov hospodárenia
          peňažných fondov obsahuje záverečný účet mesta, ktorý schvaľuje
          mestské zastupiteľstvo. <br />
          <br />Ročnú účtovnú závierku mesta overuje audítor. Audítor overuje aj
          ďalšie skutočnosti ustanovené osobitným zákonom
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";

export default {
  name: "RozpocetMestaView",
  data() {
    return {
      subpages: [
        {
          title: "Rozpočet mesta Trebišov 2022-2010",
          route: "/2010-2022",
        },
        {
          title: "Záverečný účet mesta Trebišov za rok 2021-2010",
          route: "/zaverecny-ucet-mesta-2010-2021",
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
  components: { SubPagesMenuVertical },
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
  width: 100%;
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
