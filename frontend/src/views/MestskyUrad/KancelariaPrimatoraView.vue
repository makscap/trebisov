<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Kancelária primátora</h1>
      <p>Kancelária primátora zabezpečuje činnosti najmä v oblastiach:</p>
      <ul>
        <li>
          organizačná a administratívna agenda mestského zastupiteľstva a
          mestskej rady,
        </li>
        <li>
          verejné zhromaždenia obyvateľov mesta a stretnutia občanov s
          primátorom,
        </li>
        <li>
          organizačná, administratívna a hospodárska agenda primátora, zástupcu
          primátora a prednostu,
        </li>
        <li>
          právna pomoc všetkým orgánom mesta, mestským organizáciám a oddeleniam
          mestského úradu,
        </li>
        <li>
          zastupovanie mesta na súde, prokuratúre, polícii a iných orgánoch a
          inštitúciách,
        </li>
        <li>konania o priestupkoch a správnych deliktoch,</li>
        <li>poskytovanie informácií pri slobodnom prístupe k informáciám,</li>
        <li>výkon a metodické usmerňovanie verejného obstarávania,</li>
        <li>koordinácia rozpočtového procesu a finančnej kontroly,</li>
        <li>poskytovanie dotácií,</li>
        <li>
          komunikácia s verejnosťou, styk s médiami, propagácia aktivít mesta,
        </li>
        <li>vzťahy s partnerskými mestami v zahraničí,</li>
        <li>správa webového sídla.</li>
      </ul>
      <hr class="idsk-crossroad-line" aria-hidden="true" />

      <div>
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
      </div>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "../../components/ContactCard.vue";

export default {
  name: "StatutMestaView",
  data() {
    return {
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
.contact_list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.contact_item {
  margin-bottom: 16px;
}
</style>
