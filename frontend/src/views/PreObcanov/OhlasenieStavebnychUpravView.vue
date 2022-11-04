<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Ohlásenie stavebných úprav</h1>

      <p>
        Stavebné úpravy, ktorými sa podstatne nezmení vzhľad stavby, nezasahuje
        sa do nosných konštrukcií stavby, nemení sa spôsob užívania stavby a
        neohrozujú sa záujmy spoločnosti, sa môžu vykonávať iba na základe
        ohlásenia Mestu Trebišov.
      </p>
      <p>
        Mesto Trebišov podľa predložených dokladov k ohláseniu stavebných úprav
        určí, či stavebné práce povolí, alebo k nim žiadateľ potrebuje stavebné
        povolenie.
      </p>
      <p>
        Ohlasované stavebné úpravy môže stavebník vykonať až po doručení
        písomného oznámenia Mesta Trebišov, že proti nim nemá námietky.
      </p>

      <p>
        Stavebník môže začať uskutočňovať ohlásené stavebné úpravy do dvoch
        rokov odo dňa doručenia oznámenia.
      </p>

      <h4 class="label">Potrebné doklady:</h4>

      <ul>
        <li>ohlásenie stavebných úprav (tlačivo),</li>
        <li>
          doklad o vlastníctve (výpis z listu vlastníctva danej nehnuteľnosti
          overený Správou katastra),
        </li>
        <li>zjednodušená projektová dokumentácia,</li>
        <li>správny poplatok - uhradiť v pokladni Mestského úradu:</li>
        <li>fyzická osoba 10 €,</li>
        <li>právnická osoba 30 €,</li>
        <li>
          od poplatku sú oslobodení držitelia preukazu fyzickej osoby s ťažkým
          zdravotným postihnutím alebo preukazu fyzickej osoby s ťažkým
          zdravotným postihnutím so sprievodom,
        </li>
        <li>
          súhlas všetkých spoluvlastníkov, pokiaľ stavebník nie je výlučným
          vlastníkom,
        </li>
        <li>
          písomná dohoda vlastníka stavby, ak stavebné úpravy bude uskutočňovať
          nájomca,
        </li>
        <li>
          stanovisko orgánu štátnej správy pamiatkovej starostlivosti, ak sa
          práce majú uskutočniť na stavbe, ktorá je kultúrnou pamiatkou alebo je
          umiestnená v pamiatkovej rezervácii.
        </li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní od podania ohlásenia</span>
      </div>

      <h4 class="label">Poznámka:</h4>
      <p>
        Odporúčame oznámenie k ohláseniu stavebných úprav bytu zverejniť vo
        vchode bytového domu po celú dobu priebehu stavebných úprav.
      </p>
      <p>
        Ak sú na liste vlastníctva uvedení viacerí vlastníci nehnuteľnosti
        (napr. manželia), je nutný na ohlásení podpis všetkých vlastníkov
        nehnuteľnosti.
      </p>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>

      <h4 class="label">Prílohy:</h4>
      <LinksAndSizeComponent :files="files" />

      <h4 class="label">Vybavuje:</h4>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "OhlasenieStavebnychUpravView",
  data() {
    return {
      files: [
        {
          name: " Ohlásenie stavebných úprav - tlačivo",
          size: "54.78 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
      contactsData: [
        {
          name: "Ing. Jozef Ferjo",
          position: "referent pre regionálny rozvoj",
          location: "Mestský úrad, 4. poschodie, kancelária č. 414",
          phone: ["+421 56 6713 330"],
          mobil: ["+421 917 112 771"],
          email: ["ferjo@trebisov.sk"],
        },
        {
          name: "Ing. Oľga Kačinetzová",
          position: "referentka pre stavebný úrad",
          location: "Mestský úrad, 3. poschodie, kancelária č. 303",
          phone: ["+421 56 6713 323"],
          mobil: ["+421 915 840 267"],
          email: ["kacinetzova@trebisov.sk"],
        },
      ],
    };
  },
  components: { ContactCard, LinksAndSizeComponent },
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
.inline {
  display: inline;
}

.label_box {
  margin-top: 30px;
  margin-bottom: 20px;
}
.label_box span {
  font-weight: 400 !important;
}

.inline {
  display: inline;
}

.label_box {
  margin-top: 30px;
  margin-bottom: 20px;
}
.label_box span {
  font-weight: 400 !important;
}
</style>
