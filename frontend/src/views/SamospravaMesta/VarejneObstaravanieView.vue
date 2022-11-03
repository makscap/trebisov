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

      <h3 class="idsk-crossroad__item label govuk-heading-m">
        Profil verejného obstarávateľa
      </h3>

      <ListLinks title="" :links="links" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ListLinks from "../../components/ListLinks.vue";

export default {
  name: "VarejneObstaravanieView",
  data() {
    return {
      links: [
        { name: "Mesto Trebišov", url: "/mesto-trebisov" },
        {
          name: "Technické služby mesta Trebišov",
          url: "/technicke-sluzby-mesta",
        },
        {
          name: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
          url: "/mestsky-sportovy-klub-mladeze",
        },
        {
          name: "Základná umelecká škola",
          url: "/zakladna-umelecka-skola",
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
  components: { ListLinks },
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
