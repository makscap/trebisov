<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <div class="image_box relative">
        <img class="image" src="@/assets/trebisov_house.jpg" alt="house" />
        <h1 class="govuk-heading-l title_abs">
          Vitajte v 3. ročníku participatívneho rozpočtu mesta Trebišov!
        </h1>
      </div>

      <h4 class="label">Pravidlá hlasovania:</h4>

      <ul>
        <li>
          Projekt, ktorý chcete podporiť, označte tlačidlom „Vybrať projekt“.
        </li>
        <li>
          Je potrebné vybrať si 3 projekty. Každý projekt dostáva len 1 hlas.
          Vybrané projekty sa Vám objavujú vpravo hore v boxe „Vybrané
          projekty“. V tejto fáze ešte môžete meniť projekty, obsah „košíka“ sa
          dá ľahko zmeniť.
        </li>
        <li>Keď máte všetky projekty vybrané, kliknite na „Hlasovať“.</li>
        <li>Otvorí sa formulár s názvom „Hlasovať“.</li>
        <li>
          Po vyplnení tohto formulára zadajte číslo Vášho mobilného telefónu.
          Kliknete na „Poslať overovací kód“.
        </li>
        <li>
          Následne bude na Vami zadané telefónne číslo zaslaný kód formou sms.
          Ten vpíšete do formulára, ktorý finálne odošlete cez tlačidlo
          „Poslať“.
        </li>
      </ul>

      <p>Zaslanie SMS JE BEZPLATNÉ.</p>

      <h4 class="label">Hlasovanie</h4>

      <StepperComponent />

      <h4 class="label">Informácie</h4>
      <p>
        Hlasovanie je ukončené. O Vašu priazeň sa uchádzalo niekoľko zaujímavých
        občianskych projektov. Ďakujeme, že ste hlasovali a tak rozhodli o tom,
        čo sa v Trebišove zveľadí, skrášli, zmení ...
      </p>
      <p>
        Finančnú podporu z participatívneho rozpočtu získajú 2 projekty s
        najvyšším počtom Vašich hlasov. Nižšie uvádzame konečné výsledky
        hlasovania, ktoré tvoria 100 % celkového rozhodovania. Oficiálne
        výsledky s víťaznými projektmi budú publikované aj na webovom sídle a
        fanpage mesta Trebišov.
      </p>
      <p>Ďakujeme všetkým za účasť na hlasovaní!</p>
      <p>
        OZNAM: Aktuálna situácia súvisiaca so šírením ochorenia COVID-19
        obmedzila chod prakticky celej spoločnosti, výnimkou nie sú ani
        samosprávy. Všetky kultúrne, spoločenské či športové aktivity boli buď
        zrušené, alebo preložené na neurčito.
      </p>
      <p>
        Mesto zohľadňuje aktuálnu pandemickú situáciu, ako aj záujem všetkých
        zainteresovaných využiť v maximálnej miere vynaloženú energiu a prácu,
        ktorá bola investovaná do príprav tohtoročných projektov, jednak zo
        strany mesta, a takisto aj jeho obyvateľov.
      </p>
      <p>
        O všetkých dôležitých zmenách a aktualizáciách harmonogramu
        participatívneho rozpočtu bude verejnosť včas informovaná
        prostredníctvom komunikačných kanálov a platforiem mesta.
      </p>
      <p>
        Ďakujeme za doterajšiu spoluprácu, pochopenie a trpezlivosť. Mesto
        Trebišov
      </p>

      <h4 class="label">Projekty na hlasovanie</h4>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import StepperComponent from "@/components/StepperComponent.vue";

export default {
  name: "HlasovanieOParticipativnomRozpocteView",
  data() {
    return {};
  },
  components: { StepperComponent },
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
.title_abs {
  padding: 0 !important;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff !important;
}
</style>
