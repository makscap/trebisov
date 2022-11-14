<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Vydanie osvedčenia pre samostatne hospodáriaceho roľníka
      </h1>

      <p>
        Žiadateľ písomne oznámi na mestskom úrade ohlásenie činnosti samostatne
        hospodariaceho roľníka.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>občiansky preukaz,</li>
        <li>pri podnikaní podľa živnostenského zákona živnostenský list,</li>
        <li>
          list vlastníctva pri preukázaní vlastníctva hnuteľného, alebo
          nehnuteľného majetku, alebo nájomná zmluva
        </li>
      </ul>
      <h4 class="label">Vybavuje:</h4>

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>
      <p><span class="label_blue">Doba vybavenia: </span> do 30 dní</p>
      <p><span class="label_blue">Poplatok:</span> správny poplatok 6,50 €</p>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";

export default {
  name: "VydanieOsvedceniaView",
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
.label_blue {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
</style>
