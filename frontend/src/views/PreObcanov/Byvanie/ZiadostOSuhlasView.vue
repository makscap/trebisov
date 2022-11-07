<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Žiadosť o súhlas k výmene bytu vo vlastníctve mesta
      </h1>
      <p>
        Nájomníci nájomných bytov môžu požiadať Mesto Trebišov o výmenu bytov
      </p>
      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>
          Tlačivo - Dohoda o vzájomnej výmene bytov, podpísané hlavnými
          nájomcami bytov
        </li>
        <li>
          Fotokópie dokladov od bytov (nájomná zmluva alebo rozhodnutie o
          pridelení bytu, zápis o dohode o odovzdaní a prevzatí bytu)
        </li>
        <li>Súhlas vlastníka</li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Podanie žiadostí:</h4>
        <span> Podateľňa – kancelária prvého kontaktu - prízemie</span>
      </div>
      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "ZiadostOSuhlasView",
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
