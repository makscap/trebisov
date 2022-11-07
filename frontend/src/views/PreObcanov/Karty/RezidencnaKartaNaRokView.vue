<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Rezidenčná karta na rok 2022</h1>

      <div>
        <p>
          Vážení občania,
          <br />aj v tomto roku mesto Trebišov vydá rezidenčné karty (RK) na rok
          2022 pre občanov s trvalým pobytom na území mesta Trebišov, ktorí
          splnili podmienky na jej vydanie
        </p>

        <p class="bold">Podmienky na vydanie rezidenčnej karty:</p>

        <ol>
          <li class="bold">trvalý pobyt na území mesta Trebišov</li>

          <li class="bold">
            splnenie záväzkov (uhradené poplatky za TKO, miestne dane) voči
            mestu k 31. 12. 2021.
          </li>
        </ol>
        <p>
          Rezidenčnú kartu získa občan mesta Trebišova (po splnení podmienok)
          ZDARMA.
        </p>

        <p>
          Oproti minulému obdobiu mesto pristúpilo k nasledovným zmenám pri
          vydávaní rezidenčných kariet:
        </p>

        <ul>
          <li>
            dochádza k predĺženiu platnosti rezidenčnej karty vždy do 31. marca
            nasledujúceho roka, z dôvodu zabezpečenia plynulého procesu prípravy
            a distribúcie aktuálnych rezidenčných kariet. Platnosť rezidenčnej
            karty vydanej v roku 2021 sa predlžuje do 31. 03. 2022.
          </li>
        </ul>

        <p>
          <span> Stav pred zmenou:</span> platnosť rezidenčnej karty bola do
          31.12. aktuálneho roka, pre ktorý bola táto karta vydaná
        </p>

        <ul>
          <li>
            rezidenčnú kartu je potrebné vyzdvihnúť priamo na MsÚ v Trebišove
            (jeden z rodinných príslušníkov, prípadne členov spoločnej
            domácnosti), na základe vyplnenej Žiadosti o vydanie rezidenčnej
            karty, kde bude karta na počkanie osobne vydaná.
            <span>Rezidenčné karty nebudú zasielané poštou!</span>
          </li>
        </ul>

        <p>
          <span> Stav pred zmenou:</span> obyvateľom, ktorí v minulom období
          (2019 až 2021) požiadali o vydanie RK a v podanej žiadosti označili,
          že súhlasia s opätovným a zároveň pravidelným zasielaním rezidenčnej
          karty za predpokladu splnenia vyššie uvedených podmienok, doručené na
          adresu ich trvalého pobytu.
          <br />
          <br /><span>
            Karty budú vydávané od 1. 3. 2022 v úradných hodinách na vrátnici
            MsÚ v Trebišove.
          </span>
          <br />
          <br />Pre osoby do dovŕšenia 3 rokov veku sa rezidenčná karta
          nevydáva. <br />
          <br />Pre osoby od dovŕšenia 3 rokov veku do dovŕšenia 15 rokov veku
          je Rezidenčná karta mesta Trebišov platná IBA S PREUKAZOM POISTENCA.
          <br />
          <br />Pre osoby od 15 do dovŕšenia 65 rokov je Rezidenčná karta mesta
          Trebišov platná IBA S OBČIANSKYM PREUKAZOM. <br />
          <br />Všetkým občanom s trvalým pobytom na území mesta Trebišov od 65
          rokov veku bola vydaná a doručená SENIOR KARTA, ktorá seniorov
          oprávňuje využívať výhody plynúce z rezidenčnej karty. Seniorom od
          uvedeného veku teda mesto rezidenčnú kartu nevydáva. <br />
          <br />Výhody, vyplývajúce z rezidenčnej karty na rok 2022, občania
          môžu uplatňovať v Areáli vodných športov (letné kúpalisko a mestská
          plaváreň) na poskytnutie zľavy z ceny vstupného. Rovnako aj pri
          návšteve Komunitnej klubovne FAJNOVO (budova Centra voľného času), pri
          člnkovaní a vodnom bicyklovaní na rybníku v mestskom parku. <br />
          <br />V prípade straty rezidenčnej karty mesto Trebišov účtuje
          poplatok za vystavenie náhradnej karty v sume 1 €. Poplatok je
          potrebné uhradiť v pokladni MsÚ v Trebišove.
        </p>
      </div>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "RezidencnaKartaNaRokView",
  data() {
    return {
      files: [
        {
          name: "Žiadosť o vydanie Rezidenčnej karty na rok 2022",
          size: "206.04kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Žiadosť o vydanie Rezidenčnej karty na rok 2022",
          size: "116.96 kB",
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
<style lang="scss" scoped></style>
