<template>
  <div>
    <h2 class="label">Pravidlá diskusného fóra</h2>

    <p>
      Pravidlá diskusného fóra ustanovujú pravidlá medzi Mestom Trebišov –
      prevádzkovateľ služby diskusné fórum na webovom sídle
      <a href="http://www.trebisov.sk">www.trebisov.sk</a> (ďalej len
      „prevádzkovateľ“) a užívateľom služieb diskusného fóra (ďalej len
      „užívateľ“).
    </p>

    <p>
      Prevádzkovateľ umožňuje užívateľom prostredníctvom služby diskusné fórum
      vytvárať témy a zasielať príspevky k daným témam, v ktorých môžu
      vyjadrovať svoje názory na aktuálne spoločenské dianie. Diskusné fórum je
      anonymné. Užívateľ zasiela príspevky do diskusného fóra pod určitou
      prezývkou, ktorú si sám zvolí pri registrácii.
    </p>
    <p>
      Za obsah príspevkov v diskusnom fóre zodpovedá užívateľ, ktorý dané
      príspevky do diskusného fóra zaslal. Užívateľ berie na vedomie, že do
      diskusného fóra nie je povolené zasielať príspevky, ktoré sú v rozpore so
      všeobecne záväznými právnymi predpismi SR a v tiež v rozpore so všeobecne
      platnou morálkou a etikou, a to najmä také príspevky, ktoré:
    </p>
    <ul>
      <li>
        Propagujú násilie a podnecujú nenávisť na základe pohlavia, rasy, farby
        pleti, náboženstva alebo národnosti.
      </li>
      <li>
        Propagujú vojnu, terorizmus, kruté a neľudské zaobchádzanie a tiež
        propagujú zbrane a strelivo.
      </li>
      <li>
        Propagujú alkoholické nápoje, alkoholizmus, fajčenie, užívanie drog,
        omamných látok a jedov.
      </li>
      <li>
        Obsahujú vulgarizmy, nadávky, príp. slová, ktoré urážajú, osočujú alebo
        zosmiešňujú jednotlivcov alebo skupinu.
      </li>
      <li>Propagujú politickú stranu alebo jej predstaviteľov.</li>
      <li>
        Poskytujú reklamu fyzickej alebo právnickej osobe, výrobkom alebo
        službám.
      </li>
    </ul>
    <p>
      Neprípustné je tiež opakované vkladanie rovnakých diskusných príspevkov do
      viacerých diskusných tém, napádanie sa a zosmiešňovanie medzi
      diskutujúcimi ( flame war ) a chatovanie medzi 2–3 osobami.
    </p>

    <p>
      Ak bude ktorýkoľvek príspevok užívateľa v rozpore s pravidlami diskusného
      fóra, prevádzkovateľ si vyhradzuje právo tento príspevok neuverejniť,
      zmazať príp. upraviť do podoby vyhovujúcej pravidlám diskusného fóra.
      Prevádzkovateľ si tiež vyhradzuje právo v prípade opakovaného porušovania
      pravidiel u toho istého užívateľa zakázať jeho prístup do diskusného fóra
      a zmazať všetky jeho príspevky. Zaslaním registrácie užívateľ potvrdzuje,
      že si pravidlá diskusného fóra riadne prečítal a zároveň vyjadruje svoj
      súhlas s týmito pravidlami.
    </p>
    <p>
      Odpovede na otázky v tomto diskusnom fóre nie sú nárokovateľné. Na
      odpovede slúži sekcia „Otázky a odpovede".
    </p>
    <p>
      Prispievateľ diskusného fóra súhlasí s uvedenými pravidlami v plnom
      rozsahu bez výhrad. Ak máte pocit, že Vás tieto pravidlá obmedzujú,
      NEPOUŽÍVAJTE prosím toto diskusné fórum.
    </p>
  </div>
</template>

<script>
export default {
  name: "RulesComponent",
  data() {
    return {
      listTopics: [
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
      ],
    };
  },
  methods: {},
  props: {},
};
</script>

<style scoped>
.arrow-box {
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f2f1;
  border-radius: 4px;
  padding: 0px 27px;
  cursor: pointer;
  margin-bottom: 30px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 24px;
}

.item:last-child {
  margin-bottom: 0px;
}

.author-block {
  display: flex;
  background-color: #024497;
  padding: 12px 27px;
  border-radius: 4px 4px 0px 0px;
  color: #ffffff;
}

.icon {
  margin-right: 8px;
}
.date {
  color: #ffffff;
  font-weight: 400 !important;
}

.link {
  color: #ffffff !important;
  margin-right: 8px;
}
.message-block {
  background-color: #f3f2f1;
  padding: 24px 27px;
  border-radius: 0px 0px 4px 4px;
}

.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  background: #f3f2f1;
  border-radius: 4px;
}
.logo-circle {
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-circle svg {
  fill: #024497 !important;
  width: 100%;
  height: 100%;
}

.menu-nav {
  display: flex;

  margin-bottom: 30px;
  box-shadow: 0px 5px 15px rgba(222, 224, 226, 0.53);
  border-radius: 0px 0px 4px 0px;
}
.menu-nav li {
  margin-bottom: 0px !important;
}

.menu-nav__link {
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  position: relative;
  background-color: #ffffff;

  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  padding: 8px 27px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #949494 !important;
}

.menu-nav__link:hover,
.menu-nav__link:focus {
  color: #0065b3 !important;
  text-decoration: none;
}

.menu-nav__link--current {
  color: #0065b3 !important;
}

.menu-nav__link::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #0065b3;
  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
  -webkit-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}

.menu-nav__link:hover::after {
  opacity: 1;
}

.menu-nav__link--current::after {
  opacity: 1;
}

.menu-nav__item:first-child {
  margin-left: 0px;
}

/* List Topics */

.forum {
  display: flex;
}

.menu {
  width: 217px;
  margin-right: 30px;
}

.button_topics {
  width: 217px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0065b3;

  color: #ffffff !important;
  text-decoration: none;
}

.button_rules {
  width: 217px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  color: #0065b3 !important;
  text-decoration: none;
  border-radius: 0px 0px 4px 4px;
}

.topics {
  flex: 1;
  width: 100%;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  padding: 15px 20px;
  background-color: #ffffff;
  border: 1px solid #dee0e2;
  box-shadow: 0px 5px 15px rgba(222, 224, 226, 0.53);
  border-radius: 4px;
  margin-bottom: 5px;
}

.item:last-child {
  margin-bottom: 0px;
}

.column_1 {
  flex: 1;
  margin-right: 30px;
}

.column_1 h3 {
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 7px !important;
}

.column_1 p {
  padding: 0 !important;
  margin: 0 !important;
}

.column_2 {
  width: 120px;
  margin-right: 30px;
}

.column_2 p {
  padding: 0 !important;
  margin: 0 !important;
}

.column_3 {
  width: 140px;
}

.column_3 p {
  padding: 0 !important;
  margin: 0 !important;
}

.topics h2 {
  margin: 0px !important;
}
</style>
