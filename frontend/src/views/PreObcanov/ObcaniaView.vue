<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Občania a podnety občanov</h1>

      <ul class="list">
        <li v-for="(message, i) in messages" :key="i" class="item">
          <div class="w-75">
            <div v-if="message.question" class="question_box">
              <p>
                <span>{{ message.question.name }}</span
                >, {{ message.question.date }}
              </p>
              <p v-html="message.question.text"></p>
            </div>

            <div v-if="message.answer" class="answer_box">
              <p class="bold">Odpoveď:</p>
              <p v-html="message.answer.text"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "ObcaniaView",
  data() {
    return {
      messages: [
        {
          question: {
            name: "Viera Hrivňáková",
            date: "09.07.2022 17:23",
            text: "Mám otázku na platenie poplatku za komunálny odpad za ubytovaných Ukrajincov v TV v bytových domoch. Mesto TV má informáciu, ktorým vlastníkom bytov poskytlo príspevok na bývanie za ubytovaných. Platia vlastníci bytov mestu poplatok za ich komunálny odpad? Urobilo mesto TV kontrolu, či vlastníci bytov zaplatili za ubytovaných, t.j. užívateľov prenajatých bytov aj poplatok za odpad? Ak nie, znamená to, že sa 'skladáme' ostatní užívatelia na poplatok, ktorí sú povinní zaplatiť vlastníci prenajímaných bytov?",
          },
          answer: {
            text: "Dobrý deň,<br/><br/> občania mesta Trebišov, ktorí ubytovali cudzincov (s povoleným prechodným pobytom na území SR) si riadne splnili oznamovaciu povinnosť v priebehu zdaňovacieho obdobia podľa ustanovenia § 80 zákona č. 582/2004 Z. z. o miestnych daniach a miestnom poplatku za komunálne odpady a drobné stavebné odpady v znení neskorších predpisov, jednak v KBV, ako aj v IBV.<br/><br/> Čo sa týka občanov, ktorí majú status 'odídenec', tak nová právna úprava stanovuje, že takáto osoba s prideleným dočasným útočiskom nebude, podľa zákona o miestnych daniach a miestnom poplatku, daňovníkom. Zároveň takejto osobe nevznikne oznamovacia povinnosť k poplatku za komunálne odpady.<br/><br/> Mgr. Erika Oprysková<br/> referentka pre miestne dane",
          },
        },
        {
          question: {
            name: "Viera Hrivňáková",
            date: "09.07.2022 17:23",
            text: "Mám otázku na platenie poplatku za komunálny odpad za ubytovaných Ukrajincov v TV v bytových domoch. Mesto TV má informáciu, ktorým vlastníkom bytov poskytlo príspevok na bývanie za ubytovaných. Platia vlastníci bytov mestu poplatok za ich komunálny odpad? Urobilo mesto TV kontrolu, či vlastníci bytov zaplatili za ubytovaných, t.j. užívateľov prenajatých bytov aj poplatok za odpad? Ak nie, znamená to, že sa 'skladáme' ostatní užívatelia na poplatok, ktorí sú povinní zaplatiť vlastníci prenajímaných bytov?",
          },
          answer: {
            text: "Dobrý deň,<br/><br/> občania mesta Trebišov, ktorí ubytovali cudzincov (s povoleným prechodným pobytom na území SR) si riadne splnili oznamovaciu povinnosť v priebehu zdaňovacieho obdobia podľa ustanovenia § 80 zákona č. 582/2004 Z. z. o miestnych daniach a miestnom poplatku za komunálne odpady a drobné stavebné odpady v znení neskorších predpisov, jednak v KBV, ako aj v IBV.<br/><br/> Čo sa týka občanov, ktorí majú status 'odídenec', tak nová právna úprava stanovuje, že takáto osoba s prideleným dočasným útočiskom nebude, podľa zákona o miestnych daniach a miestnom poplatku, daňovníkom. Zároveň takejto osobe nevznikne oznamovacia povinnosť k poplatku za komunálne odpady.<br/><br/> Mgr. Erika Oprysková<br/> referentka pre miestne dane",
          },
        },
      ],
    };
  },
  components: {},
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
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  padding: 63px 53px;
  background-color: rgba(243, 242, 241, 0.5);
  margin-bottom: 34px;
}

.item:last-child {
  margin-bottom: 0px;
}

.question_box {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dee0e2;
}
</style>
