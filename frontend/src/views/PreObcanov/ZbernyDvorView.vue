<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Zberný dvor</h1>

      <h3>Technické služby mesta Trebišov, Stavebná 2, Trebišov</h3>
      <h3>Prevádzkový čas:</h3>
      <p class="bold">Apríl – Máj</p>
      <p>
        Pondelok – Piatok: 8.00 – 18:00 hod. <br />
        Sobota: 8.00 – 18:00 hod.
      </p>

      <p class="bold">Jún – August</p>
      <p>
        Pondelok – Piatok: 8.00 – 20:00 hod.<br />
        Sobota: 8.00 – 20: hod.
      </p>

      <p class="bold">September- Október</p>
      <p>Pondelok – Piatok: 8.00 – 18:00 hod.<br />Sobota: 8.00 – 18:00 hod.</p>

      <p class="bold">November- Marec</p>
      <p>Pondelok – Piatok: 8.00 – 16:00 hod.<br />Sobota: 8.00 – 12:00 hod.</p>

      <p>
        Zberný dvor slúži fyzickým osobám s trvalým pobytom v meste Trebišov
        alebo s prechodným pobytom alebo fyzickým osobám, ktoré sú na území
        mesta oprávnené užívať alebo užívajú nehnuteľnosť ale s vydaným
        rozhodnutím mesta s určeným miestnym poplatkom za komunálne odpady a
        drobné stavebné odpady na aktuálny kalendárny rok.
      </p>

      <p>
        Obyvatelia mesta Trebišov majú možnosť bezplatne odovzdať na zbernom
        dvore tieto odpady:
      </p>
      <ul>
        <li>Papier – bez znečistenia ropnými a nebezpečnými látkami</li>
        <li>
          Plasty – bez obsahu a znečistenia ropnými a nebezpečnými látkami
        </li>
        <li>
          PET fľaše (zošliapnuté, stlačené, bez uzáverov) vo fóliových vreciach
        </li>
        <li>
          Kovové obaly - bez obsahu a znečistenia ropnými a nebezpečnými látkami
        </li>
        <li>Sklo – neznečistené nebezpečnými látkami a fľaše bez obsahu</li>
        <li>
          Viacvrstvové obaly (tetrapack) – vypláchnuté vodou, (zošliapnuté,
          stlačené, bez uzáverov)
        </li>
        <li>Objemný odpad – rozobraný na základné časti</li>
        <li>
          Jedlé oleje a tuky z domácností – bez zvyškov potravín, v uzatvorenej
          nádobe
        </li>
        <li>Biologický rozložiteľný odpad zo záhrad – tráva a konáre</li>
        <li>
          Elektroodpad (televízory, rádiá, elektronické hračky, počítačová
          technika, kancelárska technika, telekomunikačná technika, videá,
          žiarovky, žiarivky, lampy, mobily, ohrievače, kávovary, práčky,
          chladničky, elektromotory, ručné elektrické náradie ......)
        </li>
        <li>
          Farby, chemikálie, obaly z farieb a chemikálií – všetky uvedené látky
          sa musia nachádzať v originálnych obaloch so zreteľným označením ich
          názvu
        </li>
      </ul>

      <p>Odpad, ktorý nie je možné odovzdať na zbernom dvore:</p>

      <ul>
        <li>
          Azbest (prípadné informácie na Mestskom úrade v Trebišove alebo na OÚ
          v Trebišove, odbor starostlivosti o ŽP)
        </li>
        <li>
          Pneumatiky – možnosť odovzdať u distribútorov pneumatík bezodplatne
        </li>
        <li>
          Nespotrebované lieky a zdravotnícke pomôcky – možnosť odovzdať v
          lekárni
        </li>
      </ul>

      <p>
        Odpad, ktorého odovzdanie je spoplatnené podľa aktuálne platného VZN o
        miestnych daniach a miestnom poplatku za komunálne odpady:
      </p>

      <ul>
        <li>
          Drobný stavebný odpad bez obsahu škodlivín (zmes betónu, tehál,
          kameniva, obkladačiek, dlaždíc keramiky bez papierových, plastových,
          sklenených obalov)
        </li>
      </ul>

      <p>
        Technické služby mesta Trebišov evidujú druh a pôvodcu odpadov na
        základe dokladu totožnosti (OP).
      </p>

      <p>
        Právnické osoby môžu odpad, ktorý vzniká pri bezprostrednom výkone
        činnosti tvoriacej predmet podnikania alebo činnosti právnickej osoby
        alebo fyzickej osoby podnikateľa ukladať na povolené (riadené) skládky v
        rámci okresu Trebišov za úhradu.
      </p>

      <p class="bold">
        Na zberný dvor je prísny zákaz dovážať a uskladňovať komunálny odpad z
        domácnosti!
      </p>
      <p>Kontaktné údaje:</p>

      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "ZbernyDvorView",
  data() {
    return {
      contactsData: [
        {
          name: "Mgr. Marek Horovský",
          position: "referentka pre evidenciu obyvateľov a stavieb",
          mobil: ["0905 611 931"],
          email: ["ts-horovsky@trebisov.sk"],
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
</style>
