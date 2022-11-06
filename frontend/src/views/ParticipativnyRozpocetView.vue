<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Participatívny rozpočet</h1>

      <p>
        Participatívny rozpočet mesta Trebišov (ďalej len „PR“) predstavuje
        demokratický nástroj, ktorý umožňuje aktívne zapojenie obyvateľov
        Trebišova priamo do rozhodovacieho procesu o prerozdeľovaní určitej
        časti financií z rozpočtu mesta. Umožňuje im diskutovať o všetkom, čo sa
        týka verejného rozpočtu a politiky a zároveň prijímať relevantné
        rozhodnutia. Obyvatelia mesta Trebišov (ďalej len „mesta“) sa tak môžu
        aktívne angažovať v plánovaní, vytváraní, realizácii a kontrole
        verejných služieb a fungovania samosprávy. Cieľom mesta je
        prostredníctvom PR:
      </p>

      <ul>
        <li>
          vytvoriť nový vzťah medzi samosprávou a občanmi, čo v praxi znamená
          formovanie novej, demokratickejšej formy riadenia a rozhodovania
          obyvateľov mesta, s cieľom priblížiť fungovanie samosprávy širokej
          verejnosti,
        </li>
        <li>
          vytvoriť priestor pre aktivity a záujmy obyvateľov zameraných na
          zlepšenie života v meste;
        </li>
      </ul>
      <p>
        Prostredníctvom PR obyvatelia mesta rozhodujú, ako bude vynaložená časť
        rozpočtu mesta v rámci jedného kalendárneho roka na občianske projekty.
      </p>

      <div class="btn">
        <button type="submit" class="idsk-button submit-table-filter">
          Prejsť na stránku hlasovania
        </button>
      </div>
      <h4 class="label">Prílohy:</h4>

      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "ParticipativnyRozpocetView",
  data() {
    return {
      files: [
        {
          name: "Harmonogram jednotlivých etáp participatívneho rozpočtu mesta Trebišov na rok 2022",
          size: "148.52 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Pravidlá participatívneho rozpočtu",
          size: "16.22 kB",
          ext: "DOCX",
          urlFile: "/",
        },
        {
          name: "Podpisový hárok pre participatívny rozpočet 2022",
          size: "108.87 kB",
          ext: "PDF",
          urlFile: "/",
        },
        {
          name: "Podpisový hárok pre participatívny rozpočet 2022",
          size: "108.87 kB",
          ext: "PDF",
          urlFile: "/",
        },
      ],
    };
  },
  components: { LinksAndSizeComponent },
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
.btn {
  text-align: center !important;
}
</style>
