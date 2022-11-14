<template>
  <ul class="list">
    <li class="item" v-for="(message, i) in messages" :key="i">
      <div class="author-block">
        <img src="@/assets/icons/person.svg" alt="back" class="icon" />
        <a href="http://www.trebisov.sk" class="link" v-if="isLinkActive">{{
          message.name
        }}</a>
        <span class="link" v-if="!isLinkActive">{{ message.name }}</span>
        <span class="date">{{ message.date }}</span>
      </div>
      <div class="message-block">{{ message.text }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListMessages",
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
  methods: {},
  props: {
    isLinkActive: Boolean,
  },
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
  flex-direction: column;
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
  margin-bottom: 9px;
}

.name {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #094e99;
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
</style>
