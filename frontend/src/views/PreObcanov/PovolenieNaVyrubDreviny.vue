<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Povolenie na výrub dreviny</h1>

      <p>Súhlas na výrub dreviny sa nevyžaduje</p>

      <ul>
        <li>
          a) na stromy s obvodom kmeňa do 40 cm, meraným vo výške 130 cm nad
          zemou, a súvislé krovité porasty v zastavanom území obce s výmerou do
          10 m2 a za hranicami zastavaného územia obce s výmerou do 20 m2,
        </li>
        <li>
          b) pri obnove produkčných ovocných drevín na účely výsadby nových
          ovocných drevín, ak sa ich výsadba uskutoční do 18 mesiacov odo dňa
          výrubu,
        </li>
        <li>
          c) na stromy s obvodom kmeňa do 80 cm, meraným vo výške 130 cm nad
          zemou, ak rastú v záhradách a záhradkárskych osadách,
        </li>
        <li>
          d) pri bezprostrednom ohrození zdravia alebo života človeka alebo pri
          bezprostrednej hrozbe vzniku značnej škody na majetku,
        </li>
        <li>
          e) ak oprávnenie alebo povinnosť výrubu vyplýva z osobitných
          predpisov,
        </li>
        <li>
          f) ak je výrub preukázateľne nevyhnutný na zabezpečenie starostlivosti
          o osobitne chránenú časť prírody a krajiny a ak ho vykonáva alebo
          obstaráva organizácia ochrany prírody,
        </li>
        <li>
          g) ak orgán ochrany prírody vopred písomne určí, že výrub je
          preukázateľne nevyhnutný na zabezpečenie starostlivosti o osobitne
          chránenú časť prírody a krajiny,
        </li>
        <li>h) na dreviny inváznych druhov podľa § 7b ods. 2,</li>
        <li>
          i) na porasty rýchlorastúcich drevín založené na poľnohospodárskej
          pôde v súlade s osobitným predpisom a plantáže vianočných stromčekov a
          okrasných drevín,
        </li>
        <li>
          j) na územiach so štvrtým alebo piatym stupňom ochrany, kde je výrub
          drevín zakázaný [§ 15 ods. 1 písm. e) a § 16 ods. 1 písm. a)].
        </li>
      </ul>

      <p>
        Ustanovenie odseku 4 písm. a) sa nepoužije v prípade, ak drevina rastie
        na území s druhým alebo tretím stupňom ochrany, na cintorínoch alebo ako
        súčasť verejnej zelene.
      </p>
      <p>
        Ten, kto z dôvodov uvedených v odseku 4 písm. b) a d) drevinu vyrúbal,
        je povinný túto skutočnosť písomne oznámiť a zároveň preukázať splnenie
        podmienok na výrub drevín orgánu ochrany prírody najneskôr do piatich
        dní od uskutočnenia výrubu. Lehotu na výsadbu nových ovocných drevín
        podľa odseku 4 písm. b) môže orgán ochrany prírody na základe
        odôvodnenej žiadosti podanej pred uplynutím stanovenej lehoty predĺžiť,
        najviac však o šesť mesiacov.
      </p>
      <p>
        Poplatok sa platí v hotovosti do pokladne MsÚ, vždy pri podaní žiadosti.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>žiadosť</li>
        <li>
          kópia katastrálnej mapy alebo iný doklad umožňujúci identifikáciu
          dreviny v teréne,
        </li>
        <li>
          súhlas vlastníka, správcu, prípadne nájomcu pozemku, na ktorom drevina
          rastie, ak žiadateľ nie je jeho vlastníkom,
        </li>
        <li>výpis z listu vlastníctva</li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní od podania žiadosti</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span>
          fyzická osoba: 10 Eur, právnická osoba alebo fyzická osoba oprávnená
          na podnikanie, ktorej predmet činnosti súvisí s podanou žiadosťou: 100
          Eur
        </span>
      </div>
      <h4 class="label">Súvisiace predpisy:</h4>

      <div class="mb-30">
        <a href="/" className="">
          Zákon č. 543/2002 Z. z. o ochrane prírody a krajiny v znení neskorších
          predpisov
        </a>
      </div>
      <div>
        <a href="/" className="">
          Vyhláška Ministerstva životného prostredia Slovenskej republiky č.
          170/2021 Z. z., ktorou sa vykonáva zákon č. 543/2002 Z. z. o ochrane
          prírody a krajiny
        </a>
      </div>
      <h4 class="label">Prílohy:</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "PovolenieNaVyrubDreviny",
  data() {
    return {
      files: [
        {
          name: "Žiadosť o vydanie súhlasu na výrub dreviny",
          size: "148.43 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Žiadosť o vydanie súhlasu na výrub dreviny",
          size: "148.43 kB",
          ext: "DOCX",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent },
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
