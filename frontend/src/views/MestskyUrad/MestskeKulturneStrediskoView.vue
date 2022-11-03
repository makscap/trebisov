<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestské kultúrne stredisko</h1>
      <p>Mestské kultúrne stredisko zabezpečuje činnosti najmä v oblastiach:</p>
      <ul>
        <li>organizovanie a realizácia mestských kultúrnych podujatí,</li>
        <li>divadelné, hudobné a podobné umelecké predstavenia,</li>
        <li>
          strategické zámery a koncepčné riešenia rozvoja kultúry v meste,
        </li>
        <li>
          vytváranie priaznivých podmienok pre kultúrnu a záujmovo-umeleckú
          činnosť,
        </li>
        <li>
          koordinovanie kultúrnych aktivít na území mesta a spolupráca s
          ostatnými kultúrnymi inštitúciami v meste pri projektoch, v ktorých je
          mesto partnerom alebo účastníkom,
        </li>
        <li>
          spolupráca v oblasti kultúry s právnickými osobami a fyzickými osobami
          na mimomestskej národnej i medzinárodnej úrovni najmä vo vzťahu k
          partnerským mestám,
        </li>
        <li>vyhľadávanie možností finančnej podpory v oblasti kultúry</li>
      </ul>
      <h4 class="label">Kontaktné informácie</h4>
      <div class="info">
        <div class="name bold">Mestské kultúrne stredisko</div>
        <div class="street">M. R. Štefánika 53</div>
        <div class="city">075 01 Trebišov</div>
      </div>
      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "MestskeKulturneStrediskoView",
  data() {
    return {
      contactsData: [
        {
          name: "Ing. Jozef Kereštan",
          position: "vedúci strediska",
          location: "Mestský úrad, 5. poschodie, kancelária č. 503",
          mobil: ["+421 56 6713 336"],
          fax: ["+421 915 790 369"],
          email: ["kerestan@trebisov.sk"],
        },
      ],
    };
  },
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
  components: { ContactCard },
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
.info {
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
  margin-bottom: 30px;
}
</style>
