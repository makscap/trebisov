<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Sociálne služby s použitím telekomunikačných technológií
      </h1>

      <p class="label">
        Monitorovanie a signalizácia potreby pomoci - „Elektronický strážca
        seniorov“
      </p>
      <p>
        Monitorovanie a signalizácia potreby je poskytovaná fyzickej osobe,
        ktorá má trvalý pobyt v meste Trebišov a má nepriaznivý zdravotný stav
        na základe potvrdenia poskytovateľa zdravotnej starostlivosti, s cieľom
        zabrániť vzniku sociálnej krízovej situácie alebo zabezpečenia jej
        riešenia.
      </p>

      <p>
        Monitorovanie a signalizácia potreby pomoci sa vykonáva prostredníctvom
        signalizačného alebo audiovizuálneho zariadenia napojeného na centrálny
        dispečing na Mestskej polícii v Trebišove, ktorý zabezpečí potrebnú
        pomoc.
      </p>

      <p>
        Signalizačné alebo audiovizuálne zariadenie sa poskytuje osobám s
        nepriaznivým zdravotným stavom v zmysle ods. 1 bezodplatne - formou
        výpožičky, pričom sa stanovuje maximálna úhrada za používanie tohto
        zariadenia 9,90 € na jeden mesiac (prvé 3 mesiace zdarma).
      </p>

      <p>
        Podmienky poskytovania tejto sociálnej služby sa určia v zmluve o
        poskytovaní sociálnej služby - Elektronický strážca seniorov uzatvorenej
        medzi mestom Trebišov a fyzickou osobou - prijímateľom sociálnej služby.
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SocialneSluzbyVIew",
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
.label {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
</style>
