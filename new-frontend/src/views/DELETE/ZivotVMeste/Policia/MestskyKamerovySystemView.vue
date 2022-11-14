<template>
  <div class="govuk-width-container parent">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestský kamerový systém</h1>

      <p>
        Kamerové systémy patria medzi základné a najdôležitejšie piliere
        bezpečnostných systémov. Tie zabezpečujú ochranu dôležitých hodnôt v
        rôznych záujmových oblastiach. Monitoring prostredníctvom kamier je v
        Trebišove už dlhodobo využívaný pre potreby Mestskej polície Trebišov
        predovšetkým pri odhaľovaní protiprávneho konania, ale aj ako prevencia
        pred vandalizmom.
      </p>
      <p>
        Veľmi dôležitým faktorom, ktorý pôsobí pri umiestnení kamier, je ich
        preventívny účinok, kedy potenciálny páchateľ radšej upustí od nekalých
        úmyslov, lebo si je vedomý, že je monitorovaný a z trestného činu alebo
        priestupku môže byť usvedčený. V prípade protiprávneho konania je možný
        rýchly zásah na pokyn operačného policajta. Záznam obrazu je zároveň
        účinným prostriedkom pri objasňovaní trestnej činnosti a pri operatívnom
        vyhľadávaní páchateľa. Kamerový systém dáva možnosť aj na monitorovanie
        samotného výkonu hliadok mestskej polície, na kontrolu zákazov
        parkovania a podobne.
      </p>

      <p>
        V súčasnosti Mestská polícia Trebišov disponuje 56 ks kamier zapojených
        do mestského kamerového systému a výstupy z neho, či už ide o fotografie
        alebo prezeranie záznamov, sú poskytované, na základe písomnej žiadosti,
        aj príslušným útvarom PZ. Vo všetkých prípadoch boli tieto záznamy
        použité ako dôkazový materiál pri rôznych druhoch trestnej činnosti, či
        už násilného alebo majetkového charakteru, akými sú napr. krádež,
        dopravné nehody, poškodenia motorových vozidiel, lúpežné prepadnutia,
        výtržníctva, ublíženia na zdraví a iné.
      </p>
      <p>
        Mestská polícia v Trebišove chce aj v budúcnosti pokračovať v trende
        rozširovania kamerového systému, resp. v jeho modernizácii, o čom svedčí
        aj podanie žiadosti o poskytnutie dotácie zo štátneho rozpočtu na
        financovanie projektu v oblasti prevencie kriminality pre rok 2018, v
        rámci ktorého má Mesto Trebišov záujem na ďalšom rozšírení kamerového
        systému o 8 nových kamier. Zoznam kamier a ich umiestnenie sú uvedené v
        prílohách.
      </p>

      <p>
        <span>
          Mgr. Miroslav Cabada<br />
          poverený riadením MsP Trebišov
        </span>
      </p>
      <LinksAndSizeComponent :files="data" />

      <h2 class="label">Umiestnenie kamier v meste</h2>

      <div class="image_box">
        <img
          class="image"
          src="@/assets/mestska_policia_rozdelenie_sektorov.jpg"
          alt="Rozdelenie sektorov"
        />
      </div>
      <ArticleGallerySlider />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";
import ArticleGallerySlider from "@/components/ArticleGallerySlider";

export default {
  name: "MestskyKamerovySystemView",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Zoznam kamier a ich umiestnenie",
          ext: "PDF",
          size: "214.79 kB",
        },
      ],
      subpages: [
        {
          title: "Mestská polícia",
          route: "/mestska-policia",
        },
        {
          title: "Okresné riaditeľstvo policajného zboru v Trebišove",
          route: "/",
        },
        {
          title: "Policajné aktuality",
          route: "/",
        },
        {
          title: "Právne predpisy",
          route: "/pravne-predpisy",
        },
        {
          title: "Mestský kamerový systém",
          route: "/",
        },
        {
          title: "Rozdelenie sektorov",
          route: "/rozdelenie-sektorov",
        },
        {
          title: "Rady a informácie",
          route: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent, ArticleGallerySlider },
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
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
</style>
