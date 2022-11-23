<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Vydanie rybárskeho lístka</h1>

      <p>
        Rybárske lístky vydáva Mestský úrad v Trebišove na základe písomnej
        žiadosti fyzickej osoby, ktorá je spôsobilá na právne úkony. Deťom
        mladším ako 15 rokov sa rybársky lístok môže vydať iba so súhlasom
        zákonného zástupcu. Správny poplatok za vydanie rybárskeho lístka je
        stanovený zákonom 145/1995 Z.z. o správnych poplatkoch v znení zákona č.
        583/2003 Z.z.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>platný občiansky preukaz alebo pas,</li>
        <li>ústna žiadosť o vydanie rybárskeho lístka.</li>
      </ul>
      <h4 class="label">Vybavuje:</h4>

      <ContactCard :contactsData="contactsData" />

      <p>
        <span class="label_blue">Doba vybavenia: </span> na počkanie Vydanie
        rybárskeho lístka:
      </p>
      <p>
        <span class="label_blue">Vydanie rybárskeho lístka:</span>
        týždenný 1,50 € <br />
        mesačný 3 € <br />
        ročný 7 € <br />
        trojročný 17 €
      </p>

      <h4 class="label">Od tejto položky sú oslobodení:</h4>
      <ul>
        <li>
          žiaci a študenti stredných a vysokých škôl študijných odborov s
          výučbou rybárstva,
        </li>
        <li>
          zamestnanci štátnej správy s ústredným riadením rybárstva, ktorí majú
          v pracovnej zmluve aktívne vykonávanie rybárstva,
        </li>
        <li>
          odborní zamestnanci na úseku rybárstva, ak majú vykonávanie rybárstva
          vo svojej pracovnej zmluve,
        </li>
        <li>
          zamestnanci Slovenského rybárskeho zväzu, rybárski hospodári a ich
          zástupcovia a osoby ustanovené ako rybárska stráž
        </li>
        <li>osoby do 15 rokov.</li>
      </ul>

      <h4 class="label">Poplatok sa platí v hotovosti v pokladni.</h4>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import { useMeta } from "vue-meta";

export default {
  name: "VydanieRybarskehoView",
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
