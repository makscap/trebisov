<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Ako žiadať o finančnú pomoc primátora a zástupcu primátora
      </h1>

      <h4 class="label">Poskytovateľ finančného daru</h4>

      <p>
        PhDr. Marek Čižmár, primátor mesta<br />
        Ing. Peter Duč, zástupca primátora mesta
      </p>

      <h4 class="label">Prijímateľ finančného daru</h4>
      <p>
        vybraný jednotlivec / skupina ľudí / rodina / organizácia, združenie,
        spoločenstvo, klub
      </p>

      <h4 class="label">Účel aktivity</h4>
      <p>
        Pomoc ľuďom v núdzi, talentovaným jednotlivcom, zdravotne znevýhodneným
        osobám, sirotám, osamelo žijúcim ľuďom, mladým rodinám, podpora
        športových aktivít.
      </p>

      <h4 class="label">Výška finančného daru</h4>
      <p>
        Výška poskytovaného finančného daru zodpovedá sume, ktorú z 2/3 tvorí
        časť príjmu primátora mesta PhDr. Marka Čižmára a z 1/3 časť príjmu
        zástupcu primátora mesta Ing. Petra Duča.
      </p>

      <h4 class="label">Podmienky poskytnutia finančného daru</h4>

      <p>
        Prijímateľ je občan (občania) s trvalým pobytom v meste Trebišov,
        kolektív reprezentujúci mesto Trebišov alebo pôsobiaci na jeho území.
      </p>
      <p>Predložená písomná žiadosť adresovaná na:</p>

      <p>
        Mestský úrad<br />
        Kancelária primátora<br />
        M. R. Štefánika 862/204<br />
        075 25 Trebišov
      </p>
      <p>Prijímateľ je povinný uviesť v žiadosti:</p>

      <ul>
        <li>
          kontaktné údaje (meno, priezvisko, adresu trvalého pobytu, telefónny
          alebo mailový kontakt),
        </li>
        <li>dôvod (y) predloženia žiadosti,</li>
        <li>účel použitia daru.</li>
      </ul>
      <p>
        Poskytovateľ si vyhradzuje právo výberu prijímateľa na základe vlastného
        posúdenia a deklarovaného použitia finančnej pomoci.
      </p>
      <p>Poskytovateľ odovzdáva finančný dar prijímateľovi v hotovosti.</p>
      <p>
        Možnosť poskytnutia daru vybranému prijímateľovi: maximálne 1 x za
        kalendárny rok.
      </p>
      <p>
        Prijímateľ súhlasí so zverejnením a mediálnou prezentáciou svojej osoby,
        aktu odovzdania daru, účelu poskytnutia daru a so zhotovením
        fotodokumentácie na účely publikovania.
      </p>
      <p>
        Dar sa odovzdáva občasne na pôde Mestského úradu v hotovosti a
        podpísaním darovacej zmluvy a protokolu o prijatí daru.
      </p>
      <p>
        Poskytovateľ si vyhradzuje právo, v rámci jedného odovzdávania,
        poskytnúť dar jednému, resp. viacerým prijímateľom.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "AkoZiadatOFinancnuPomocView",
  data() {
    return {};
  },
  components: {},
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
</style>
