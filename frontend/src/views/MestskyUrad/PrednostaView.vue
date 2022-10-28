<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Prednosta MsÚ</h2>

    <div class="textbox">
      <div class="textbox_child_first">
        <img class="card-img" src="../../assets/primator.jpg" alt="house" />
      </div>
      <div class="textbox_child_second">
        <div class="idsk-crossroad__item label">Mgr. Peter Sovák</div>

        <ul class="contact_list">
          <li>
            Telefón:
            <a href="tel:+421566722665" className="phone">
              +421 56 672 26 65
            </a>
          </li>
          <li>
            E-mail:
            <a href="mailto:primator@trebisov.sk" className="email">
              primator@trebisov.sk
            </a>
          </li>
        </ul>
      </div>

      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>

    <div class="content">
      <p>
        Mestský úrad vedie a jeho prácu organizuje prednosta, ktorého vymenúva a
        odvoláva primátor.<br /><br />
        Prednosta je zamestnancom mesta, ktorý je v priamej riadiacej právomoci
        primátora a zodpovedá mu za svoju činnosť.<br /><br />
        Prednosta najmä
      </p>
      <ul>
        <li>
          zúčastňuje sa zasadnutí mestského zastupiteľstva, mestskej rady,
          komisií a výboru s hlasom poradným,
        </li>
        <li>
          spolu s primátorom podpisuje zápisnice mestského zastupiteľstva a
          mestskej rady,
        </li>
        <li>
          zastupuje navonok mestský úrad vo vzťahu k štátnej správe, samospráve,
          inštitúciám a verejnosti,
        </li>
        <li>
          priamo riadi, kontroluje a koordinuje činnosť a prácu vedúcich
          oddelení,
        </li>
        <li>
          navrhuje primátorovi personálne obsadenie funkčných miest na mestskom
          úrade,
        </li>
        <li>
          pripravuje návrhy všetkých pracovnoprávnych záležitostí zamestnancov
          mesta vrátane návrhov platov a odmien,
        </li>
        <li>
          schvaľuje nástup na dovolenku a pracovnú cestu vedúcim oddelení,
        </li>
        <li>
          v záujme koordinácie a zabezpečovania úloh samosprávnych orgánov a
          mestského úradu zvoláva porady vedúcich oddelení, vedúcich zriadených
          organizácii, ukladá konkrétne úlohy, ktoré pravidelne vyhodnocuje,
        </li>
        <li>
          podľa potreby vydáva pokyny a príkazy na zabezpečenie činnosti a
          mimoriadnych úloh mestského úradu,
        </li>
        <li>
          zabezpečuje spoluprácu mestského úradu a Mestskej polície na základe
          poverenia primátora,
        </li>
        <li>
          realizuje opatrenia s cieľom zabezpečiť účelnú prácu oddelení a iných
          útvarov mestského úradu s dôrazom na zvyšovanie efektívnosti a
          výkonnosti mestského úradu,
        </li>
        <li>
          ukladá úlohy v oblasti zabezpečenia materiálno-technického vybavenia
          mestského úradu,
        </li>
        <li>
          vydáva príkazy na odbornú prípravu a vzdelávanie zamestnancov mesta,
        </li>
        <li>
          poskytuje súčinnosť pri kontrolách vykonávaných štátnou správou,
        </li>
        <li>
          niektoré svoje právomoci môže preniesť v čase neprítomnosti na
          povereného vedúceho oddelenia mestského úradu,
        </li>
        <li>plní ďalšie úlohy podľa rozhodnutí primátora.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
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
  margin-bottom: 50px;
}

.card-img {
  width: 100% !important;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px;
}

.textbox_child_second {
  padding-left: 30px;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #0b0c0c;
}
.contact_list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.phone,
.email {
  display: inline-block;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
}
</style>
