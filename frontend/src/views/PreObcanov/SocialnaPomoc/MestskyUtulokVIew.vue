<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Mestský útulok</h1>

      <p>
        V útulku sa fyzickej osobe, ktorá nemá zabezpečené ubytovanie alebo
        nemôže doterajšie bývanie užívať, poskytuje ubytovanie na určitý čas,
        sociálne poradenstvo, pomoc pri uplatňovaní práv a právom chránených
        záujmov, pracovná terapia, nevyhnutné ošatenie a obuv. Ďalej sa utvárajú
        podmienky na vykonávanie nevyhnutnej základnej osobnej hygieny, prípravu
        stravy, výdaj stravy alebo výdaj potravín, pranie, žehlenie a údržbu
        bielizne, šatstva a záujmovú činnosť.
      </p>
      <p>Adresa: Dopravná 2107/1, 075 01 Trebišov</p>

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
  name: "MestskyUtulokVIew",
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
          name: "Žiadosť o prijatie do zariadenia sociálnych služieb Mestský útulok",
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
