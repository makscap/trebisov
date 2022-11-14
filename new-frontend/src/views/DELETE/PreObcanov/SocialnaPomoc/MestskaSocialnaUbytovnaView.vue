<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestská sociálna ubytovňa</h1>

      <p>
        Mestská sociálna ubytovňa je určená pre fyzické osoby s trvalým pobytom
        na území mesta Trebišov, ktorí nemajú zabezpečené bývanie, alebo nemôžu
        doterajšie bývanie užívať.
      </p>

      <h4 class="label">Odkazy:</h4>

      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          Cenník služieb poskytovaných mestom a mestskými organizáciami
        </a>
      </div>

      <div class="mb-30">
        <ContactCard :contactsData="contactsData" />
      </div>

      <h4 class="label">Prílohy</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "MestskaSocialnaUbytovnaView",
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
          name: "Žiadosť o posúdenie odkázanosti na sociálnu službu",
          size: "60.69 kB",
          ext: "DOCX",
          urlFile: "/",
        },
        {
          name: "Žiadosť o posúdenie odkázanosti na sociálnu službu",
          size: "132.41 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Lekársky nález na účely posúdenia odkázanosti na sociálnu službu",
          size: "17.56 kB",
          ext: "DOCX",
          urlFile: "/",
        },
        {
          name: "Lekársky nález na účely posúdenia odkázanosti na sociálnu službu",
          size: "102.3 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent, ContactCard },
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
.inline {
  display: inline;
}

.label_box {
  margin-top: 30px;
  margin-bottom: 20px;
}
.label_box span {
  font-weight: 400 !important;
}
</style>
