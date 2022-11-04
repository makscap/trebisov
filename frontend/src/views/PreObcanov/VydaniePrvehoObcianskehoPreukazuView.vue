<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Vydanie prvého občianského preukazu pri dovŕšení 15. roku
      </h1>

      <h4 class="label">Prvý občiansky preukaz sa občanovi vydá</h4>
      <ul>
        <li>pri dovŕšení pätnásteho roku veku</li>
        <li>
          po nadobudnutí štátneho občianstva, ak nemal ešte vydaný občiansky
          preukaz,
        </li>
        <li>
          po prihlásení sa na trvalý pobyt na území Slovenskej republiky, ak
          ešte nemal vydaný občiansky preukaz.
        </li>
      </ul>

      <p>
        O vydanie prvého občianskeho preukazu pri dovŕšení 15. roku veku, je
        povinný požiadať rodič občana alebo opatrovník, poručník, iná fyzická
        osoba ako rodič, ktorí majú dieťa zverené do náhradnej rodinnej
        starostlivosti, pestún, osoba, ktorá má záujem stať sa pestúnom a má
        dieťa dočasne zverené do pestúnskej starostlivosti, alebo štatutárny
        orgán zariadenia, v ktorom sa vykonáva rozhodnutie súdu o nariadení
        ústavnej starostlivosti alebo rozhodnutie súdu o nariadení ochrannej
        výchovy, najskôr 90 dní a najneskôr 30 dní pred dovŕšením pätnásteho
        roku veku občana.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <p>
        Občan alebo zákonný zástupca maloletého, ktorý žiada o vydanie prvého
        občianskeho preukazu, je povinný predložiť
      </p>
      <ul>
        <li>
          rodný list; ak nie je na rodnom liste uvedené rodné číslo, aj doklad o
          rodnom čísle
        </li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> Vybavenie potvrdenia je na počkanie</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>

      <h4 class="label">Súvisiace predpisy</h4>

      <ul>
        <li>
          <a href="/" className="">
            Zákon č. 253/1998 Z. z. o hlásení pobytu občanov Slovenskej
            republiky a registri obyvateľov Slovenskej republiky v znení
            neskorších predpisov
          </a>
        </li>
      </ul>
      <p class="label mb-30">Vybavuje</p>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";

export default {
  name: "VydaniePrvehoObcianskehoPreukazuView",
  data() {
    return {
      contactsData: [
        {
          name: "Kvetoslava Koščová",
          position: "referentka pre evidenciu obyvateľov a stavieb",
          location: "Mestský úrad, 1. poschodie, kancelária č. 118",
          phone: ["+421 56 6713 313"],
          mobil: ["+421 917 872 622"],
          email: ["koscova@trebisov.sk"],
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

.label_blue {
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
