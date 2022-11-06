<template>
  <div>
    <a @click="$router.go(-1)" class="arrow_box">
      <img src="@/assets/icons/arrow_back.svg" alt="back"
    /></a>
    <h2 class="label">Separovanie odpadu v Trebišove</h2>

    <ul class="list">
      <li class="item" v-for="(message, i) in messages" :key="i">
        <div class="author_block">
          <img src="@/assets/icons/person.svg" alt="back" class="icon" />
          <router-link :to="this.$route.path + '/1'" class="link">
            {{ message.name }}
          </router-link>
          <span class="date">{{ message.date }}</span>
        </div>
        <div class="message_block">{{ message.text }}</div>
      </li>
      <li class="item">
        <div class="message_block">
          <p>
            Na témy vo fóre môžu reagovať len registrovaní užívatelia. Ak si
            prajete reagovať na túto tému, musíte sa prihlásiť
          </p>

          <router-link to="/auth" class="idsk-button submit-table-filter link">
            Prihlásiť sa
          </router-link>
        </div>
      </li>
      <li class="item">
        <div class="message_block">
          <h3>Vložiť príspevok</h3>

          <div class="govuk-form-group">
            <textarea
              class="govuk-textarea"
              rows="5"
              placeholder="Napíšte vašu odpoveď"
            ></textarea>
          </div>

          <button type="submit" class="idsk-button submit-table-filter">
            Odoslať
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopicDescribe",
  data() {
    return {
      messages: [
        {
          name: "Sokolova",
          date: "22.09.2022 17:57",
          text: "Dobrý deň, chcela by som sa vyjadrit na tému separovanie v Trebišove. Ako všetci dobre vieme, mesto Trebisov nám poskytlo úplne nové osobitne separátne koše na plast, sklo a papier. Myšlienka je to pekná, mam pocit , že tieto koše sú aj objemovo väčšie , a tým pádom sa tam zmestí viac separovaného odpadu. No a teraz príde bod zlomu, nad ktorým iba kývem hlavou. Chcela by som sa opýtať každého jedného čo je ‘tam hore’ v našom meste Trebisov, aby mi vysvetlil naco su nám vlastne tieto separátne koše ak tento separovaný odpad aj tak skončí na skládke so zmiešaním odpadom? K čomu je nám potom dobre separovať ak vlastne týmto účel separovania vôbec nedodržujeme? Asi sa mesto rozhodlo aby si ľudia aspoň v hlave mysleli, že ved sme pomohli mestu aj našej planéte ale realita je úplne iná! Je to podľa mna dosť aktuálna téma , ktorú by mal primátor určite čím skôr prediskutovať a niečo s tým robiť. Nie len pre krajšie a čistejšie mesto Trebisov ale aj pre našu planétu , ktorá je už plastmi zaborena dosť. Ďakujem a dúfam, že o tejto problematike bude mesto uvažovať a konať hlavne.",
        },
        {
          name: "Sokolova",
          date: "22.09.2022 17:57",
          text: "Dobrý deň, chcela by som sa vyjadrit na tému separovanie v Trebišove. Ako všetci dobre vieme, mesto Trebisov nám poskytlo úplne nové osobitne separátne koše na plast, sklo a papier. Myšlienka je to pekná, mam pocit , že tieto koše sú aj objemovo väčšie , a tým pádom sa tam zmestí viac separovaného odpadu. No a teraz príde bod zlomu, nad ktorým iba kývem hlavou. Chcela by som sa opýtať každého jedného čo je ‘tam hore’ v našom meste Trebisov, aby mi vysvetlil naco su nám vlastne tieto separátne koše ak tento separovaný odpad aj tak skončí na skládke so zmiešaním odpadom? K čomu je nám potom dobre separovať ak vlastne týmto účel separovania vôbec nedodržujeme? Asi sa mesto rozhodlo aby si ľudia aspoň v hlave mysleli, že ved sme pomohli mestu aj našej planéte ale realita je úplne iná! Je to podľa mna dosť aktuálna téma , ktorú by mal primátor určite čím skôr prediskutovať a niečo s tým robiť. Nie len pre krajšie a čistejšie mesto Trebisov ale aj pre našu planétu , ktorá je už plastmi zaborena dosť. Ďakujem a dúfam, že o tejto problematike bude mesto uvažovať a konať hlavne.",
        },
        {
          name: "Sokolova",
          date: "22.09.2022 17:57",
          text: "Dobrý deň, chcela by som sa vyjadrit na tému separovanie v Trebišove. Ako všetci dobre vieme, mesto Trebisov nám poskytlo úplne nové osobitne separátne koše na plast, sklo a papier. Myšlienka je to pekná, mam pocit , že tieto koše sú aj objemovo väčšie , a tým pádom sa tam zmestí viac separovaného odpadu. No a teraz príde bod zlomu, nad ktorým iba kývem hlavou. Chcela by som sa opýtať každého jedného čo je ‘tam hore’ v našom meste Trebisov, aby mi vysvetlil naco su nám vlastne tieto separátne koše ak tento separovaný odpad aj tak skončí na skládke so zmiešaním odpadom? K čomu je nám potom dobre separovať ak vlastne týmto účel separovania vôbec nedodržujeme? Asi sa mesto rozhodlo aby si ľudia aspoň v hlave mysleli, že ved sme pomohli mestu aj našej planéte ale realita je úplne iná! Je to podľa mna dosť aktuálna téma , ktorú by mal primátor určite čím skôr prediskutovať a niečo s tým robiť. Nie len pre krajšie a čistejšie mesto Trebisov ale aj pre našu planétu , ktorá je už plastmi zaborena dosť. Ďakujem a dúfam, že o tejto problematike bude mesto uvažovať a konať hlavne.",
        },
        {
          name: "Sokolova",
          date: "22.09.2022 17:57",
          text: "Dobrý deň, chcela by som sa vyjadrit na tému separovanie v Trebišove. Ako všetci dobre vieme, mesto Trebisov nám poskytlo úplne nové osobitne separátne koše na plast, sklo a papier. Myšlienka je to pekná, mam pocit , že tieto koše sú aj objemovo väčšie , a tým pádom sa tam zmestí viac separovaného odpadu. No a teraz príde bod zlomu, nad ktorým iba kývem hlavou. Chcela by som sa opýtať každého jedného čo je ‘tam hore’ v našom meste Trebisov, aby mi vysvetlil naco su nám vlastne tieto separátne koše ak tento separovaný odpad aj tak skončí na skládke so zmiešaním odpadom? K čomu je nám potom dobre separovať ak vlastne týmto účel separovania vôbec nedodržujeme? Asi sa mesto rozhodlo aby si ľudia aspoň v hlave mysleli, že ved sme pomohli mestu aj našej planéte ale realita je úplne iná! Je to podľa mna dosť aktuálna téma , ktorú by mal primátor určite čím skôr prediskutovať a niečo s tým robiť. Nie len pre krajšie a čistejšie mesto Trebisov ale aj pre našu planétu , ktorá je už plastmi zaborena dosť. Ďakujem a dúfam, že o tejto problematike bude mesto uvažovať a konať hlavne.",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.arrow_box {
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f2f1;
  border-radius: 4px;
  padding: 0px 27px;
  cursor: pointer;
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

.author_block {
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
.message_block {
  background-color: #f3f2f1;
  padding: 24px 27px;
  border-radius: 0px 0px 4px 4px;
}
</style>
