<template>
  <div class="govuk-width-container parent">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Stránkové hodiny OR PZ Trebišov</h1>

      <ul class="p-0 m-0 list-none mb-30">
        <li v-for="(item, i) in workingDays" :key="i" class="item-main">
          <h2>{{ item.title }}</h2>
          <ul class="p-0 m-0 list-none">
            <li class="item">{{ item.location }}</li>
            <li v-for="(day, ind) in item.schedule" :key="ind" class="item">
              <div class="column-1">{{ day[0] }}</div>
              <div class="column-2">{{ day[1] }}</div>
            </li>
            <li v-if="item.text" class="item">{{ item.text }}</li>
          </ul>
        </li>
      </ul>

      <h2>Obhliadky motorových vozidiel</h2>
      <p>
        Kontrola motorových vozidiel sa uskutočňuje na vyhradenom parkovisku pri
        budove OR PZ , každý stránkový deň.
        <span>
          Začínajú o 7:30, pričom sa vykonávajú priebežne počas celej pracovnej
          doby podľa potreby.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StrankoveHodinyView",
  data() {
    return {
      workingDays: [
        {
          title: "Občianske preukazy",
          location: "M. R. Štefánika 2319/180, Trebišov",
          schedule: [
            ["pondelok:", "8:00–15:00"],
            ["utorok:", "8:00–15:00"],
            ["streda:", "8:00–17:00"],
            ["štvrtok:", "8:00–15:00"],
            ["piatok:", "8:00–14:00"],
          ],
          text: "",
        },
        {
          title: "Cestovné doklady",
          location: "M. R. Štefánika 2319/180, Trebišov",
          schedule: [
            ["pondelok:", "8:00–15:00"],
            ["utorok:", "8:00–15:00"],
            ["streda:", "8:00–17:00"],
            ["štvrtok:", "8:00–15:00"],
            ["piatok:", "8:00–14:00"],
          ],
          text: "Vo štvrtok bude naďalej zabezpečené vydanie dokladov urýchlene do dvoch pracovných dní.",
        },
        {
          title: "Zbrojné preukazy",
          location: "M. R. Štefánika 2319/180, Trebišov",
          schedule: [
            ["pondelok:", "8:00–15:00"],
            ["utorok:", "8:00–15:00"],
            ["streda:", "8:00–17:00"],
            ["štvrtok:", "8:00–15:00"],
            ["piatok:", "8:00–14:00"],
          ],
          text: "Vo štvrtok bude naďalej zabezpečené vydanie dokladov urýchlene do dvoch pracovných dní.",
        },
        {
          title: "Vodičské preukazy",
          location: "M. R. Štefánika 2319/180, Trebišov",
          schedule: [
            ["pondelok:", "8:00–15:00"],
            ["utorok:", "8:00–15:00"],
            ["streda:", "8:00–17:00"],
            ["štvrtok:", "8:00–15:00"],
            ["piatok:", "8:00–14:00"],
          ],
          text: "Vo štvrtok bude naďalej zabezpečené vydanie dokladov urýchlene do dvoch pracovných dní.",
        },
        {
          title: "Evidencia vozidiel",
          location: "M. R. Štefánika 2319/180, Trebišov",
          schedule: [
            ["pondelok:", "8:00–15:00"],
            ["utorok:", "8:00–15:00"],
            ["streda:", "8:00–17:00"],
            ["štvrtok:", "8:00–15:00"],
            ["piatok:", "8:00–14:00"],
          ],
          text: "Vo štvrtok bude naďalej zabezpečené vydanie dokladov urýchlene do dvoch pracovných dní.",
        },
      ],

      subpages: [
        {
          title: "Mestská polícia",
          route: "/mestska-policia",
        },
        {
          title: "Okresné riaditeľstvo policajného zboru v Trebišove",
          route: "/",
        },
        {
          title: "Policajné aktuality",
          route: "/",
        },
        {
          title: "Právne predpisy",
          route: "/pravne-predpisy",
        },
        {
          title: "Mestský kamerový systém",
          route: "/",
        },
        {
          title: "Rozdelenie sektorov",
          route: "/rozdelenie-sektorov",
        },
        {
          title: "Rady a informácie",
          route: "/",
        },
      ],
    };
  },
  components: {},
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

.item-main {
  margin-bottom: 30px !important;
}

.item {
  display: flex;
  border-bottom: 1px solid #bfc1c3;
  padding: 10px 0px;
}

.column-1 {
  width: 265px;
}

.column-2 {
  flex: 1;
}
</style>
