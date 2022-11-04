<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Inštitút osobitného príjemcu</h1>

      <p>
        Inštitút osobitného príjemcu sociálnych dávok, najmä vo vzťahu k
        nájomníkom - neplatičom a rodičom záškolákov využíva aj mesto Trebišov.
        <br /><br />Pracovníci oddelenia sociálnych vecí a oddelenia školstva
        MsÚ na základe podnetu zo školy, alebo od správcu bytov zisťujú, či sa
        dávky využívajú na účel, na ktorý boli určené, či je postarané o stravu
        a oblečenie detí, či sa platí nájomné za byt, komunálny odpad a podobne.
        Mesto ako osobitný príjemca na základe prieskumu a zaradenia konkrétnej
        rodiny do režimu osobitného príjemcu, rozhodne prostredníctvom
        sociálneho referátu o použití dávky. Jej poberateľa informuje, ako bude
        použitá. Napríklad časť na zaplatenie nájomného, komunálny odpad, časť
        na nákup oblečenia a potravín a ďalšia ako finančné plnenie.
        <br /><br />Oddelenie školstva a oddelenie sociálnych vecí už vykonáva
        osobitného príjemcu na rodinné prídavky vo vzťahu k deťom, ktoré si
        neplnia povinnú školskú dochádzku alebo sú v Stanici opatrovateľskej
        služby z dôvodu zanedbania starostlivosti zo strany ich rodičov. V
        súlade s účinnosťou zákona NR SR č. 281/2002 Z.z. sa pozastaví
        vyplácanie prídavkov na dieťa a príspevkov k prídavkom na dieťa v tom
        prípade, ak žiak vymešká v mesiaci bez ospravedlnenia viac než 15
        vyučovacích hodín. Škola to oznámi ÚPSVaR v Trebišove. Ten na základe
        oznámenia vydá rozhodnutie, ktorým odníme rodinné prídavky za príslušný
        mesiac zákonnému zástupcovi dieťaťa. Peniaze poukáže osobitnému
        príjemcovi, ktorým je zo zákona obec, v tomto prípade mesto Trebišov.
      </p>

      <p class="label mb-30">Vybavuje</p>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "InstitutOsobitnehoPijemcuView",
  data() {
    return {
      contactsData: [
        {
          name: "Mgr. Henrieta Demjanová",
          position: "vedúca oddelenia",
          location: "Mestský úrad, 4. poschodie, kancelária č. 402",
          phone: ["+421 56 6713 338"],
          mobil: ["+421 917 596 326"],
          email: ["demjanova@trebisov.sk"],
        },
        {
          name: "Bc. Vladimír Kočiš",
          mobil: ["+421 915 785 238"],
        },
        {
          name: "Ing. Rastislav Kočiš",
          position: "referent pre školstvo",
          location: "Mestský úrad, 4. poschodie, kancelária č. 408",
          phone: ["+421 56 6713 327"],
          mobil: ["+421 915 790 364"],
          email: ["kocisr@trebisov.sk"],
        },
      ],
    };
  },
  components: { ContactCard },
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
