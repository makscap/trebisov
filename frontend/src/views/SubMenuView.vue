<template>
  <SubMenu :subpages="this.subpages" />
</template>

<script>
import { useMeta } from "vue-meta";
import SubMenu from "../components/MainPage/SubMenu.vue";

export default {
  name: "SubMenuView",
  data() {
    return {
      values: [],
      subpages: [],
      o_meste: [
        { title: "Základné údaje", route: "zakladne-udaje" },
        { title: "História mesta", route: "historia-mesta" },
        { title: "Symboly mesta", route: "symboly-mesta" },
        { title: "Štatút mesta", route: "statut-mesta" },
        { title: "Infolist mesta Trebišov", route: "infolist-mesta" },
      ],
      samosprava_mesta: [
        { title: "Primátor", route: "/" },
        { title: "Zástupcovia primátora", route: "/" },
        { title: "Mestské zastupiteľstvo", route: "/" },
        { title: "Hlavný kontrolór", route: "/" },
        { title: "Úradná tabuľa", route: "/" },
        { title: "Rozpočet", route: "/" },
        { title: "Dotácie", route: "/" },
        { title: "Verejné obstarávanie", route: "/" },
        { title: "Interné predpisy", route: "/" },
        { title: "Zmluvy, faktúry, objednávky", route: "/" },
      ],
      mestsky_urad: [
        { title: "O mestskom úrade", route: "/" },
        { title: "Prednosta", route: "/" },
        { title: "Oddelenia", route: "/" },
        { title: "Strediská", route: "/" },
        { title: "Oznamy", route: "/" },
        { title: "Oznamy o úmrtiach", route: "/" },
        { title: "Strategické dokumenty", route: "/" },
        { title: "Všeobecne záväzné nariadenia", route: "/" },
        { title: "Cenník", route: "/" },
      ],
      pre_obcanov: [
        { title: "Evidencia obyvateľov", route: "/" },
        { title: "Matrika", route: "/" },
        { title: "Karty", route: "/" },
        { title: "Stavebný úrad", route: "/" },
        { title: "Sociálna pomoc", route: "/" },
        { title: "Komunálny odpad", route: "/" },
        { title: "Miestne dane a poplatky", route: "/" },
        { title: "Doprava a komunikácie", route: "/" },
        { title: "Životné prostredie", route: "/" },
        { title: "Informácie", route: "/" },
        { title: "Otázky a odpovede", route: "/" },
        { title: "Ostatné", route: "/" },
      ],
      zivot_v_meste: [
        { title: "Aktuality", route: "/" },
        { title: "Historické a kultúrne pamiatky", route: "/" },
        { title: "Podujatia", route: "/" },
        { title: "Fotogaléria", route: "/" },
        { title: "Kam do mesta", route: "/" },
        { title: "Školstvo", route: "/" },
        { title: "Mestský športový klub mládeže", route: "/" },
        { title: "Polícia", route: "/" },
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

  mounted() {
    this.setValues();
  },
  components: { SubMenu },
  methods: {
    setValues() {
      this.values = this.$route.path;
      switch (this.values) {
        case "/o-meste":
          this.subpages = this.o_meste;
          break;
        case "/samosprava-mesta":
          this.subpages = this.samosprava_mesta;
          break;
        case "/mestsky-urad":
          this.subpages = this.mestsky_urad;
          break;
        case "/pre-obcanov":
          this.subpages = this.pre_obcanov;
          break;
        case "/zivot-v-meste":
          this.subpages = this.zivot_v_meste;
          break;
      }
    },

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
