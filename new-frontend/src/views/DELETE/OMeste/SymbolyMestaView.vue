<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Symboly mesta</h1>
      <p>Mestské symboly sú:</p>

      <h2 class="label">Erb mesta</h2>

      <div class="erb_box_1">
        <img
          class="image"
          src="../../assets/images/erbs/erb-trebisov-1.png"
          alt="erb"
        />
      </div>

      <p>
        Erb mesta tvorí v modrom neskorogotickom štíte z veľkého položeného a
        prevráteného strieborného lemeša vyrastajú tri zlaté bezosté klasy
        sprevádzané dvoma zlatými hviezdičkami, vpravo hore menšie ľavošikmo
        sklonené strieborné čerieslo.<br />
        <br />
        Najstarším historickým prameňom erbu mesta je pečatidlo z roku 1695, v
        štíte ktorého sú figúry čeriesla, lemeša, klasov a hviezdičiek. Staršou
        podobou erbu mesta je predloha pochádzajúca z 15. storočia, ktorá
        dokazuje používanie pečate Trebišova s vyobrazením obrazu Panny Márie.
      </p>

      <h2 class="label">Mestská vlajka</h2>

      <div class="erb_box_2">
        <img
          class="image"
          src="../../assets/images/erbs/erb-trebisov-2.png"
          alt="house"
        />
      </div>

      <p>
        lajka mesta Trebišov pozostáva z pravidelne sa dvakrát opakujúcich troch
        pozdĺžnych pruhov vo farbe bielej, žltej a modrej. Vlajka je zakončená
        dvoma cípmi.
      </p>

      <h2 class="label">Pečať mesta</h2>

      <p>
        Pečať mesta Trebišov tvorí erb mesta Trebišov s kruhopisom: „MESTO
        TREBIŠOV“.
      </p>

      <h2 class="label">Insígnie</h2>
      <p>
        Insígnie predstavujú kovovú primátorskú reťaz na ktorej je upevnená
        kruhová medaila s vyobrazením erbu mesta s nápisom Mesto Trebišov.<br />Používa
        ich primátor mesta, zástupca primátora mesta, alebo poverený poslanec
        pri:
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
.erb_box_1 {
  width: 111px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.erb_box_2 {
  width: 176px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
