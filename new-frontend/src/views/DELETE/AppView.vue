<template>
  <div>
    <div class="govuk-width-container">
      <img class="hero-image" src="@/assets/dopravko.svg" alt="planet" />
      <h3 class="govuk-heading-m regular black" style="margin: 20px 0">
        Cieľ aplikácie
      </h3>

      <h2 class="govuk-heading-l">
        Modernou a hravou formou vzdelávať žiakov a zvyšovať ich povedomie o
        bezpečnosti cestnej premávky a trvalo udržateľnej mobilite.
      </h2>
      <p>
        V jednotlivých hrách aplikácie sú spracované rôzne dopravné situácie
        podľa aktuálnej legislatívy.
      </p>
    </div>

    <div class="banner-container">
      <div class="guideWrapper">
        <img src="@/assets/sprievodca.png" alt="sprievodca illustration" />
      </div>
      <div class="govuk-width-container">
        <h1 class="govuk-heading-l white">
          Aplikácia je vhodná pre žiakov 3. a 4. <br />
          ročníka základných škôl
        </h1>
        <p>Čo nájdete v aplikácii:</p>
        <ul>
          <li>
            <p>
              jednotlivé hry, v ktorých žiaci veku primeranou formou riešia
              dopravné situácie na ceste
            </p>
          </li>
          <li>
            <p>
              panáčika – sprievodcu, ktorý žiakov sprevádza celou aplikáciou a
              vysvetľuje im základné pravidlá cestnej premávky
            </p>
          </li>
          <li>
            <p>
              náučné súťaženie so spolužiakmi, ale aj ostatnými žiakmi z celého
              Slovenska
            </p>
          </li>
          <li><p>odznaky ako odmenu za úspešné prejdenie hier</p></li>
          <li>
            <p>
              vedomostné kvízy od panáčika – sprievodcu, kde si žiaci otestujú
              svoje znalosti a môžu získať „ďalší život“ a pokračovať v hre a
              zároveň vo vzdelávaní
            </p>
          </li>
        </ul>
      </div>
      <div class="friendsWrapper">
        <img src="@/assets/friends.png" alt="friends illustration" />
      </div>
    </div>

    <ApplicationBanner />
  </div>
</template>

<script>
import ApplicationBanner from "@/components/ApplicationBanner";
import { useMeta } from "vue-meta";

export default {
  name: "AppView",
  setup() {
    useMeta({
      title: "Aplikácia pre deti",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Modernou a hravou formou vzdelávať žiakov a zvyšovať ich povedomie o bezpečnosti cestnej premávky a trvalo udržateľnej mobilite.",
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
  },
};
</script>

<style scoped>
.banner-container {
  width: 100%;
  background-color: #4f8136;
  display: flex;
  padding: 50px 0;
  color: white !important;
  margin-top: 50px;
}
ul,
ol {
  list-style: unset;
}

.banner-container p {
  color: white !important;
}
.guideWrapper {
  display: flex;
  align-items: flex-end;
}
.friendsWrapper {
  display: flex;
  align-items: flex-start;
  position: relative;
  right: 10%;
  top: -50px;
}
@media screen and (max-width: 1400px) {
  .friendsWrapper {
    right: 3%;
  }
}

@media screen and (max-width: 1100px) {
  .friendsWrapper {
    right: 0;
  }
}
@media screen and (max-width: 966px) {
  .guideWrapper {
    display: none;
  }
  .friendsWrapper {
    display: none;
  }
}
</style>
