<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Povolenie informačných, reklamných a propagačných zariadení
      </h1>

      <p>
        Pre umiestnenie informačných, reklamných a propagačných zariadení na
        území mesta, je nutné povolenie Mesta Trebišov:
      </p>

      <ul>
        <li>
          pokiaľ sa umiestňujú na miestach viditeľných z verejných priestorov a
          pokiaľ sú spojené so stavbou alebo pozemkom
        </li>
        <li>
          ak sa umiestňujú na miestnych komunikáciách a nie sú pevne spojené s
          pozemkom, ale iba voľne položené resp. fixované
        </li>
      </ul>
      <p>
        Ide predovšetkým o zariadenia pre nalepovanie plagátov, informačné
        tabule, pamätné dosky, prípadne pútače, ktoré slúžia obchodným,
        spoločenským, kultúrnym a iným účelom, bez ohľadu na to, či informácia a
        reklama sa realizuje písaným textom, obrazom, príp. svetelným zdrojom.
        Pokiaľ však ide o informačné, reklamné a propagačné zariadenia, ktoré
        nie sú viditeľné z verejných priestranstiev, tieto povolenie stavebného
        úradu nevyžadujú.
      </p>
      <p>
        Podať žiadosť o povolenie zariadení je oprávnený vlastník pozemku alebo
        ten, kto má iné oprávnenie užívať pozemok na požadovaný účel.
      </p>
      <p>
        Podať žiadosť o povolenie zariadenia je oprávnená aj fyzická osoba alebo
        právnická osoba, ktorá má písomnú dohodu s vlastníkom stavby či pozemku
        alebo s tým, kto má časovo neobmedzené právo užívať stavbu resp.
        pozemok, na ktorom sa má zariadenie umiestniť.
      </p>
      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>
          Žiadosť o povolenie informačného, reklamného a propagačného zariadenia
          (tlačivo),
        </li>
        <li>
          vyjadrenie organizácií k žiadosti o umiestnenie dočasných
          informačných, propagačných a reklamných zariadení na území mesta,
        </li>
        <li>dokumentácia zariadenia v dvoch vyhotoveniach, obsahuje najmä:</li>
        <li>situáciu osadenia</li>
        <li>
          technický opis zariadenia, spôsob jeho inštalácie a účinky na okolie
        </li>
        <li>
          výkresy objasňujúce vyhotovenie a funkciu zariadenia, jeho upevnenie
          (nosnú konštrukciu), prípadne elektrickú inštaláciu
        </li>
        <li>
          pre technicky jednoduché zariadenia postačí ako dokumentácia len
          stručný opis zariadenia a jednoduchý náčrt
        </li>
        <li>
          doklady, ktorými žiadateľ preukazuje svoje práva k nehnuteľnosti (list
          vlastníctva, nájomná zmluva)
        </li>
        <li>
          doklady a stanoviská dotknutých orgánov štátnej správy, pokiaľ ich
          vyžadujú osobitné predpisy
        </li>
        <li>
          doklady o rokovaniach s dotknutými orgánmi štátnej správy a s
          účastníkmi konania,
        </li>
        <li>pokiaľ sa uskutočnili</li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní</span>
      </div>

      <h4 class="label">Poplatok:</h4>

      <ul>
        <li>60 Eur, ak je plocha zariadenia do 15 m2 vrátane</li>
        <li>
          200 Eur, ak je plocha zariadenia od 15 m2 do 40 m2 vrátane vrátane
        </li>
        <li>430 Eur, ak je plocha zariadenia nad 40 m2</li>
      </ul>

      <p>
        Od poplatku je oslobodené označenie prevádzky vyplývajúce zo zákona o
        živnostenskom podnikaní.
      </p>

      <h4 class="label">Vybavuje:</h4>
      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "PovolenieInformachnychZariadeniView",
  data() {
    return {
      contactsData: [
        {
          name: "Ing. Miroslav Eliáš",
          position: "referent pre správu majetku",
          location: "Mestský úrad, 3. poschodie, kancelária č. 309",
          phone: ["+421 56 6713 329"],
          mobil: ["+421 905 760 200"],
          email: ["elias@trebisov.sk"],
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
