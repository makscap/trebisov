<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Harmonogram vývozu komunálneho odpadu</h1>
      <h2>
        HARMONOGRAM VÝVOZU KOMUNÁLNEHO ODPADU - 110/120 L ZBERNÉ NÁDOBY –
        RODINNÉ DOMY
      </h2>
      <ul class="list">
        <li v-for="(day, i) in days" :key="i" class="item">
          <h3>{{ day.name }}</h3>
          <p>{{ day.text }}</p>
        </li>
      </ul>

      <h2>
        HARMONOGRAM VÝVOZU KOMUNÁLNEHO ODPADU - 110/120 L ZBERNÉ NÁDOBY –
        RODINNÉ DOMY
      </h2>

      <h3 class="">Pondelok – Streda – Piatok - Sobota</h3>
      <p class="bold">
        HARMONOGRAM ZBERU VYTRIEDENÝCH ZLOŽIEK KOMUNÁLNEHO ODPADU – PAPIER,
        PLAST, SKLO - BYTOVÉ DOMY:
      </p>

      <p>
        Vytriedené zložky komunálneho odpadu: papier, plast a sklo sa zbierajú
        prostredníctvom 1100 l kontajnerov, určených na separovaný odpad a
        umiestnených v kontajnerových stojiskách na jednotlivých sídliskách
        mesta. Vývoz týchto kontajnerov sa realizuje podľa potreby.
      </p>
      <p class="bold">
        HARMONOGRAM ZBERU VYTRIEDENÝCH ZLOŽIEK KOMUNÁLNEHO ODPADU - PAPIER,
        PLAST, SKLO, KOV a ELEKTROODPAD - RODINNÉ DOMY:
      </p>

      <p>
        Podľa zákona č. 79/2015 Z. z. o odpadoch a o zmene a doplnení niektorých
        zákonov je mesto alebo obec povinné zabezpečiť separáciu odpadových
        komodít vznikajúcich v domácnostiach pri tvorbe komunálneho odpadu.
      </p>
      <p>
        Na základe toho bol vypracovaný zberový kalendár na vývoz separovaných
        komodít - PAPIER, SKLO, PLAST, KOV, TETRAPAKY a ELEKTROODPAD z rodinných
        domov v meste Trebišov.
      </p>
      <p>
        Vývoz separovanej komodity PAPIER a SKLO sa bude uskutočňovať
        <span>v poslednom týždni daného mesiaca</span> - stále štvrtok.
      </p>

      <p>
        Vývoz separovanej komodity PLAST, KOV a TETRAPAKY sa bude uskutočňovať
        <span>v prvom a predposlednom týždni daného mesiaca</span> - stále
        štvrtok.
      </p>
      <p>
        Vývoz separovanej komodity ELEKTROODPAD sa bude uskutočňovať v mesiacoch
        <span
          >marec, jún, september a december, v prvom týždni daného mesiaca</span
        >
        – stále štvrtok.
      </p>
      <p>
        Technické služby mesta Trebišov žiadajú občanov mesta, aby svoj
        separovaný odpad vyložili pred rodinný dom <span>do 7.00 hod.</span>!
      </p>

      <h3>Prílohy:</h3>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "HarmonogramVyvozuView",
  data() {
    return {
      days: [
        {
          name: "Pondelok:",
          text: "M. R. Štefánika, Poštová, Švermova, I.Krasku, Záhradná, Bitúnková, 29. augusta, Duklianskych hrdinov, Jarková, 8. marca, Budovateľská, Hradišská, Ondavská.",
        },
        {
          name: "Utorok:",
          text: "Gorkého, Rybárska, Dobrovoľnícka, J. Jesenského, Kapušanská, Paričovská, Májová, Lesná, Petrovova, Muškátová, Roľníckeho povstania, Ružová, Východná, Západná, Jarná, SNP, Dargovská, Hviezdna, Gagarinova, Slnečná, Stredná.",
        },
        {
          name: "Streda:",
          text: "Milhostov, Mlynská, Nižnianska, Repná.",
        },
        {
          name: "Štvrtok:",
          text: "T. G. Masaryka, Sládkovičova, Stavebná, Krajná, Slovenská, A. Dubčeka, Čeľovská, Konečná, 17. novembra, Svätoplukova, J. Záborského, J. Kráľa, Kalinčiakova, Puškinova, Šafárikova, Čsl. armády.",
        },
        {
          name: "Piatok:",
          text: "Varichovská, Moyzesova, Palárikova, Parková, Kvetná, Športová, Radová, Krátka, Hollého, Lúčna, Košická, Agátová, Drehňovská, Orgovánová, Kukučínova, Ternavská, Rastislavova, L. Svobodu, Pribinova, Sadovská.",
        },
      ],
      files: [
        {
          name: "Úroveň vytriedenia komunálneho odpadu v meste Trebišov za rok 2021",
          size: "200.75 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Úroveň vytriedenia komunálneho odpadu v meste Trebišov za rok 2020",
          size: "200.04 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Úroveň vytriedenia komunálneho odpadu v meste Trebišov za rok 2019",
          size: "200.14 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Úroveň vytriedenia komunálneho odpadu v meste Trebišov za rok 2018",
          size: "304,33 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Triedenie odpadu na zbernom dvore Technických služieb mesta Trebišov",
          size: "90.42 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Spôsob separovania, uloženia a zberu vyseparovaných zložiek komunálneho odpadu",
          size: "101.14 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Ako správne separovať odpad",
          size: "237.67 kB",
          ext: "JPG",
          urlFile: "/",
        },
        {
          name: "Nehádžme peniaze do koša (Infolist č. 6/2020)",
          size: "46.04 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Množstvový zber zmesového komunálneho odpadu (Infolist č. 7/2020)",
          size: "225.85 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Popis systému nakladania s odpadmi",
          size: "358.47 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Kompostovanie",
          size: "1.1 MB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Komunitné kompostovanie",
          size: "1.12 MB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Predchádzanie vzniku odpadov",
          size: "628.2 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Neplytvajte potravinami",
          size: "657.97 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Plán vývozu separovaných zložiek komunálneho odpadu na rok 2022",
          size: "464.67 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent },
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

.list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.item {
  padding: 24px 39px;
  background-color: #f3f2f1;
  margin-bottom: 15px;
}

.item h3 {
  color: #024497 !important;
  margin-bottom: 10px !important;
}
</style>
