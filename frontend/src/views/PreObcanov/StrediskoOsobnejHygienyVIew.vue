<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Stredisko osobnej hygieny a práčovne</h1>

      <p>
        V stredisku osobnej hygieny a práčovni sa utvárajú podmienky na
        vykonávanie nevyhnutnej základnej osobnej hygieny fyzickej osobe s
        trvalým pobytom na území mesta Trebišov, ktorá nemá zabezpčené
        nevyhnutné podmienky na uspokojovanie základných životných potrieb, má
        ťažké zdravotné postihnutie alebo nepriaznivý zdravotný stav alebo
        dovŕšila dôchodkový vek.
      </p>
      <p>
        Výška úhrady za sociálne služby v stredisku osobnej hygieny a práčovne
        je:
      </p>
      <ul>
        <li>za využitie automatickej práčky 1-krát 1,66 €</li>
        <li>za sušičku 0,83 €</li>
        <li>za sprchovanie 1 osoba max. 15 minút 0,50 €</li>
        <li>za žehlenie 1 osoba max. 30 minút 1,00 €</li>
      </ul>
      <p>
        Výška úhrady je rovnaká pre deti aj pre dospelých, úhrada sa platí do
        pokladne Mestského úradu v Trebišove.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StrediskoOsobnejHygienyVIew",
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
