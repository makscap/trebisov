<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Poplatok za znečisťovanie ovzdušia</h1>

      <p>
        V zmysle zákona č. 401/1998 o poplatkoch za znečisťovanie ovzdušia o
        poplatku právnickej osoby a fyzickej osoby oprávnenej na podnikanie,
        ktorá prevádzkuje malý zdroj znečisťovania ovzdušia (ďalej len
        „prevádzkovateľ malého zdroja“), rozhoduje obec.
      </p>
      <p>
        Prevádzkovateľ malého zdroja je povinný písomne oznámiť každoročne do
        15. februára obci za každý malý zdroj znečisťovania ovzdušia spotrebu
        palív a surovín, z ktorých znečisťujúce látky vznikajú, a ďalšie údaje
        potrebné na zistenie množstva a škodlivosti znečisťujúcich látok
        vypustených do ovzdušia za uplynulý rok, najmä o druhu a kvalitatívnych
        ukazovateľoch palív a surovín, počte prevádzkových hodín malého zdroja
        znečisťovania ovzdušia a o druhu účinnosti odlučovacích zariadení.
      </p>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní od podania žiadosti</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span>
          podľa zákona č. 401/1998 a VZN č. 153/2017 o ovzduší a o poplatku za
          znečisťovanie
        </span>
      </div>
      <h4 class="label">Súvisiace predpisy:</h4>

      <div class="mb-30">
        <a href="/" className="">
          Zákon č. 401/1998 Z. z. o poplatkoch za znečisťovanie ovzdušia v znení
          neskorších predpisov
        </a>
      </div>
      <div>
        <a href="/" className="">
          VZN č. 153/2017 o ovzduší a o poplatku za znečisťovanie ovzdušia
          malými zdrojmi znečisťovania
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PoplatokZaZnecistovanieView",
  data() {
    return {
      files: [
        {
          name: "žiadosť o vydanie povolenia na rozkopávky miestnych komunikácií",
          urlFile: "/",
        },
      ],
    };
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
