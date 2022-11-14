<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Žiadosť o parkovacie miesto na krytom parkovisku na ulici Berehovskej v
        Trebišove
      </h1>

      <p>
        Mesto Trebišov ako prenajímateľ zabezpečuje stráženie parkovacích miest
        na krytom parkovisku stálou strážnou službou.
      </p>

      <p>Maximálne vyčlenený počet miest na parkovanie: 110 miest.</p>

      <p>Podanie žiadostí: podateľňa - kancelária prvého kontaktu - prízemie</p>

      <p>Poplatok: bez správneho poplatku</p>

      <h4 class="label">Odkazy:</h4>

      <SubPagesMenuVertical :subpages="subpages" />

      <h4 class="label">Vybavuje:</h4>

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>

      <h4 class="label">Prílohy:</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";

export default {
  name: "ZiadostOParkovacieMiestoView",
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
      files: [
        {
          name: "Zoznam žiadateľov o pridelenie parkovacieho miesta na krytom parkovisku na ulici Berehovská k 31.07.2022",
          size: "93.56 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
      subpages: [
        {
          title:
            "Cenník služieb poskytovaných mestom a mestskými organizáciami",
          route: "/",
        },
      ],
    };
  },
  components: { ContactCard, LinksAndSizeComponent, SubPagesMenuVertical },
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
