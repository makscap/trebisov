<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Žiadosť o pridelenie mestského nájomného bytu
      </h1>

      <p>
        Žiadateľ o mestský nájomný byt musí predložiť vyplnenú žiadosť o
        pridelenie bytu na predpísanom tlačive na MsÚ v Trebišove.
      </p>
      <p>
        Na základe platného VZN o prideľovaní mestských nájomných bytov (článok
        3, bodu 3.3) žiadateľ o pridelenie nájomného bytu musí spĺňať tieto
        podmienky:
      </p>
      <h4 class="label">Potrebné doklady:</h4>

      <ul>
        <li>je fyzickou osobou, ktorá dovŕšila 18-ty rok svojho života,</li>
        <li>je osobou spôsobilou na právne úkony,</li>
        <li>
          nie je v meste Trebišov nadpolovičným spoluvlastníkom akéhokoľvek
          bytu, rodinného domu, alebo inej budovy, určenej na trvalé bývanie a
          zároveň, že nemá v tejto nehnuteľnosti trvalý alebo prechodný pobyt,
        </li>
        <li>nie je stavebníkom objektu na trvalé bývanie,</li>
        <li>
          spĺňa finančné predpoklady na uhrádzanie poplatkov za užívanie bytu,
          preukáže príjem zo závislej činnosti, resp. z podnikania alebo iný
          pravidelný príjem,
        </li>
        <li>
          nemá záväzok voči mestu a spoločnostiam, (vrátanie príspevkových a
          rozpočtových organizácii mesta), v ktorých má mesto účasť, resp. boli
          mestom založené alebo zriadené a to z titulu nezaplatenia daní,
          poplatkov alebo iných finančných záväzkov, uvedené ustanovenie sa
          nemusí uplatniť, ak žiadateľ využíva inštitút osobitného príjemcu,
        </li>
        <li>súhlasí so spracovaním a uchovávaním osobných údajov.</li>
      </ul>

      <p>
        Mesto prešetrí opodstatnenosť jednotlivých žiadostí a žiadosť zaeviduje
        do evidencie žiadostí o pridelenie mestského nájomného bytu alebo ju
        zamietne.
      </p>

      <p>
        Spolužiadateľom o pridelenie nájomného bytu môže byť iba manžel alebo
        manželka žiadateľa. Podmienku veku musí spĺňať aspoň jeden z manželov.
        Iné podmienky uvedené v bode 3.3. musí spĺňať každý z manželov. Nájom
        bytu sa primerane spravuje ustanoveniami Občianskeho zákonníka o
        spoločnom nájme bytu manželmi.
      </p>

      <p>
        Komisia bytová po preskúmaní jednotlivých žiadosti predložených na
        prerokovanie a zaradených do evidencie navrhne zoznam na určenie
        nájomcov do bytov a sociálnych bytov a tento predloží mestskému
        zastupiteľstvu na schválenie. Mestské zastupiteľstvo uznesením rozhodne
        o schválení alebo neschválení nájmu bytu určenému nájomcovi.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <p>
        džiadosť o pridelenie mestského nájomného bytu čestné prehlásenie, že je
        žiadateľ spôsobilý na právne úkony
      </p>

      <div class="label_box">
        <h4 class="label inline">Podanie žiadostí:</h4>
        <span> Podateľňa - kancelária prvého kontaktu - prízemie</span>
      </div>
      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> bez poplatku</span>
      </div>

      <h4 class="label">Súvisiace predpisy:</h4>

      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          VZN č. 178/2022 o prideľovaní mestských nájomných bytov
        </a>
      </div>

      <!-- 

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>

       -->
      <h4 class="label">Prílohy</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "ZiadostOPridelenieView",
  data() {
    return {
      files: [
        {
          name: "Zoznam žiadateľov o pridelenie mestských nájomných bytov za obdobie od 01.08.2022 do 31.07.2022",
          size: "54.78 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Žiadosť o pridelenie mestského nájomného bytu + Čestné prehlásenie",
          size: "54.78 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Žiadosť o pridelenie mestského nájomného bytu + Čestné prehlásenie",
          size: "54.78 kB",
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
</style>
