<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Senior karta</h1>

      <div>
        <p>
          Vážení seniori,<br /><br />
          dovoľte prejaviť Vám vďaku a uznanie za Váš doterajší prínos pre naše
          mesto formou SENIOR KARTY, ktorá Vás oprávňuje využívať poskytované
          výhody v kultúrnych a športových stánkoch Mesta Trebišov.
        </p>
        <p>
          <span>
            Nárok na senior kartu má občan s trvalým pobytom v meste Trebišov,
            ktorý dovŕšil vek 65 rokov.
          </span>
        </p>

        <p>
          Senior kartu je možné uplatniť na spoplatnených podujatiach konajúcich
          sa:
        </p>
        <ul>
          <li class="bold">na zimnom štadióne,</li>
          <li class="bold">v športovej hale,</li>
          <li class="bold">vo futbalovom areáli,</li>
          <li class="bold">v areáli vodných športov (letné kúpalisko).</li>
        </ul>

        <p>
          SENIOR KARTU máte možnosť využívať ako bezplatnú vstupenku na vybraný
          typ podujatí v zariadeniach, kde je umiestnený oznam:
        </p>

        <div class="image_karta">
          <img
            class="image"
            src="@/assets/senior_karty.jpg"
            alt="Senior karty"
          />
        </div>

        <p>
          Ponuka a rozsah výhod bude postupne upravovaná. Základné informácie o
          jej využití získate najmä na tejto internetovej stránke.
        </p>
        <p>
          V mene Mesta Trebišov a v mene svojom Vám želám príjemne strávené roky
          zaslúženého odpočinku. Verím, že využijete možnosti, ktoré Vám
          ponúkame ako prejav úcty voči Vašej osobe a úprimne sa teším na naše
          najbližšie spoločné stretnutia.
        </p>

        <p>PhDr. Marek Čižmár, primátor mesta</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SeniorKartaView",
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
.image_karta {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
