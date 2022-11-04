<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Odstránenie stavby</h1>

      <p>
        Konanie o odstránení stavby vykonáva stavebný úrad, ktorý by bol
        príslušný vydať pre stavbu stavebné povolenie.
      </p>
      <p>
        V rozhodnutí, ktorým sa nariaďuje alebo povoľuje odstránenie stavby,
        určí stavebný úrad podmienky na zabezpečenie nevyhnutnej dokumentácie
        odstraňovanej stavby, na odborné vedenie prác a bezpečnosti vrátane
        okolia stavieb, ďalej podmienky vyplývajúce zo všeobecných technických
        požiadaviek na výstavbu a podmienky archivovania dokumentácie.
      </p>
      <p>
        Nariadiť alebo povoliť odstránenie stavby možno iba jej vlastníkovi.
        Žiadosť o povolenie odstránenia stavby podá vlastník stavby písomne.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>
          Žiadosť o povolenie odstránenia stavby, (tlačivo Žiadosť o povolenie
          na odstránenie stavby)
        </li>
        <li>
          doklad, ktorým sa preukazuje vlastnícke alebo iné právo k stavbe alebo
          k pozemkom
        </li>
        <li>
          technologický opis prác alebo aj nevyhnutné výkresy úprav pozemku
        </li>
        <li>
          stavby, vrátane statického posúdenia preukazujúceho zabezpečenie
          mechanickej odolnosti a stability nosných konštrukcií susedných
          stavieb, v prípadoch, ak ide o odstránenie stavby v radovej zástavbe
        </li>
        <li>
          doklady o rokovaniach s dotknutými orgánmi štátnej správy, správcami
          sietí technického vybavenia a s účastníkmi konania, ak sa o odstránení
          stavby viedli vopred
        </li>
        <li>
          pri stavbách, ktorých odstránenie nebude vykonávať odborne vybavená
          právnická osoba, vyhlásenie oprávnenej osoby, ktorá sa zaviazala
          vykonávať odborné vedenie prác spojených s odstránením stavby
        </li>
        <li>
          rozhodnutia, stanoviská, vyjadrenia, súhlasy, posúdenia alebo iné
          opatrenia dotknutých orgánov štátnej správy,
        </li>
        <li>
          ak sa odstraňuje nehnuteľná kultúrna pamiatka, doložiť
          fotodokumentáciu a dokumentačné výkresy stavby.
        </li>
        <li>kópia katastrálnej mapy</li>
        <li>osvedčenie na predmetné práce</li>
        <li>fotodokumentácia stavby</li>
        <li>záväzné stanovisko mesta, obce</li>
      </ul>
      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> 30 - 60 dní od podania žiadosti</span>
      </div>
      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span>
          podľa platného sadzobníka správnych poplatkov, v hotovosti v pokladni
          MsÚ</span
        >
      </div>

      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          Žiadosť o povolenie odstránenia stavby
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
  name: "OdstranenieStavbyView",
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
