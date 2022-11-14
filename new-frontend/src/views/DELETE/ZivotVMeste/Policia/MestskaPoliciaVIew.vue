<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestská polícia</h1>
      <MapComponent :dataMap="dataMap" />
      <h2 class="label">Kontaktné informácie</h2>

      <ContactCard :contactsData="contactsData" />

      <h2 class="label">Doplňujúce infromácie</h2>

      <p>
        Mestská polícia vykonáva svoju služobnú činnosť denne v rámci pracovných
        zmien takto:
      </p>
      <p>
        1. zmena <span>06.00 - 18.00</span> h<br />
        2. zmena <span>18.00 - 22.00</span> h<br />
        Podľa potreby nočná zmena 18.00 - 06.00 h
      </p>
      <hr class="idsk-crossroad-line mb-30" aria-hidden="true" />

      <div class="phones-wrap">
        <div class="phones-item">
          <p class="blue bold font-24">Čísla tiesňového volania</p>
          <div class="bold"><span class="blue">SOS</span> 112</div>
          <div class="bold"><span class="blue">Hasiči</span> 150</div>
          <div class="bold"><span class="blue">Lekárska služba</span> 155</div>
          <div class="bold"><span class="blue">Polícia</span> 158</div>
        </div>
        <div class="phones-item">
          <p class="blue bold font-24">Poruchy - telefónne čísla</p>
          <div class="bold">
            <span class="blue">Elektrina</span> 0850 12 33 33
          </div>
          <div class="bold"><span class="blue">Plyn</span> 0850 11 17 27</div>
          <div class="bold"><span class="blue">Voda</span> 056 671 24 20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import MapComponent from "@/components/MapComponent.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "MestskaPoliciaVIew",
  data() {
    return {
      dataMap: {
        name: "Mestská polícia Trebišov",
        floor: "",
        street: "M. R. Štefánika 862/204",
        city: "075 25 Trebišov",
        text: "Prízemie v budove Mestského úradu v Trebišove",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.5684959092014!2d21.717158915395018!3d48.61810242554974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac828a6bd4d%3A0x5072021515176a92!2zTWVzdHNrw6EgcG9sw61jaWEgVHJlYmnFoW92!5e0!3m2!1sru!2ssk!4v1668003156585!5m2!1sru!2ssk",
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
      scheduleData: [
        {
          day: "pondelok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "utorok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "streda:",
          time: "nestránkový deň",
        },
        {
          day: "štvrtok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
        },
        {
          day: "piatok:",
          time: "7.30 - 11.30 h	 	12.00 - 15.30 h",
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
<style lang="scss" scoped>
.cover {
  padding-bottom: 30px;
}
.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.item:first-child {
  margin-right: 72px;
}

.mb-24 {
  margin-bottom: 24px;
}

.list_identifikacne {
  flex-direction: column;
}

.list_schedule {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item_schedule {
  width: 100%;
  max-width: 430px;
  display: flex;
  justify-content: space-between;
}

.phones-wrap {
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
  padding: 45px 52px;
  background-color: #f3f2f1;
  border-radius: 4px;
}

.phones-item {
  margin-right: 52px;
}
.phones-item:last-child {
  margin-right: 0px;
}
</style>
