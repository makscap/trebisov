<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Žiadosť o prechod nájmu mestského nájomného bytu
      </h1>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>žiadosť o prechod nájmu bytu</li>
      </ul>
      <h4 class="label">
        V žiadosti o prechod nájmu bytu je potrebné konkrétne uviesť:
      </h4>

      <ul>
        <li>
          priezvisko a meno, dátum narodenia, byt na trvalej adrese, číslo bytu
        </li>
        <li>
          úmrtný list, resp. rozsudok o rozvode manželstva, (overená dohoda
          bývalých manželov) resp. potvrdenie o zmene pobytu – trvalé opustenie
          spoločnej domácnosti
        </li>
        <li>doklad o spoločnej domácnosti najbližších príbuzných</li>
        <li>dôvod prechodu nájmu</li>
      </ul>

      <h4 class="label">Upozornenie</h4>

      <ul>
        <li>
          ak nájomca zomrie a ak nejde o byt v spoločnom nájme manželov, stávajú
          sa nájomcami (spoločnými nájomcami) jeho deti, vnuci, rodičia,
          súrodenci, zať a nevesta, ktorí s ním žili v deň jeho smrti v
          spoločnej domácnosti a nemajú vlastný byt. Nájomcami (spoločnými
          nájomcami) sa stávajú aj tí, ktorí sa starali o spoločnú domácnosť
          zomretého nájomcu alebo na neho boli odkázaní výživou, ak s ním žili v
          spoločnej domácnosti aspoň tri roky pred jeho smrťou a nemajú vlastný
          byt
        </li>
        <li>
          ustanovenia platia aj v prípade, ak nájomca opustí trvale spoločnú
          domácnosť
        </li>
        <li>
          ustanovenia neplatia pre byty trvale určené ako služobné byty, pre
          byty osobitného určenia a pre byty v domoch osobitného určenia
        </li>
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
  name: "ZiadostOPridelenieView",
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
