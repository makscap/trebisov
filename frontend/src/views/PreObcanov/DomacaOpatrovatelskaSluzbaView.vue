<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Domáca opatrovateľská služba</h1>

      <p>
        Mesto Trebišov poskytuje domácu opatrovateľskú službu v byte občana v
        súlade so zákonom č. 448/2008 Z. z. o sociálnych službách, účinným od
        1.1.2014 a Všeobecne záväzným nariadením Mesta Trebišov č. 134/2014 o
        sociálnych službách v platnom znení.
      </p>
      <p>
        Opatrovateľská služba je sociálna služba poskytovaná fyzickej osobe,
        ktorá je odkázaná na pomoc inej fyzickej osoby a jej stupeň odkázanosti
        je najmenej II podľa prílohy č. 3 k zákonu č. 448/2008 Z. z.
        Opatrovateľská služba je poskytovaná v rozsahu 2 až 7,5 h / deň počas
        pracovných dní.
      </p>

      <p>Opatrovateľskú službu nemožno poskytovať fyzickej osobe</p>

      <ul>
        <li>ktorej sa poskytuje celoročná pobytová sociálna služba,</li>
        <li>
          ktorá je opatrovaná fyzickou osobou, ktorej sa poskytuje peňažný
          príspevok na opatrovanie podľa zák. č. 447/2008 Z. z. o peňažných
          príspevkoch na kompenzáciu ťažkého zdravotného postihnutia a o zmene a
          doplnení niektorých zákonov, ak tento zákon o sociálnych službách
          neustanovuje inak,
        </li>
        <li>
          ktorej sa poskytuje peňažný príspevok na osobnú asistenciu podľa
          osobitného predpisu,
        </li>
        <li>
          ktorej je nariadená karanténa pre podozrenie z nákazy prenosnou
          chorobou a pri ochorení touto nákazou.
        </li>
      </ul>

      <p>
        Konanie o odkázanosti na sociálnu službu sa začína spravidla na základe
        písomnej žiadosti fyzickej osoby o posúdenie odkázanosti na sociálnu
        službu.
      </p>

      <p>
        Žiadosť o poskytovanie sociálnej služby - domácej opatrovateľskej služby
        sa podáva obci - mestu podľa miesta trvalého pobytu prijímateľa
        sociálnej služby ako žiadosť o posúdenie odkázanosti na sociálnu službu,
        neoddeliteľnou prílohou ktorej je Lekársky nález, vyplnený všeobecným
        ošetrujúcim lekárom žiadateľa.
      </p>

      <h4 class="label">Doklady k vybaveniu opatrovateľskej služby:</h4>

      <ol>
        <li>Žiadosť o posúdenie odkázanosti na sociálnu službu</li>
        <li>Lekársky nález</li>
        <li>Príjem žiadateľa a spoluposudzovaných osôb</li>
        <li>
          Potvrdenie z ÚPSVaR o nepoberaní peňažného príspevku za opatrovanie,
          resp. peňažného príspevku na osobnú asistenciu.
        </li>
      </ol>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia žiadosti:</h4>
        <span> do 30 dní</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">
          Platby za poskytovanú opatrovateľskú službu:
        </h4>
        <span>
          1,2 € na 1 hodinu opatrovania <br />Podrobnejšie informácie sú uvedené
          vo VZN Mesta Trebišov č. 134/2014 o sociálnych službách.
        </span>
      </div>

      <h4 class="label">Súvisiace predpisy</h4>

      <ul>
        <li>
          <a href="/" className="">
            Zákon č. 448/2008 Z. z. o sociálnych službách
          </a>
        </li>
        <li>
          <a href="/" className="">
            Zákon č. 447/2008 Z. z. o peňažných príspevkoch na kompenzáciu
            ťažkého zdravotného postihnutia a o zmene a doplnení niektorých
            zákonov
          </a>
        </li>
        <li>
          <a href="/" className=""> VZN č. 134/2014 o sociálnych službách </a>
        </li>
      </ul>
      <p class="label mb-30">Vybavuje</p>

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>

      <h4 class="label">Prílohy</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "DomacaOpatrovatelskaSluzbaView",
  data() {
    return {
      contactsData: [
        {
          name: "Mgr. Henrieta Demjanová",
          position: "vedúca oddelenia",
          location: "Mestský úrad, 4. poschodie, kancelária č. 402",
          phone: ["+421 56 6713 338"],
          mobil: ["+421 917 596 326"],
          email: ["demjanova@trebisov.sk"],
        },
      ],

      files: [
        {
          name: "Žiadosť o posúdenie odkázanosti na sociálnu službu",
          size: "60.69 kB",
          ext: "DOCX",
          urlFile: "/",
        },
        {
          name: "Žiadosť o posúdenie odkázanosti na sociálnu službu",
          size: "132.41 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Lekársky nález na účely posúdenia odkázanosti na sociálnu službu",
          size: "17.56 kB",
          ext: "DOCX",
          urlFile: "/",
        },
        {
          name: "Lekársky nález na účely posúdenia odkázanosti na sociálnu službu",
          size: "102.3 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent, ContactCard },
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
</style>
