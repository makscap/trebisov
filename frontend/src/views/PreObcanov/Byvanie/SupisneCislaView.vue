<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Určenie súpisného alebo orientačného čísla
      </h1>
      <p>
        NNa základe kolaudačného rozhodnutia určí Mesto Trebišov súpisné a
        orientačné číslo.
      </p>
      <p>
        V zmysle § 7 ods.1 vyhlášky č. 31/2003 Z.z. stavebník zabezpečuje tiež
        pripevnenie a údržbu tabuľky so súpisným číslom a tabuľky s orientačným
        číslom na vlastné náklady.
      </p>
      <p>
        V zmysle § 2 ods. 2 vyhlášky č. 31/2003 Z.z. tabuľka so súpisným a
        tabuľka s orientačným číslom sa umiestňuje vedľa seba tak, aby boli z
        ulice dobre viditeľné a nepôsobili rušivo na vzhľad budovy.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <h4 class="label">Údaje o stavebníkovi:</h4>

      <ol>
        <li>
          ak je stavebník fyzickou osobou:
          <ul>
            <li>meno a priezvisko</li>
            <li>trvalý pobyt</li>
          </ul>
        </li>
        <li>
          ak je stavebník právnickou osobou:
          <ul>
            <li>názov</li>
            <li>sídlo</li>
            <li>IČO</li>
          </ul>
        </li>
      </ol>
      <h4 class="label">
        K určeniu súpisného a orientačného čísla je potrebné ako prílohy doložiť
        fotokópie:
      </h4>

      <ul>
        <li>Žiadosť o určenie súpisného a orientačného čísla</li>
        <li>kolaudačné rozhodnutie</li>
        <li>geometrický plán</li>
      </ul>
      <h4 class="label">Súvisiace predpisy:</h4>
      <div class="mb-30">
        <div class="mb-30">
          <a href="/" target="_blank" title="/" class="govuk-link-custom link">
            Zákon č. 125/2015 Z. z. o registri adries a o zmene a doplnení
            niektorých zákonov
          </a>
        </div>
        <div class="mb-30">
          <a href="/" target="_blank" title="/" class="govuk-link-custom link">
            Vyhláška Ministerstva vnútra Slovenskej republiky č. 142/2015 Z. z.,
            ktorou sa vykonáva zákon č. 125/2015 Z. z. o registri adries a o
            zmene a doplnení niektorých zákonov
          </a>
        </div>
        <div>
          <a href="/" target="_blank" title="/" class="govuk-link-custom link">
            Vyhláška Ministerstva vnútra Slovenskej republiky č. 31/2003 Z. z.,
            ktorou sa ustanovujú podrobnosti o označovaní ulíc a iných verejných
            priestranstiev a o číslovaní stavieb
          </a>
        </div>
      </div>

      <h4 class="label">Vybavuje:</h4>

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>

      <h4 class="label">Prílohy:</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "SupisneCislaView",
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

      files: [
        {
          name: "Žiadosť o určenie súpisného alebo orientačného čísla",
          size: "80.23 kB",
          ext: "RTF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent, ContactCard },
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
