<template>
  <div>
    <div class="govuk-width-container">
      <img class="hero-image" src="@/assets/vision_zero.png" alt="" />

      <p style="margin-top: 30px">Čo je Vízia nula?</p>

      <h1 class="govuk-heading-l">
        Vízia nula (tiež Vízia 0, anglicky Vision Zero) je medzinárodnou víziou,
        ktorá považuje za neprijateľné, aby došlo k usmrteniu alebo vážnemu
        zraneniu účastníkov cestnej premávky pri dopravných nehodách.
      </h1>

      <p id="vision-zero-text">
        Pre Európsku úniu, vrátane Slovenskej republiky, je v dlhodobom
        horizonte cieľom, aby sa <b> do roku 2050 </b> bezpečnosť v cestnej
        doprave čo najviac priblížila k „vízii nula“, teda
        <b>
          nulovej úmrtnosti pri dopravných nehodách a nulovému počtu ťažkých
          zranení pri dopravných nehodách
        </b>
        na európskych cestách.<br /><br />

        História Vízie nula siaha do roku 1997, kedy bola táto vízia prvýkrát
        prijatá vo Švédsku. Následne sa postupne rozšírila do viacerých krajín a
        za svoju ju prijalo i medzinárodné spoločenstvo, medzi inými Organizácia
        spojených národov (OSN), Svetová zdravotnícka organizácia (WHO) a
        samozrejme Európska únia.<br /><br />

        Slovenská republika ako regulárny člen týchto medzinárodných organizácii
        pristúpila k cieľu dosiahnuť Víziu nula na slovenských cestách na
        <b> Tretej globálnej ministerskej konferencii v Štokholme, </b> kde bola
        vyhlásená
        <b> tretia akčná dekáda bezpečnosti cestnej premávky do roku 2030. </b>
        <br /><br />

        Vláda SR schválila na svojom rokovaní dňa 1. decembra 2021
        <b>
          Národnú stratégiu Slovenskej republiky pre bezpečnosť cestnej premávky
          na roky 2021 - 2030,
        </b>
        ktorej súčasťou a dlhodobým strategickým cieľom je dosiahnutie práve
        Vízie nula.
      </p>
    </div>
    <div class="container-wrapper">
      <div class="govuk-width-container">
        <h1 class="govuk-heading-l">
          Vízia nula bude implementovaná prostredníctvom
        </h1>

        <div class="vision-grid">
          <div class="grid-item">
            <img src="@/assets/Car.svg" alt="" id="car-img" />
            <h5 class="govuk-heading-s black">
              ovplyvňovania postojov účastníkov cestnej premávky
            </h5>
          </div>
          <div class="grid-item">
            <img src="@/assets/People.svg" alt="" id="peoples-img" />
            <h5 class="govuk-heading-s black">
              cielených opatrení zameraných na rizikových účastníkov cestnej
              premávky
            </h5>
          </div>
          <div class="grid-item">
            <img src="@/assets/Safety.svg" alt="" />
            <h5 class="govuk-heading-s black">
              vytvorenia bezpečného dopravného priestoru
            </h5>
          </div>
          <div class="grid-item">
            <img src="@/assets/Danger.svg" alt="" />
            <h5 class="govuk-heading-s black">
              zvýšenia bezpečnosti motorových vozidiel
            </h5>
          </div>
          <div class="grid-item">
            <img src="@/assets/Health.svg" alt="" />
            <h5 class="govuk-heading-s black">
              zabezpečenia rýchlej a efektívnej zdravotnej starostlivosti po
              dopravnej nehode
            </h5>
          </div>
          <div class="grid-item">
            <img src="@/assets/Technologies.svg" alt="" />
            <h5 class="govuk-heading-s black">
              aplikácie moderných technológií
            </h5>
          </div>
        </div>
      </div>
    </div>
    <ActualityComponent :vision="true"></ActualityComponent>
    <div class="banner-container govuk-heading-l">
      <h1>
        Vízia nula je projekt národnej stratégie SR pre<br />bezpečnosť cestnej
        premávky na roky 2021 - 2030
      </h1>
      <div class="squares-left"></div>
      <div class="squares-right"></div>
    </div>

    <ApplicationBanner />
  </div>
</template>

<script>
import ApplicationBanner from "@/components/ApplicationBanner";
import ActualityComponent from "@/components/ActualityComponent";
import { useMeta } from "vue-meta";

export default {
  name: "VisionZeroView",
  setup() {
    useMeta({
      title: "Vízia nula",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Vízia nula (tiež Vízia 0, anglicky Vision Zero) je medzinárodnou víziou, ktorá považuje za neprijateľné, aby došlo k usmrteniu alebo vážnemu zraneniu účastníkov cestnej premávky pri dopravných nehodách.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
  components: {
    ApplicationBanner,
    ActualityComponent,
  },
};
</script>

<style scoped>
.container-wrapper {
  width: 100vw;
  background-color: #fafafa;
  padding: 80px 0;
}
.vision-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.grid-item img {
  margin: 50px;
}

.squares-left {
  z-index: 10;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  height: 109px;
  width: 465px;
  background-image: url("../assets/stvorceky.png");
}
.squares-right {
  transform: rotate(180deg);
  z-index: 10;
  position: absolute;
  background-size: cover;
  bottom: 0;
  right: 0;
  height: 109px;
  width: 465px;
  background-image: url("../assets/stvorceky.png");
}

.banner-container {
  z-index: 0;
  height: 229px;
  margin-top: 70px;
  padding: 20px;
  background-color: #f68b1f;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
}

.banner-container h1 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

.black {
  color: black !important;
}

@media screen and (max-width: 570px) {
  .vision-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .banner-container h1 {
    font-size: 24px;
  }
}
</style>
