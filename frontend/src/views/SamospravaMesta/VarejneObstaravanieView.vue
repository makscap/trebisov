<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Verejné obstarávanie</h1>
      <p>
        Verejným obstarávaním sú pravidlá a postupy podľa zákona č. 25/2006 Z.
        z. o verejnom obstarávaní a o zmene a doplnení niektorých zákonov v
        znení neskorších predpisov, ktorými sa zadávajú zákazky na dodanie
        tovaru, zákazky na uskutočnenie stavebných prác, zákazky na poskytnutie
        služieb a súťaž návrhov.
      </p>

      <h2 class="idsk-crossroad__item label govuk-heading-m">
        Profil verejného obstarávateľa
      </h2>

      <SubPagesMenuVertical :subpages="subpages" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";

export default {
  name: "VarejneObstaravanieView",
  data() {
    return {
      subpages: [
        { title: "Mesto Trebišov", route: "/mesto-trebisov" },
        {
          title: "Technické služby mesta Trebišov",
          route: "/technicke-sluzby-mesta",
        },
        {
          title: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
          route: "/mestsky-sportovy-klub-mladeze",
        },
        {
          title: "Základná umelecká škola",
          route: "/zakladna-umelecka-skola",
        },
      ],
    };
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
  components: { SubPagesMenuVertical },
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
<style lang="scss" scoped></style>
