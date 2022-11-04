<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Oprava rodného čísla</h1>
      <p>
        Osoba, ktorej bolo zmenené rodné číslo je podľa § 8 ods. 6 zákona NR SR
        č. 301/1995 Z.z. o rodnom čísle, povinná bezodkladne požiadať o zmenu v
        dokladoch, v ktorých bolo rodné číslo nesprávne uvedené (občiansky
        preukaz, cestovný doklad, rodný list)
      </p>

      <h4 class="label">Potrebné doklady</h4>
      <ul>
        <li>rodný list,</li>
        <li>občiansky preukaz.</li>
      </ul>

      <h4 class="label">Poplatok</h4>
      <p>
        bez poplatku, poplatok za vydanie nového rodného listu s opraveným
        rodným číslom je 5 Eur
      </p>
      <h4 class="label">Vybavuje</h4>
      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "VydaniePrvehoObcianskehoPreukazuView",
  data() {
    return {
      contactsData: [
        {
          name: "Kvetoslava Koščová",
          position: "referentka pre evidenciu obyvateľov a stavieb",
          location: "Mestský úrad, 1. poschodie, kancelária č. 118",
          phone: ["+421 56 6713 313"],
          mobil: ["+421 917 872 622"],
          email: ["koscova@trebisov.sk"],
        },
      ],
    };
  },
  components: { ContactCard },
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
</style>
