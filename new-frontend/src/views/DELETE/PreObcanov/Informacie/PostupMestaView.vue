<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Postup mesta pri vybavovaní žiadostí</h1>

      <h2 class="bold topic">Sprístupnenie informácií na žiadosť</h2>
      <p>
        Žiadosť o sprístupnenie informácií povinná osoba vybaví bez zbytočného
        odkladu, najneskôr do ôsmich pracovných dní odo dňa podania žiadosti
        alebo odo dňa odstránenia nedostatkov žiadosti podľa § 14 ods. 2 a 3
        zákona č. 211/2000 Z. z. a do 15 pracovných dní, ak sa sprístupňuje
        informácia nevidiacej osobe v prístupnej forme ( § 16 ods. 2 písm. a)
        zákona č. 211/2000 Z. z., ak tento zákon neustanovuje inak)
      </p>
      <p>
        Zo závažných dôvodov môže povinná osoba predĺžiť lehotu, najviac však o
        osem pracovných dní a o 15 pracovných dní, ak sa sprístupňuje informácia
        nevidiacej osobe v prístupnej forme podľa § 16 ods. 2 písm. a) zákona č.
        211/2000 Z. z.
      </p>
      <p>Závažnými dôvodmi sú:</p>
      <ul>
        <li>
          vyhľadávanie a zber požadovaných informácií na inom mieste, ako je
          sídlo povinnej osoby vybavujúcej žiadosť,
        </li>
        <li>
          vyhľadávanie a zber väčšieho počtu oddelených alebo odlišných
          informácií požadovaných na sprístupnenie v jednej žiadosti,
        </li>
        <li>
          preukázateľné technické problémy spojené s vyhľadávaním a
          sprístupňovaním informácie, o ktorých možno predpokladať, že ich možno
          odstrániť v rámci predĺženej lehoty.
        </li>
      </ul>

      <p>
        Predĺženie lehoty povinná osoba oznámi žiadateľovi bezodkladne,
        najneskôr pred uplynutím lehoty. V oznámení uvedie dôvody, ktoré viedli
        k predĺženiu lehoty.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PostupMestaView",
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
