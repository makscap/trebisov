<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        V prípade porúch s dodávkou tepla a TUV kontaktujte spoločnosť
        TREBIŠOVSKÁ ENERGETICKÁ, s.r.o.
      </h1>

      <h2 class="bold topic">
        V prípade porúch s dodávkou tepla a teplej úžitkovej vody kontaktujte
        spoločnosť TREBIŠOVSKÁ ENERGETICKÁ, s.r.o. na tel. čísle 0907 936 199.
      </h2>
      <p>
        Spoločnosť <span>Trebišovská energetická, s.r.o.</span> je od roka 2013
        prevádzkovateľom systému centrálnej výroby a distribúcie tepla v meste
        Trebišov. Trebišovská energetická, s.r.o. je súčasťou energetickej
        skupiny Intech Slovakia, s.r.o., ktorá na výrobu energií využíva
        biomasu. Vykurovanie domácností Trebišovčanov teda nezabezpečuje mesto,
        ale spomínaná súkromná spoločnosť.
      </p>
      <p>
        Oznamujeme preto občanom mesta Trebišov - spotrebiteľom, že v prípade
        akýchkoľvek porúch na dodávke tepla a teplej úžitkovej vody je potrebné
        smerovať všetky podnety priamo na spoločnosť Trebišovská energetická,
        s.r.o. Pre odberateľov je k dispozícií 24-hodinová služba na telefónnom
        čísle <span>0907 936 199</span> alebo kontaktujte
        <span>Ing. Emila REŠETÁRA</span> /počas pracovnej doby/ na mobilnom
        čísle <span>0905 294 660</span>.
      </p>
      <p>Ďakujeme za pochopenie.</p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "VPripadePoruchView",
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
.topic {
  color: #0b0c0c !important;
}
</style>
