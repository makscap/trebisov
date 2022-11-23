<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Podanie petície</h1>

      <p class="bold">
        Podaná petícia musí mať písomnú formu a musí obsahovať tieto údaje:
      </p>

      <ul>
        <li>
          fyzická osoba čitateľne uvedie k podpisu svoje meno, priezvisko a
          adresu trvalého pobytu
        </li>
        <li>
          právnická osoba uvedie svoj názov a sídlo, meno, priezvisko a adresu
          trvalého pobytu osoby oprávnenej konať v jej mene
        </li>
        <li>
          ak podpisové hárky neobsahujú text petície, musia sa označiť tak, aby
          bolo zrejmé, aká petícia sa má podporiť podpismi
        </li>
        <li>
          na každom podpisovom hárku musí byť uvedené meno, priezvisko a úplná
          adresa trvalého pobytu každej osoby, ktorá petíciu zostavila, alebo
          osoby, ktorá je určená na styk s orgánom samosprávy
        </li>
        <li>
          ak petíciu podporil väčší počet osôb, musia osoby podávajúce petíciu
          uviesť pod jej textom počet priložených podpisových hárkov a tieto
          musia priebežne číslovať
        </li>
        <li>
          ak petíciu podáva petičný výbor, jeho členovia sú povinní určiť osobu,
          ktorá dovŕšila 18 rokov, na ich zastupovanie v styku s orgánom
          samosprávy
        </li>
        <li>
          ak nie je vytvorený petičný výbor, musí sa v petícii určiť osoba,
          ktorá dovŕšila vek 18 rokov, na styk s orgánom samosprávy
        </li>
        <li>
          ak petíciu podáva petičný výbor, uvedú sa v nej meno, priezvisko a
          úplná adresa trvalého pobytu každej osoby, ktorá petíciu zostavila
        </li>
      </ul>

      <p>
        <span class="label_blue">Vybavovanie:</span> Vybavovanie petície
        zabezpečuje primátor mesta prostredníctvom určených zamestnancov mesta,
        prípadne za účasti poslancov podľa posúdenia jej obsahu. Petíciu
        zaeviduje v centrálnej evidencii sťažností a petícií hlavný kontrolór
        obce.
      </p>

      <p>
        <span class="label_blue">Doba vybavenia: </span>v základnej lehote do 30
        dní
      </p>
      <p><span class="label_blue">Poplatok:</span> bez poplatku</p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PodaniePeticieView",
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
