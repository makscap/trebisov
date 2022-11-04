<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Ohlásenie drobnej stavby</h1>

      <p>
        Drobné stavby ktoré plnia doplnkovú funkciu k hlavnej stavbe a ktoré
        nemôžu podstatne ovplyvniť životné prostredie a ich zastavaná plocha
        nepresahuje 25 m2 , výška 5 m a hĺbka 3 m, sa môžu stavať iba na základe
        ohlásenia Mestskému úradu. Za drobnú stavbu sa považujú aj oplotenia,
        prípojky stavieb na verejné rozvodné siete, bazény, atď.
      </p>
      <p>
        Mestský úrad podľa predložených dokladov k ohláseniu drobnej stavby
        určí, či stavebné práce povolí, alebo či k nim žiadateľ potrebuje
        stavebné povolenie.
      </p>
      <p>
        Drobnú stavbu môže stavebník začať stavať až po obdržaní písomného
        oznámenia Mestského úradu, že proti stavbe nemá námietky.
      </p>

      <h4 class="label">Potrebné doklady:</h4>

      <ul>
        <li>ohlásenie drobnej stavby (tlačivo),</li>
        <li>
          jednoduchý situačný náčrt podľa pozemkovej mapy katastra nehnuteľností
          s vyznačením umiestnenia stavby na pozemku a hraníc medzi susednými
          pozemkami s polohou stavieb na nich,
        </li>
        <li>doklad o vlastníctve,</li>
        <li>súhlas spoluvlastníkov, pokiaľ nie sú všetci aj stavebníkmi,</li>
        <li>
          ak ide o stavby uskutočňované svojpomocou, doložiť vyhlásenie
          kvalifikovanej osoby, že bude zabezpečovať vedenie uskutočňovania
          stavby.
        </li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní od podania ohlásenia</span>
      </div>
      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>

      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          Ohlásenie drobnej stavby
        </a>
      </div>
      <h4 class="label">Vybavuje:</h4>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "OhlasenieDrobnejStavbyView",
  data() {
    return {
      contactsData: [
        {
          name: "Ing. Oľga Kačinetzová",
          position: "referentka pre stavebný úrad",
          location: "Mestský úrad, 3. poschodie, kancelária č. 303",
          phone: ["+421 56 6713 323"],
          mobil: ["+421 915 840 267"],
          email: ["kacinetzova@trebisov.sk"],
        },
      ],
    };
  },
  components: { ContactCard },
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
