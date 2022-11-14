<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Ako podať opravný prostriedok</h1>

      <p>
        Proti rozhodnutiu povinnej osoby o odmietnutí požadovanej informácie
        možno podať odvolanie v lehote 15 dní od doručenia rozhodnutia alebo
        márneho uplynutia lehoty na rozhodnutie o žiadosti podľa § 17. Odvolanie
        sa podáva povinnej osobe, ktorá rozhodnutie vydala alebo mala vydať.
      </p>
      <p>
        O odvolaní proti rozhodnutiu povinnej osoby rozhoduje nadriadený
        povinnej osoby, ktorá vo veci rozhodla alebo mala rozhodnúť. Ak ide o
        rozhodnutie obecného úradu, o odvolaní rozhoduje starosta obce
        (primátor). Proti rozhodnutiu ústredného orgánu štátnej správy možno
        podať rozklad, o ktorom rozhoduje vedúci ústredného orgánu štátnej
        správy.
      </p>
      <p>
        Odvolací orgán rozhodne o odvolaní do 15 dní od doručenia odvolania
        povinnou osobou. Ak odvolací orgán v tejto lehote nerozhodne,
        predpokladá sa, že vydal rozhodnutie, ktorým odvolanie zamietol a
        napadnuté rozhodnutie potvrdil; za deň doručenia tohto rozhodnutia sa
        považuje druhý deň po uplynutí lehoty na vydanie rozhodnutia.
      </p>
      <p>
        Rozhodnutie o odmietnutí žiadosti možno preskúmať v súdnom konaní podľa
        osobitného zákona.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "AkoPodatOpravnyView",
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
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}

.label-mb-10 {
  margin-bottom: 10px;
  max-width: 274px;
}

.item-main {
  margin-bottom: 30px !important;
}

.item {
  display: flex;
  padding: 10px 0px;
  border-top: 1px solid #bfc1c3;
}

.item:last-child {
  border-bottom: 1px solid #bfc1c3;
}

.item-no-border {
  border-top: none;
}

.column-1 {
  width: 301px;
  margin-right: 30px;
}

.column-2 {
  flex: 1;
}

.font-light {
  font-weight: 400;
}
</style>
