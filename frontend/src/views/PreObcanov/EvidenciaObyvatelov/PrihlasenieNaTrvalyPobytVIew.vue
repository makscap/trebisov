<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Prihlásenie na trvalý pobyt</h1>
      <p>
        Občan môže mať v tom istom čase iba jeden trvalý pobyt a na jednom
        mieste. Občan hlási začiatok, miesto a skončenie svojho trvalého pobytu.
      </p>

      <h4 class="label">Potrebné doklady</h4>
      <ul>
        <li>
          platný občiansky preukaz alebo doklad o občianskom preukaze, platný
          cestovný doklad Slovenskej republiky alebo osvedčenie o štátnom
          občianstve Slovenskej republiky nie staršie ako tri mesiace, ak nemá
          občiansky preukaz alebo doklad o občianskom preukaze,
        </li>
        <li>
          ak ide o dieťa do 15 rokov, predkladá jeho zákonný zástupca rodný list
          tohto dieťaťa,
        </li>
        <li>
          doklad o vlastníctve alebo spoluvlastníctve budovy alebo jej časti,
        </li>
        <li>
          písomné potvrdenie o súhlase s prihlásením občana na trvalý pobyt s
          osvedčeným podpisom vlastníka alebo všetkých spoluvlastníkov budovy
          alebo jej časti, a nájomcu, ak je budova alebo jej časť v nájme;
        </li>
        <li>toto potvrdenie sa nevyžaduje, ak:</li>
        <li>ide o prihlásenie vlastníka alebo spoluvlastníka,</li>
        <li>
          ide o prihlásenie nájomcu, ak má nájomnú zmluvu uzavretú s vlastníkom
          alebo so všetkými spoluvlastníkmi na neurčitú dobu,
        </li>
        <li>
          ide o prihlásenie manžela alebo nezaopatreného dieťaťa vlastníka,
          spoluvlastníka alebo nájomcu
        </li>
        <li>
          ak vlastník alebo spoluvlastník budovy alebo jej časti, alebo nájomca,
          ak je budova alebo jej časť v nájme, potvrdí svojím podpisom na
          prihlasovacom lístku na trvalý pobyt súhlas s prihlásením občana na
          trvalý pobyt pred zamestnancom ohlasovne
        </li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> Vybavenie potvrdenia je na počkanie</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>

      <h4 class="label">Súvisiace predpisy</h4>

      <ul>
        <li>
          <a href="/" className="">
            Zákon č. 253/1998 Z. z. o hlásení pobytu občanov Slovenskej
            republiky a registri obyvateľov Slovenskej republiky v znení
            neskorších predpisov
          </a>
        </li>
      </ul>
      <p class="label mb-30">Vybavuje</p>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PrihlasenieNaTrvalyPobytVIew",
  data() {
    return {
      contactsData: [
        {
          name: "Kvetoslava Koščová",
          position: "referentka pre evidenciu obyvateľov a stavieb",
          location: "Mestský úrad, 1. poschodie, kancelária č. 118",
          phone: ["+421 56 6713 313"],
          mobil: ["+421 917 872 622"],
          email: ["koscova@trebisov.sk"],
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

.label_blue {
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
