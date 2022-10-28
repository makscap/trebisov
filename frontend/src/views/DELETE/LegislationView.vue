<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Právne predpisy</h1>

    <ul class="list">
      <li>
        <h3 class="govuk-heading-s black">
          Zákon č. 8/2009 Z. z. o cestnej premávke a o zmene a doplnení
          niektorých zákonov v znení neskorších predpisov
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2009/8/20220331"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2009/8/20220331
        </a>
      </li>

      <li>
        <h3 class="govuk-heading-s black">
          Vyhláška Ministerstva vnútra Slovenskej republiky č. 9/2009 Z. z.,
          ktorou sa vykonáva zákon o cestnej premávke a o zmene a doplnení
          niektorých zákonov
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2009/9/20220101"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2009/9/20220101
        </a>
      </li>

      <li>
        <h3 class="govuk-heading-s black">
          Nariadenie vlády č. 554/2006 Z. z. o povinnom používaní bezpečnostných
          pásov a detských zadržiavacích zariadení vo vozidlách určitých
          kategórií
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2006/554/20140920"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2006/554/20140920
        </a>
      </li>

      <li>
        <h3 class="govuk-heading-s black">
          Zákon č. 106/2018 Z. z. o prevádzke vozidiel v cestnej premávke a o
          zmene a doplnení niektorých zákonov
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/134/20200901"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/134/20200901
        </a>
      </li>

      <li>
        <h3 class="govuk-heading-s black">
          Vyhláška Ministerstva dopravy a výstavby Slovenskej republiky č.
          134/2018 Z. z., ktorou sa ustanovujú podrobnosti o prevádzke vozidiel
          v cestnej premávkev
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/134/20200901"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/134/20200901
        </a>
      </li>

      <li>
        <h3 class="govuk-heading-s black">
          Zákon č. 135/1961 Z. z. o pozemných komunikáciách (cestný zákon) v
          znení neskorších predpisov
        </h3>
        <a
          class="govuk-link-custom"
          href="https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/1961/135/20210601"
          target="_blank"
        >
          https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/1961/135/20210601
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "LegislationView",
  setup() {
    useMeta({
      title: "Právne predpisy",
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
};
</script>

<style scoped>
.list {
  list-style-type: none;
  padding: 0;
}

.list h3 {
  margin-top: 30px;
  margin-bottom: 6px;
}
</style>
