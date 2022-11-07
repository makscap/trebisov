<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Oddelenie finančné</h1>
      <p>Oddelenie finančné zabezpečuje činnosti najmä v oblastiach:</p>
      <ul>
        <li>rozpočet a záverečný účet,</li>
        <li>účtovníctvo a fakturácia,</li>
        <li>finančné výkazníctvo,</li>
        <li>evidencia a inventarizácia majetku,</li>
        <li>personalistika a mzdy,</li>
        <li>
          príspevky na tvorbu a udržanie pracovných miest a na aktivačnú
          činnosť,
        </li>
        <li>zúčtovanie cestovných náhrad,</li>
        <li>bezhotovostný platobný styk,</li>
        <li>pokladňa,</li>
        <li>úverové vzťahy,</li>
        <li>vzťahy so štátnym rozpočtom a finančnými fondami,</li>
        <li>správa miestnych daní a miestneho poplatku,</li>
        <li>súdne a exekučné vymáhanie pohľadávok,</li>
        <li>evidencia samostatne hospodáriacich roľníkov.</li>
      </ul>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
      <MapComponent :dataMap="dataMap" />
      <h4 class="label">Kontaktné informácie</h4>

      <!-- <div>
        <h4 class="label">Kontaktné informácie</h4>
        <ul class="contact_list">
          <li class="contact_item">
            <span class="bold">Telefón: </span>
            <a href="tel:+421566722665" className="phone"> +421 56 672 2665 </a>
          </li>
          <li class="contact_item">
            <span class="bold">Fax: </span>
            <a href="tel:+421566726668" className="phone">
              +421 56 672 66 68
            </a>
          </li>
        </ul>
      </div> -->

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "OddelenieFinancneView",
  data() {
    return {
      dataMap: {
        name: "Mestská polícia Trebišov",
        street: "M. R. Štefánika 862/204",
        city: "075 25 Trebišov",
        text: "Prízemie v budove Mestského úradu v Trebišove",
        img: "mestsky-urad.jpg",
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
  components: { ContactCard, MapComponent },
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
</style>
