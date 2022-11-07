<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Zápis novorodenca a rodný list</h1>

      <h4 class="label">Potrebné doklady</h4>
      <ul>
        <li>platné občianske preukazy oboch rodičov,</li>
        <li>sobášny list,</li>
        <li>novorodenca zapisuje otec dieťaťa, manžel matky.</li>
      </ul>

      <p>
        Informácie pri narodení deti mimo manželského zväzku sa podávajú
        individuálne, priamo na matričnom úrade.
        <br /><br />
        <span
          >Pri zápise novonarodeného dieťaťa rodičia môžu požiadať o zaslanie
          prvého rodného listu novonarodeného dieťaťa poštou na adresu
          rodiča</span
        >
        za splnenia podmienky, že obaja rodičia podpíšu dohodu o mene a
        priezvisku dieťaťa v pôrodnici /týka sa slobodnej matky, zosobášených
        rodičov, alebo ak bolo určené otcovstvo ešte k nenarodenému dieťaťu/.
        Meno a priezvisko dieťaťa musí byť určené v súlade s ustanovením zákona
        NR SR č. 300/1993 Z. z. o mene a priezvisku v znení neskorších
        predpisov.
      </p>

      <h4 class="label">Poplatok:</h4>
      <p>
        prvý výpis rodného listu je bez poplatku, každý ďalší vydaný rodný list
        je s poplatkom 5 eur v hotovosti
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "VydaniePrvehoObcianskehoPreukazuView",
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
