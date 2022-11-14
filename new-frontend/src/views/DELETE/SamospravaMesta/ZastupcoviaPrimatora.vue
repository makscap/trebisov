<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Zástupcovia primátora</h1>

      <div class="textbox">
        <div class="textbox_child_first">
          <img class="card-img" src="../../assets/primator.jpg" alt="house" />
        </div>
        <div class="textbox_child_second">
          <div class="idsk-crossroad__item label">PhDr. Marek Čižmár</div>

          <ul class="contact_list">
            <li>
              Telefón:
              <a href="tel:+421566722665" className="phone">
                +421 56 672 26 65
              </a>
            </li>
            <li>
              Fax:
              <a href="tel:+421566726668" className="phone">
                +421 56 672 66 68
              </a>
            </li>
            <li>
              E-mail:
              <a href="mailto:primator@trebisov.sk" className="email">
                primator@trebisov.sk
              </a>
            </li>
          </ul>

          <a
            :href="require('@/assets/pdf/test.pdf')"
            target="_blank"
            title="Štatút mesta Trebišov"
            class="govuk-link-custom link"
          >
            Štruktúrovaný životopis primátora
          </a>
          <div class="link_size">(PDF, 619,7 kB)</div>
        </div>

        <hr class="idsk-crossroad-line" aria-hidden="true" />
      </div>
      <div class="textbox">
        <div class="textbox_child_first">
          <img class="card-img" src="../../assets/primator.jpg" alt="house" />
        </div>
        <div class="textbox_child_second">
          <div class="idsk-crossroad__item label">PhDr. Marek Čižmár</div>

          <ul class="contact_list">
            <li>
              Telefón:
              <a href="tel:+421566722665" className="phone">
                +421 56 672 26 65
              </a>
            </li>
            <li>
              Fax:
              <a href="tel:+421566726668" className="phone">
                +421 56 672 66 68
              </a>
            </li>
            <li>
              E-mail:
              <a href="mailto:primator@trebisov.sk" className="email">
                primator@trebisov.sk
              </a>
            </li>
          </ul>

          <a
            :href="require('@/assets/pdf/test.pdf')"
            target="_blank"
            title="Štatút mesta Trebišov"
            class="govuk-link-custom link"
          >
            Štruktúrovaný životopis primátora
          </a>
          <div class="link_size">(PDF, 619,7 kB)</div>
        </div>

        <hr class="idsk-crossroad-line" aria-hidden="true" />
      </div>
      <div class="content">
        <p>
          Postavenie zástupcu primátora upravuje §13b zákona č. 369/1990 Zb. o
          obecnom zriadení v znení neskorších predpisov. Zástupcu primátora
          poveruje zastupovaním primátor do 60 dní od zloženia sľubu primátora.
          Zástupcom primátora môže byť len poslanec, ktorý je členom mestskej
          rady. Ak má mesto viac ako 20 000 obyvateľov, primátor môže poveriť
          zastupovaním dvoch zástupcov primátora, pričom určí ich poradie.
        </p>
        <p>
          Primátor môže zástupcu primátora kedykoľvek odvolať. Zástupca
          primátora zastupuje primátora v rozsahu určenom v písomnom poverení.
          Pre výkon funkcie je v rozsahu 50% uvoľnený zo zamestnania a mesto mu
          poskytuje odmenu primerane podľa zásad odmeňovania poslancov. Bez
          osobitného poverenia, alebo kým nenastanú okolnosti uvedené nižšie v
          bode B.2., nedisponuje rozhodovacími právomocami a nie je oprávnený
          zaväzovať mesto k plneniu povinností. Primátor poveril zástupcu
          výkonom nasledujúcich činností:
        </p>
        <p>
          <span
            >A. nezávisle od prítomnosti primátora, resp. jeho spôsobilosti na
            výkon funkcie</span
          >
        </p>

        <ul>
          <li>
            zabezpečuje kontakt poslancov s mestom a mestskými organizáciami v
            období medzi zasadnutiami mestského zastupiteľstva
          </li>
          <li>
            zúčastňuje sa na príprave zasadnutí mestskej rady a mestského
            zastupiteľstva
          </li>
          <li>
            koordinuje činnosť komisií a výboru mestskej časti resp. špeciálneho
            útvaru mesta
          </li>
          <li>
            organizuje pracovné rokovania s účasťou odborných zamestnancov mesta
          </li>
          <li>
            zastupuje mesto na spoločenských, kultúrnych a športových
            podujatiach
          </li>
        </ul>

        <p>
          <span>
            B. počas neprítomnosti primátora, resp. jeho nespôsobilosti na výkon
            funkcie
          </span>
        </p>

        <p>
          B.1. ak neprítomnosť, resp. nespôsobilosť nepresiahne nepretržite 30
          dní, potom
        </p>
        <ul>
          <li>
            vykonáva bežné, rutinné úkony, opakujúce sa už pred obdobím
            neprítomnosti, resp. nespôsobilosti, súvisiace s činnosťou mesta,
            mestského úradu a mestského zastupiteľstva
          </li>
          <li>vybavujú bežnú agendu mesta</li>
          <li>zvoláva a vedie zasadnutie mestskej rady</li>
        </ul>

        <p>
          B.2. ak neprítomnosť, resp. nespôsobilosť presiahne nepretržite 30
          dní, potom
        </p>
        <ul>
          <li>vykonáva všetky právomoci primátora v plnom rozsahu.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
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
