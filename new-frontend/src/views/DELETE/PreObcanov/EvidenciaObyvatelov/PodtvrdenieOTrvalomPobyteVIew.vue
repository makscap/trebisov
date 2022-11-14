<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Potvrdenie o trvalom pobyte</h1>
      <p>
        Trvalý pobyt je pobyt v mieste stáleho bydliska občana. Potvrdenie o
        trvalom pobyte sa vydáva napríklad k rozvodovému konaniu, pre stavebnú
        sporiteľňu, k sobášu, k žiadosti o vydanie osvedčenia o štátnom
        občianstve, k žiadosti o príspevku na bývanie, odkúpenie bytu, k pôžičke
        a podobne.
      </p>

      <p class="label_blue">Potrebné doklady</p>
      <ul>
        <li>Občiansky preukaz</li>
      </ul>
      <p>
        <span class="label_blue">Doba vybavenia: </span>Vybavenie potvrdenia je
        na počkanie
      </p>
      <p><span class="label_blue">Poplatok:</span> 5,- €</p>
      <p class="label_blue mb-30">Vybavuje</p>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PodtvrdenieOTrvalomPobyteVIew",
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
.label_blue {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
</style>
