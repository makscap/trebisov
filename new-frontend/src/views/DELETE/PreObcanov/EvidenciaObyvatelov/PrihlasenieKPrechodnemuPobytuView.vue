<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Prihlásenie k prechodnému pobytu</h1>
      <h4 class="label">Hlásenie prechodného pobytu</h4>
      <p>
        Prechodný pobyt je pobyt občana mimo miesta trvalého pobytu, kde sa
        občan dočasne zdržiava, ak má trvať viac ako 90 dní; prechodný pobyt je
        tiež pobyt občana trvalo žijúceho v zahraničí, ktorý má na území
        Slovenskej republiky trvať viac ako 90 dní.
        <br /><br />
        Občania sú povinní hlásiť v ohlasovni na MsÚ miesto, začiatok,
        ptredpokladaný čas prechodného pobytu. Ak prechodný pobyt trvá aj po
        skončení predpokladaného času, je občan povinný hlásiť prechodný pobyt
        znova. Zrušenie prechodného pobytu môže občan nahlásiť kedykoľvek v
        priebehu jeho trvania, ak tak neurobí, prechodný pobyt zaniká
        automaticky uplynutím doby, na ktorú bol prihlásený.
      </p>

      <h4 class="label">Potrebné doklady</h4>
      <ul>
        <li>platný občiansky preukaz,</li>
        <li>
          list vlastníctva alebo spoluvlastníctva budovy, nie starší ako tri
          mesiace,
        </li>
        <li>
          písomné potvrdenie odsúhlasené s prihlásením občana na prechodný pobyt
          s osvedčeným podpisom vlastníka, alebo všetkých vlastníkov budovy
          alebo jej časti a nájomcu, ak je budova alebo jej časť v nájme,
        </li>
        <li>
          občan žijúci trvalo v zahraničí predkladá namiesto OP platný cestovný
          doklad SR
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
  name: "PrihlasenieKPrechodnemuPobytuView",
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
