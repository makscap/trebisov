<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">O mestskom športovom klube mládeže</h1>

      <h2>MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV</h2>

      <div class="bold">M. R. Štefánika 862/204</div>
      <div class="bold mb-30">075 01 Trebišov</div>

      <p>
        Organizácia je zriadená na plnenie úloh mesta v oblasti telesnej kultúry
        a športu
      </p>
      <p>Hlavné oblasti pôsobenia organizácie:</p>
      <ul class="mb-30">
        <li>Príprava detí a mládeže na aktívnu športovú činnosť,</li>
        <li>
          Zabezpečenie účasti registrovaných hráčov na majstrovských a j
          nemajstrovských súťažiach,
        </li>
        <li>
          Organizovanie športových aktivít pre registrovaných hráčov a
          verejnosť,
        </li>
        <li>
          Zabezpečenie materiálno-technických, personálnych, sociálnych a
          bezpečnostných podmienok na napĺňanie poslania organizácie,
        </li>
        <li>
          Získavanie finančných prostriedkov aj mimo rozpočtu zriaďovateľa.
        </li>
      </ul>

      <ul class="list-none m-0 p-0">
        <li><span class="name">IČO:</span> 00 188 549</li>
        <li><span class="name">DIČ:</span> 2020749973</li>
        <li>
          <span class="name">Bankové spojenie: </span> Prima banka Slovensko,
          a.s. pobočka Trebišov
        </li>
        <li><span class="name">IBAN: </span> SK70 5600 0000 0045 7189 1001</li>
        <li><span class="name">SWIFT Code: </span>KOMASK2X</li>
        <li><span class="name">Riaditeľ: </span>Dušan Kobeľa</li>
        <li>
          <span class="name">E-mail: </span>

          <a href="mailto:mskm@trebisov.sk">mskm@trebisov.sk </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OKlubeView",
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
.name {
  display: inline-block;
  width: 240px;
}
</style>
