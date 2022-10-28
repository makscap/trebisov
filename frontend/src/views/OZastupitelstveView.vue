<template>
  <div class="govuk-width-container main-box w-75">
    <h2 class="govuk-heading-l title">O mestskom zastupiteľstve</h2>

    <div class="content">
      <p>
        Mestské zastupiteľstvo (MsZ) je zastupiteľský zbor mesta zložený z
        poslancov, zvolených v priamych voľbách obyvateľmi mesta na 4 roky.
        Počet poslancov mesta Trebišov je 24. MsZ sa schádza podľa potreby,
        najmenej však raz za tri mesiace.
      </p>

      <p>
        Poslanci prijímajú všeobecné záväzné nariadenia - „mestské zákony“ a tým
        rozhodujú o základných otázkach života mesta.
      </p>
      <h4 class="label">
        Mestské zastupiteľstvo rozhoduje o základných otázkach života mesta,
        najmä je mu vyhradené:
      </h4>
      <ul>
        <li>
          určovať zásady hospodárenia a nakladania s majetkom mesta a s majetkom
          štátu, ktorý užíva, schvaľovať najdôležitejšie úkony týkajúce sa tohto
          majetku a kontrolovať hospodárenie s ním
        </li>
        <li>
          schvaľovať rozpočet mesta a jeho zmeny, kontrolovať jeho čerpanie a
          schvaľovať záverečný účet mesta, schvaľovať emisiu komunálnych
          dlhopisov, rozhodovať o prijatí úveru alebo pôžičky, o prevzatí záruky
          za poskytnutie návratnej finančnej výpomoci so štátneho rozpočtu
        </li>
        <li>
          schvaľovať územný plán mesta alebo jeho časti a koncepcie rozvoja
          jednotlivých oblastí života mesta
        </li>
        <li>
          rozhodovať o zavedení a zrušení miestnej dane alebo miestneho poplatku
          podľa osobitných predpisov
        </li>
        <li>
          určovať náležitosti miestnej dane alebo miestneho poplatku a verejnej
          dávky a rozhodovať o prijatí úveru alebo pôžičky
        </li>
        <li>
          vyhlasovať hlasovanie obyvateľov mesta o najdôležitejších otázkach
          života a rozvoja mesta a zvolávať verejné zhromaždenia občanov
        </li>
        <li>uznášať sa na nariadeniach</li>
        <li>
          schvaľovať dohody o medzinárodnej spolupráci a členstvo mesta v
          medzinárodnom združení
        </li>
        <li>
          určovať organizáciu mestského úradu a určovať plat primátora mesta a
          hlavného kontrolóra
        </li>
        <li>
          zriaďovať funkciu hlavného kontrolóra a určovať mu rozsah pracovného
          úväzku
        </li>
        <li>
          schvaľovať poriadok odmeňovania zamestnancov mesta vypracovaný podľa
          osobitného predpisu
        </li>
        <li>
          zriaďovať, zrušovať a kontrolovať rozpočtové a príspevkové organizácie
          mesta a na návrh primátora vymenúvať a odvolávať ich riaditeľov,
          zakladať a zrušovať obchodné spoločnosti a iné právnické osoby a
          schvaľovať zástupcov mesta do ich štatutárnych a kontrolných orgánov,
          ako aj schvaľovať majetkovú účasť mesta v právnickej osobe
        </li>
        <li>
          schvaľovať združovanie mestských prostriedkov a činností a účasť v
          združeniach, ako aj zriadenie spoločného regionálneho alebo záujmového
          fondu
        </li>
        <li>
          zriaďovať a zrušovať orgány potrebné na samosprávu mesta a určovať
          náplň ich práce
        </li>
        <li>udeľovať čestné občianstvo mesta, mestské vyznamenania a ceny</li>
        <li>
          ustanoviť erb mesta, vlajku mesta, pečať mesta, prípadne znelku mesta
        </li>
      </ul>
      <h4 class="label">Orgánmi mestského zastupiteľstva sú:</h4>
      <ul>
        <li>mestská rada ako iniciatívny, výkonný a kontrolný orgán</li>
        <li>
          komisie mestského zastupiteľstva ako poradné, iniciatívne a kontrolné
          orgány
        </li>
        <li>útvar hlavného kontrolóra ako kontrolný organizačný útvar</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OZastupitelstveView",
  data() {
    return {};
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
  components: {},
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
.main-box {
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.card-img {
  width: 100% !important;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px;
}

.textbox_child_second {
  padding-left: 30px;
}

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

.phone,
.email {
  display: inline-block;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
}
</style>
