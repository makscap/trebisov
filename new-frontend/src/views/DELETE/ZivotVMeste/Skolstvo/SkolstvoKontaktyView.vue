<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Kontakt</h1>
      <MapComponent :dataMap="dataMap" />
      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import MapComponent from "@/components/MapComponent.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "SkolstvoKontaktyView",
  data() {
    return {
      dataMap: {
        name: "Mestský úrad",
        floor: "4. poschodie",
        street: "M. R. Štefánika 862/204",
        city: "075 25 Trebišov",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.5102013366322!2d21.71713571539503!3d48.61921812547153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac828a6a2af%3A0xe9c581bb8eaabc11!2zTWVzdHNrw70gw7pyYWQ!5e0!3m2!1sru!2ssk!4v1668002496612!5m2!1sru!2ssk",
      },
      contactsData: [
        {
          name: "JUDr. Martin Galgoczy",
          position: "vedúci kancelárie",
          location: "Mestský úrad, 3. poschodie, kancelária č. 314",
          mobil: ["+421 56 6713 345"],
          fax: ["+421 918 501 259"],
          email: ["galgoczy@trebisov.sk"],
        },
        {
          name: "JUDr. Martin Galgoczy",
          position: "vedúci kancelárie",
          location: "Mestský úrad, 3. poschodie, kancelária č. 314",
          mobil: ["+421 56 6713 345"],
          fax: ["+421 918 501 259"],
          email: ["galgoczy@trebisov.sk"],
        },
        {
          name: "JUDr. Martin Galgoczy",
          position: "vedúci kancelárie",
          location: "Mestský úrad, 3. poschodie, kancelária č. 314",
          mobil: ["+421 56 6713 345"],
          fax: ["+421 918 501 259"],
          email: ["galgoczy@trebisov.sk"],
        },
      ],
    };
  },
  components: { MapComponent, ContactCard },
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
<style lang="scss" scoped></style>
