<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Symboly mesta</h2>

    <p>Mestské symboly sú:</p>

    <h3>Erb mesta</h3>

    <div class="box">
      <img
        class="hero-img"
        src="../assets/images/erbs/erb-trebisov-1.png"
        alt="house"
      />
    </div>

    <p class="content">
      Erb mesta tvorí v modrom neskorogotickom štíte z veľkého položeného a
      prevráteného strieborného lemeša vyrastajú tri zlaté bezosté klasy
      sprevádzané dvoma zlatými hviezdičkami, vpravo hore menšie ľavošikmo
      sklonené strieborné čerieslo.<br />
      <br />
      Najstarším historickým prameňom erbu mesta je pečatidlo z roku 1695, v
      štíte ktorého sú figúry čeriesla, lemeša, klasov a hviezdičiek. Staršou
      podobou erbu mesta je predloha pochádzajúca z 15. storočia, ktorá dokazuje
      používanie pečate Trebišova s vyobrazením obrazu Panny Márie.
    </p>

    <div class="box">
      <img
        class="hero-img"
        src="../assets/images/erbs/erb-trebisov-2.png"
        alt="house"
      />
    </div>

    <p class="content">
      lajka mesta Trebišov pozostáva z pravidelne sa dvakrát opakujúcich troch
      pozdĺžnych pruhov vo farbe bielej, žltej a modrej. Vlajka je zakončená
      dvoma cípmi.
    </p>

    <h3>Pečať mesta</h3>

    <p class="content">
      Pečať mesta Trebišov tvorí erb mesta Trebišov s kruhopisom: „MESTO
      TREBIŠOV“.
    </p>

    <h3>Insígnie</h3>
    <p class="content">
      Insígnie predstavujú kovovú primátorskú reťaz na ktorej je upevnená
      kruhová medaila s vyobrazením erbu mesta s nápisom Mesto Trebišov.<br />Používa
      ich primátor mesta, zástupca primátora mesta, alebo poverený poslanec pri:
    </p>

    <ul>
      <li>slávnostných zasadaniach mestského zastupiteľstva,</li>
      <li>
        oficiálnych prijatiach predstaviteľov politického a verejného života
        Slovenskej republiky,
      </li>
      <li>oficiálnych prijatiach predstaviteľov iných štátov a miest,</li>
      <li>iných významných slávnostných príležitostiach,</li>
      <li>občianskych obradoch organizovaných Mestským úradom</li>
    </ul>
    <p>
      Insígnie mesta uchováva primátor mesta. <br />
      <br />
      Symboly mesta Trebišov sú registrované v Heraldickom registri Slovenskej
      republiky, ktorého agendu spravuje Ministerstvo vnútra SR pod signatúrou
      <br />HR: T-5/1991.
    </p>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SymbolyMestaView",
  data() {
    return {};
  },
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
  components: {},
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
.main-box {
  width: 75%;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 0px !important;
}
.hero-img {
  // width: 100% !important;
}

.box {
  margin-bottom: 35px;
  margin-top: 30px;
}

.box img {
  height: 100%;
}

.content {
  margin-bottom: 50px;
}
</style>
