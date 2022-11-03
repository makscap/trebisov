<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestský úrad</h1>
      <MapComponent :dataMap="dataMap" />
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <div class="cover">
        <h4 class="label">Kontaktné informácie</h4>
        <div class="mb-24">
          <span class="bold">E-mail:</span>
          <a href="mailto:trebisov@trebisov.sk"> trebisov@trebisov.sk </a>
        </div>
        <div class="mb-24">
          <div><span class="bold">Informátor - vrátnica</span></div>
          <div>
            Tel.:
            <a href="tel:+421566713339"> +421 56 6713 339 </a>
          </div>
        </div>

        <ul class="list">
          <li class="item">
            <div><span class="bold">Sekretariát prednostu</span></div>
            <div>Tel.: <a href="tel:+421566722157"> +421 56 672 2157 </a></div>
            <div>Mobil: <a href="tel:+421915790360"> +421 915 790 360 </a></div>
            <div>
              E-mail:
              <a href="mailto:vaskova@trebisov.sk"> vaskova@trebisov.sk </a>
            </div>
          </li>

          <li class="item">
            <div><span class="bold">Sekretariát primátora</span></div>
            <div>Tel.: <a href="tel:+421566722665"> +421 56 672 2665 </a></div>
            <div>
              Mobil:

              <a href="tel:+421905592107"> +421 905 592 107 </a>
            </div>
            <div>
              E-mail:
              <a href="mailto:hippova.katarina@trebisov.sk">
                hippova.katarina@trebisov.sk
              </a>
            </div>
          </li>
        </ul>
      </div>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <div class="cover">
        <h4 class="label">Identifikačné údaje</h4>
        <ul class="list list_identifikacne">
          <li class="item">
            <span class="bold">Bankové spojenie:</span> Všeobecná úverová banka,
            a.s. pobočka Trebišov
          </li>
          <li><span class="bold">Číslo účtu:</span> 19325622/0200</li>
          <li><span class="bold">IBAN:</span> SK39 0200 0000 0000 1932 5622</li>
          <li><span class="bold">SWIFT/BIC:</span> SUBASKBX</li>
        </ul>
      </div>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <h4 class="label">Úradné hodiny</h4>
      <ul class="list_schedule">
        <li class="item_schedule" v-for="(oneDay, i) in scheduleData" :key="i">
          <span>{{ oneDay.day }}</span>
          <span>{{ oneDay.time }}</span>
        </li>
      </ul>
      <h4 class="label">Doplňujúce infromácie</h4>

      <p>
        Mestský úrad zabezpečuje organizačné, administratívne a hospodárske veci
        mestského zastupiteľstva, primátora, mestskej rady, komisií MsZ a Výboru
        mestskej časti Milhostov.
        <br /><br />Mestský úrad zabezpečuje výkon originálnej pôsobnosti
        samosprávy (originálne kompetencie) aj výkon prenesenej pôsobnosti
        štátnej správy (prenesené kompetencie). <br /><br />Mestský úrad najmä
      </p>

      <ul>
        <li>
          zabezpečuje písomnú agendu všetkých orgánov mesta a je podateľňou a
          výpravňou písomností,
        </li>
        <li>
          zabezpečuje odborné podklady a iné písomnosti na rokovanie MsZ, MsR,
          komisií a výboru,
        </li>
        <li>vypracúva písomné vyhotovenia rozhodnutí mesta,</li>
        <li>pripravuje návrhy a vykonáva uznesenia MsZ a rozhodnutia mesta,</li>
        <li>
          odborne a metodicky usmerňuje mestom zriadené organizácie a založené
          spoločnosti.
        </li>
      </ul>

      <div>
        <a
          :href="require('@/assets/pdf/test.pdf')"
          target="_blank"
          title="Štatút mesta Trebišov"
          class="govuk-link-custom link"
        >
          Organizačná štruktúra mestského úradu
        </a>

        <span class="link_size"> (PDF, 181.32 kB)</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import MapComponent from "../../components/MapComponent.vue";

export default {
  name: "MestskyUtulokVIew",
  data() {
    return {
      dataMap: {
        name: "Mestská polícia Trebišov",
        street: "M. R. Štefánika 862/204",
        city: "075 25 Trebišov",
        text: "Prízemie v budove Mestského úradu v Trebišove",
        img: "mestsky-urad.jpg",
      },
      subpages: [
        {
          title: "O mestskom úrade",
          route: "/o-mestskom-urade",
        },
        {
          title: "Prednosta",
          route: "/",
        },
        {
          title: "Oddelenia",
          route: "/",
        },
        { title: "Strediská", route: "/" },
        { title: "Oznamy", route: "/" },
        { title: "Oznamy o úmrtiach", route: "/" },
        { title: "Strategické dokumenty", route: "/" },
        { title: "Všeobecne záväzné nariadenia", route: "/" },
        { title: "Cenník", route: "/" },
      ],
      scheduleData: [
        {
          day: "pondelok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "utorok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "streda:",
          time: "nestránkový deň",
        },
        {
          day: "štvrtok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "piatok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
      ],
    };
  },
  components: { MapComponent },
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
.cover {
  padding-bottom: 30px;
}
.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.item:first-child {
  margin-right: 72px;
}

.mb-24 {
  margin-bottom: 24px;
}

.list_identifikacne {
  flex-direction: column;
}

.list_schedule {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item_schedule {
  width: 100%;
  max-width: 430px;
  display: flex;
  justify-content: space-between;
}
</style>
