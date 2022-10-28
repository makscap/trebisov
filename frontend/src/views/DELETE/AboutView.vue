<template>
  <div class="text-container govuk-width-container">
    <h1 class="govuk-heading-l">Čo je BECEP</h1>
    <div class="row">
      <h4 class="govuk-heading-s black">
        Becep je skratka slov - BEZPEČNOSŤ CESTNEJ PREMÁVKY.
      </h4>
    </div>
    <h4 class="govuk-heading-s black">
      BECEP je zároveň samostatné oddelenie, ktoré patrí do pôsobnosti
      Ministerstva dopravy a výstavby SR. Plní úlohu<br />národného koordinátora
      pre zvyšovanie bezpečnosti cestnej premávky v SR. <br />
      <br />Hlavnými úlohami BECEP-u sú:
    </h4>
    <ul class="becep-text">
      <li>
        <p>
          Koordinácia a plnenie úloh Národnej stratégie Slovenskej republiky pre
          bezpečnosť cestnej premávky na roky 2021 – 2030, ktorú schválila vláda
          SR uznesením č. 700/2021 z 1. decembra 2021;
        </p>
      </li>
      <li>
        <p>
          Preventívne pôsobenie na znižovanie počtu usmrtených a ťažko zranených
          osôb pri dopravných nehodách do roku 2030 o 50 % ich počtu z roku
          2020;
        </p>
      </li>
      <li>
        <p>
          Preventívne pôsobenie na postupné znižovanie počtu usmrtených a ťažko
          zranených osôb pri dopravných nehodách na nulový počet do roku 2050
          (Vízia nula);
        </p>
      </li>
      <li>
        <p>
          Organizácia a podpora osvetových, vzdelávacích, výchovných a
          propagačných podujatí pre zvyšovanie bezpečnosti na cestách;
        </p>
      </li>
      <li>
        <p>Komunikácia dôležitých tém o bezpečnosti cestnej</p>
      </li>
      <li>
        <p>
          Príprava legislatívnych a strategických materiálov, ktoré majú vzťah k
          bezpečnosti cestnej premávky;
        </p>
      </li>
      <li>
        <p>
          Medzinárodná spolupráca s ostatnými štátmi EÚ v oblasti bezpečnosti
          cestnej premávky.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "AboutView",
  setup() {
    useMeta({
      title: "Čo je BECEP",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Becep je skratka slov - BEZPEČNOSŤ CESTNEJ PREMÁVKY. BECEP je zároveň samostatné oddelenie, ktoré patrí do pôsobnosti Ministerstva dopravy a výstavby SR. Plní úlohu národného koordinátora pre zvyšovanie bezpečnosti cestnej premávky v SR.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
};
</script>

<style scoped>
.text-container {
  width: 80%;
}
.black {
  color: black !important;
}
ul,
ol {
  list-style: unset;
}
.row {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#subtitle-becep {
  margin-bottom: 3vh;
  font-size: 19px;
  line-height: 25px;
  font-weight: 700;
}
.becep-text {
  margin-left: 2vw;
  text-align: start;
  margin-bottom: 70px;
  font-size: 19px;
  font-weight: 400;
  line-height: 25px;
}
@media screen and (max-width: 570px) {
  .row h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
  }

  .row {
    flex-wrap: wrap;
  }

  #subtitle-becep {
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
}
</style>
