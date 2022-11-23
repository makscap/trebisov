<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Konanie verejného zhromaždenia</h1>
      <p>
        Zvolávateľ verejného zhromaždenia v zmysle príslušných ustanovení zák.
        č. 84/1990 Zb. o zhromažďovacom práve oznámi aspoň 5 dní vopred
        mestskému úradu uskutočnenie zhromaždenia.
      </p>
      <p class="bold">V oznámení musí zvolávateľ uviesť:</p>

      <ul>
        <li>účel zhromaždenia,</li>
        <li>deň a miesto jeho konania a čas začatia,</li>
        <li>
          ak ide o zhromaždenie na verejnom priestranstve, aj predpokladaný čas
          jeho ukončenia,
        </li>
        <li>predpokladaný počet účastníkov zhromaždenia,</li>
        <li>
          opatrenia, ktoré urobí, aby sa zhromaždenie konalo v súlade so
          zákonom, najmä počet usporiadateľov, ktorých na organizáciu
          zhromaždenia určí, a spôsob ich označenia,
        </li>
        <li>
          ak má ísť o pouličný sprievod, východiskové miesto, cestu a miesto
          ukončenia,
        </li>
        <li>
          meno, priezvisko, rodné číslo a bydlisko zvolávateľa ( telefonický
          kontakt ), u právnickej osoby jej názov a sídlo a meno, priezvisko a
          bydlisko toho, kto je splnomocnený v tejto veci konať v jej mene,
        </li>
        <li>
          meno, priezvisko a bydlisko toho, kto je splnomocnený konať v
          zastúpení zvolávateľa
        </li>
      </ul>

      <p><span class="label_blue">Potrebné doklady:</span> žiadne</p>

      <p><span class="label_blue">Doba vybavenia: </span>do 5 dní</p>
      <p><span class="label_blue">Poplatok:</span> bez poplatku</p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "KonanieVerejnohoView",
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
.label_blue {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
</style>
