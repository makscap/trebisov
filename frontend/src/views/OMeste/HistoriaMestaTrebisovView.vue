<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">História mesta Trebišov</h2>

    <div class="box">
      <img class="hero-img" src="../../assets/trebisov2.jpg" alt="house" />
    </div>

    <p class="content">
      Trebišov, centrum južného Zemplína, sa rozprestiera v juhozápadnej časti
      Východoslovenskej nížiny, na rozhraní Trebišovskej tabule a Ondavskej
      vrchoviny. Nachádza sa v nadmorskej výške 109 m zväčša na pravom brehu
      potoka Trnávka, prítoku Ondavy. <br />
      <br />Prvá písomná zmienka o Trebišove je z roku 1254. V tom čase bol
      Trebišov spolu s hradom Parič vo vlastníctve šľachtica Andronika z
      Trebišova. Jeho osídlenie je však staršieho dáta. V roku 1319 daroval
      uhorský kráľ Karol Róbert z Anjou hradné panstvo Trebišov Drugethovcom. Od
      roku 1343 bol opäť Trebišov pod vládou kráľovskej rodiny, ktorá ho v roku
      1387 darovala šľachticovi Petrovi z Perína. Perényiovcom patrilo
      trebišovské panstvo 180 rokov. Po bitke pri Moháči (1526) prešlo panstvo
      opäť do rúk Drugethovcov. Menil sa aj názov mesta - Terebes, Felse
      Terebes, Trebissou a Trebišov. <br />
      <br />V latinsky písaných písomnostiach zo stredoveku sa Trebišov
      pravidelne vyskytuje pod názvom Terebes. Jazykovedec Ján Stanislav názov
      Trebišov etymologicky odvodzoval od osobného mena Třebiš a koncovky –ov.
      Takýto výklad prevzal aj historik Branislav Varsik, pričom zdôraznil, že
      názov Trebišov sa vyvinul v slovenskom jazykovom prostredí. Varsík súčasne
      došiel k poznatku, že už od 9. storočia v okolí Trebišova podobne ako
      Vranova, Michaloviec a Sobraniec, trvala nepretržite kontinuita osídlenia,
      obyvateľstva a reči východných Slovákov. <br />
      <br />V 14. -15. storočí sa v Trebišove konalo niekoľko župných
      zhromaždení. Na jednom z nich v novembri 1454 dohodli spoločný postup
      proti bratríkom. Obmedzené mestské práva dostal Trebišov v roku 1439,
      vyvíjal sa však až po novovek ako poddanské mestečko. Od r. 1502 do r.
      1530 tu v novozaloženom kláštore pôsobili paulíni.V 16. storočí boli aj
      vlastníkmi obce. Sto rokov po zrušení (r. 1630) bol kláštor v čase
      protireformácie obnovený. Hrad Parič odolal útokom krýmských Tatárov
      (1566), ale v roku 1620 si ho podmanilo vojsko Gabriela Bethlena. V roku
      1686 ho kuruci pod vedením Imricha Thôkôliho vyhodili do vzduchu. <br />
      <br />Nevyužívaný hrad majitelia Csákyovci r.1786 rozobrali a kameň
      použili na výstavbu blízkeho kaštieľa. Rodina Andrássyovcov zdedila
      kaštieľ v roku 1838, pričom vlastnili 61 % pôdy v trebišovskom chotári.
      <br />
      <br />V roku 1876 sa Trebišov stal sídlom služnovského obvodu a
      spoločnosti pre reguláciu horného toku Bodrogu. Na železnicu bol napojený
      v roku 1871. Koncom 19. storočia došlo k početným vysťahovaleckým vlnám z
      mesta a okolia. Hospodársky život podporovala tunajšia lokalizácia
      cukrovaru (1911-1912) a elektrárne (1911). Po vzniku ČSR sa stal Trebišov
      v roku 1919 sídlom Zemplínskej župy a od roku 1929 sídlom okresu. <br />
      <br />Po 2. sv. vojne tu ožíva priemysel prostredníctvom potravinárskeho
      kombinátu, ktorý pozostával z cukrovaru, mliekárne, čokoládovne Deva,
      konzervárne a droždiarne. Vzdelanostná úroveň obyvateľstva regiónu sa
      zvýšila založením gymnázia, na ktorom sa vyučovanie začalo 12. septembra
      1949. Do dnešných dní brány Gymnázia v Trebišove opustilo vyše 5 000
      absolventov.
    </p>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "ZakladneUdajeView",
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
  width: 100% !important;
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
