<template>
  <div class="govuk-width-container">
    <div class="content">
      <div class="image_box relative image_mt">
        <img class="image" src="../../assets/trebisov_house.jpg" alt="house" />
        <h1 class="govuk-heading-l title_abs">Mesto Trebišov</h1>
      </div>

      <div class="info_box w-75">
        <p class="text">
          <span class="bold blue">Kraj:</span> Košický kraj I
          <span class="bold blue">Okres:</span> Trebišov
        </p>
        <p class="text">
          <span class="bold blue">Počet obyvateľov:</span> 23 223
        </p>
        <p class="text">
          <span class="bold blue">Smerové telefónne číslo:</span> 056
        </p>
        <p class="text"><span class="bold blue">PSČ:</span> 075 01</p>
      </div>

      <p class="content w-75">
        Okres Trebišov je prevažne poľnohospodársky kraj. Dominantami sú úrodné
        lány, ovocné sady, zelené záhrady, lužné lesy s prírodnými rezerváciami
        a malebné pahorkatiny so scenériou Slanských vrchov, ktoré poskytujú
        možnosti pre rekreáciu a oddych. Súčasťou regiónu je tokajská
        vinohradnícka oblasť, ktorá má vynikajúce vína najvyššej kvality.
        <br /><br />Kultúrno-historické pamiatky tvoria súčasť nášho národného
        kultúrneho dedičstva. V Trebišove sa nachádza kaštieľ postavený Grófom
        Imrichom Csákym v roku 1786 v neskorobarokovom slohu, ktorý potom
        prebudovala rodina Andrassyovcov momentálne slúži ako vlastivedné
        múzeum. <br /><br />Gotický kostol s neskoršou barokovou úpravou,
        postavený pred rokom 1404. <br /><br />Hrad Parič a panstvo dostali po
        magistrovi Michalovi z rodu Aba (1280) Drugethovci (1319).
        <br /><br />Ochotnícke divadlo má v Trebišove bohatú tradíciu. Dlhé roky
        šíril slávu trebišovského ochotníckeho divadla divadelný súbor
        Potravinár. Je potešiteľné, že na túto tradíciu plynule nadviazal
        ochotnícky divadelný súbor, ktorý nesie názov Divadlo „G“.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "HistoriaMestaTrebisovView",
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
.image_mt {
  margin-top: 30px !important;
}
.title_abs {
  padding: 0 !important;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff !important;
}

.info_box {
  margin-bottom: 30px;
}
.text {
  margin-bottom: 2px !important;
}
</style>
