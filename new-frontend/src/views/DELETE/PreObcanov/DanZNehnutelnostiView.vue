<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Daň z nehnuteľností</h1>

      <p>
        Novelou zákona č. 582/2004 Z. z. o miestnych daniach a miestnom poplatku
        v znení neskorších predpisov nastali určité zmeny v podávaní daňových
        priznaní.
      </p>
      <p>
        Priznanie k dani z nehnuteľností, k dani za psa, k dani za predajné
        automaty a k dani za nevýherné hracie prístroje je daňovník povinný
        podať príslušnému správcovi dane do 31. januára toho zdaňovacieho
        obdobia, v ktorom mu vznikla daňová povinnosť k týmto daniam alebo
        niektorej z nich podľa stavu k 1. januáru zdaňovacieho obdobia.
      </p>
      <p>
        Pokiaľ ide o daňovú povinnosť k dani za psa, k dani za predajné automaty
        a k dani za nevýherné hracie prístroje priznanie k tej dani, ku ktorej
        vznikla daňová povinnosť, najneskôr do 30 dní odo dňa vzniku tejto
        povinnosti.
      </p>
      <p>
        Doposiaľ bola splatná daň za psa do 31. januára zdaňovacieho obdobia bez
        vyrubenia, novelou tohto zákona bude daň za psa vyrubená v spoločnom
        rozhodnutí s daňou z nehnuteľností a jej splatnosť bude uvedená v
        rozhodnutí, ktoré bude daňovníkovi doručené.
      </p>
      <p>
        Do 31. januára 2022 je povinný podať priznanie, resp. čiastkové
        priznanie daňovník, u ktorého nastali zmeny skutočností rozhodujúcich na
        vyrubenie dane:
      </p>
      <p>
        daňovník, ktorý sa v roku 2021 stal vlastníkom nehnuteľností /pozemok,
        stavby, byt, nebytový priestor v bytovom dome/
      </p>
      <p>
        daňovník, u ktorého v roku 2021 zaniklo vlastníctvo k nehnuteľnostiam
        /čiastkové priznanie na zánik daňovej povinnosti/
      </p>
      <p>
        Priznanie sa podáva na spoločnom tlačive pre daň z nehnuteľností, daň za
        psa, daň za predajné automaty a daň za nevýherné hracie prístroje,
        ktorého vzor vydalo Ministerstvo financií SR.
      </p>
      <p>
        Sadzby dane z nehnuteľností sú upravené Všeobecným záväzným nariadením
        č. 164/2019 o miestnych daniach, ktoré nadobudlo účinnosť 1.1.2020.
      </p>
      <p>Daň vypočíta správca dane.</p>

      <h4 class="label">Súvisiace predpisy:</h4>

      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          Zákon č. 563/2009 Z. z. o správe daní (daňový poriadok) a o zmene a
          doplnení niektorých zákonov v znení neskorších predpisov
        </a>
      </div>
      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          Zákon č. 582/2004 Z. z. o miestnych daniach a miestnom poplatku za
          komunálne odpady a drobné stavebné odpady v znení neskorších predpisov
        </a>
      </div>
      <div class="mb-30">
        <a href="/" target="_blank" title="/" class="govuk-link-custom link">
          VZN č. 164/2019 o miestnych daniach
        </a>
      </div>
      <h4 class="label">Vybavuje:</h4>

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
  name: "DanZNehnutelnostiView",
  data() {
    return {
      contactsData: [
        {
          name: "Ing. Viktória Barilová",
          position: "referent pre miestne dane",
          location: "Mestský úrad, 1. poschodie, kancelária č. 105",
          phone: ["+421 56 6713 334"],
          mobil: ["+421 915 759 522"],
          email: ["barilova@trebisov.sk"],
        },
        {
          name: "Erika Raganová",
          position: "referent pre miestne dane",
          location: "Mestský úrad, 1. poschodie, kancelária č. 106",
          phone: ["+421 56 6713 335"],
          mobil: ["+421 915 785 239"],
          email: ["raganova@trebisov.sk"],
        },
      ],

      files: [
        {
          name: "Priznanie k dani z nehnuteľností, k dani za psa, k dani za predajné automaty a k dani za nevýherné hracie prístroje",
          size: "1.19 MB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Poučenie na vyplnenie priznania k dani z nehnuteľností, k dani za psa, k dani za predajné automaty a k dani za nevýherné hracie prístroje",
          size: "250.56 kB",
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
