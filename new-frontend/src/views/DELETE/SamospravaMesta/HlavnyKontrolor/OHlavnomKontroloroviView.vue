<template>
  <div class="govuk-width-container parent">
    <div class="content w-75">
      <h1 class="govuk-heading-l title">O hlavnom kontrolórovi</h1>
      <p>
        Hlavný kontrolór mesta bol zvolený na základe uznesenia č. 33/2017 z
        rokovania Mestského zastupiteľstva v Trebišove dňa 24.4.2017.
      </p>
      <p>
        Postavenie hlavného kontrolóra, predpoklady na výkon funkcie, rozsah
        kontrolnej činnosti, pravidlá jej výkonu a úlohy hlavného kontrolóra
        stanovuje § 18 zákona č. 369/1990 Z. z. o obecnom zriadení v znení
        neskorších predpisov.
      </p>

      <h2 class="label">Rozsah kontrolnej činnosti (§ 18d)</h2>

      <ol>
        <li>
          Kontrolnou činnosťou sa rozumie kontrola zákonnosti, účinnosti,
          hospodárnosti a efektívnosti pri hospodárení a nakladaní s majetkom a
          majetkovými právami obce, ako aj s majetkom, ktorý obec užíva podľa
          osobitných predpisov, kontrola príjmov, výdavkov a finančných operácií
          obce, kontrola vybavovania sťažností a petícií, kontrola dodržiavania
          všeobecne záväzných právnych predpisov vrátane nariadení obce,
          kontrola plnenia uznesení obecného zastupiteľstva, kontrola
          dodržiavania interných predpisov obce a kontrola plnenia ďalších úloh
          ustanovených osobitnými predpismi.
        </li>
        <li>
          Kontrolnej činnosti podľa tohto zákona podlieha

          <ul>
            <li>obecný úrad,</li>
            <li>rozpočtové a príspevkové organizácie zriadené obcou,</li>
            <li>
              právnické osoby, v ktorých má obec majetkovú účasť a iné osoby,
              ktoré nakladajú s majetkom obce, alebo ktorým bol majetok obce
              prenechaný na užívanie a to v rozsahu dotýkajúcom sa tohto
              majetku,
            </li>
            <li>
              osoby, ktorým boli poskytnuté z rozpočtu obce účelové dotácie
              alebo návratné finančné výpomoci, či nenávratné finančné výpomoci
              podľa osobitného predpisu v rozsahu nakladania s týmito
              prostriedkami.
            </li>
          </ul>
        </li>
        <li>
          Kontrolná činnosť podľa odseku 1. sa nevzťahuje na konanie, v ktorom v
          oblasti verejnej správy obec rozhoduje o právach, právom chránených
          záujmoch alebo povinnostiach fyzických osôb a právnických osôb.
        </li>
      </ol>

      <h2 class="label">Pravidlá kontrolnej činnosti (§ 18e)</h2>

      <p>
        Hlavný kontrolór pri výkone kontrolnej činnosti postupuje podľa
        pravidiel, ktoré ustanovuje osobitný zákon. Ďalšie podrobnosti o
        pravidlách kontrolnej činnosti môže ustanoviť obec uznesením.
      </p>

      <h2 class="label">Úlohy hlavného kontrolóra (§ 18f)</h2>

      <ol>
        <li>
          Hlavný kontrolór
          <ul>
            <li>vykonáva kontrolu v rozsahu ustanovení § 18d,</li>
            <li>
              predkladá obecnému zastupiteľstvu raz za šesť mesiacov návrh plánu
              kontrolnej činnosti, ktorý musí byť najneskôr 15 dní pred
              prerokovaním v zastupiteľstve zverejnený spôsobom v obci obvyklým,
            </li>
            <li>
              vypracúva odborné stanoviská k návrhu rozpočtu obce a k návrhu
              záverečného účtu obce pred jeho schválením v obecnom
              zastupiteľstve,
            </li>
            <li>
              predkladá správu o výsledkoch kontroly priamo obecnému
              zastupiteľstvu na jeho najbližšom zasadnutí,
            </li>
            <li>
              predkladá obecnému zastupiteľstvu najmenej raz ročne správu o
              kontrolnej činnosti, a to do 60 dní po uplynutí kalendárneho roku,
            </li>
            <li>
              spolupracuje so štátnymi orgánmi vo veciach kontroly hospodárenia
              s prostriedkami pridelenými obci zo štátneho rozpočtu alebo zo
              štrukturálnych fondov Európskej únie,
            </li>
            <li>vybavuje sťažnosti, ak tak ustanovuje osobitný zákon,</li>
            <li>
              je povinný vykonať kontrolu, ak ho o to požiada obecné
              zastupiteľstvo,
            </li>
            <li>plní ďalšie úlohy ustanovené osobitným zákonom.</li>
          </ul>
        </li>
        <li>
          Hlavný kontrolór sa zúčastňuje na zasadnutiach obecného zastupiteľstva
          a obecnej rady s hlasom poradným; môže sa zúčastňovať aj na
          zasadnutiach komisií zriadených obecným zastupiteľstvom.
        </li>
        <li>
          Hlavný kontrolór je oprávnený nahliadať do dokladov, ako aj do iných
          dokumentov v rozsahu kontrolnej činnosti podľa § 18d
        </li>
        <li>
          Hlavný kontrolór je povinný na požiadanie bezodkladne sprístupniť
          výsledky kontrol poslancom alebo starostovi.
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OHlavnomKontroloroviView",
  data() {
    return {
      subpages: [
        {
          title: "O hlavnom kontrolórovi",
          route: "/o-hlavnom-kontrolorovi",
        },
        {
          title: "Plány kontrolnej činnosti",
          route: "/plany-kontrolnej-cinnosti",
        },
        {
          title: "Správy z kontrolnej činnosti",
          route: "/spravy-z-kontrolnej-cinnosti",
        },
        {
          title: "Ostatné dokumenty",
          route: "/ostatne-dokumenty",
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
