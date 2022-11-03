<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Komisie</h1>
      <ul class="list">
        <li v-for="(sub, ind) in this.subpages" :key="ind" class="item">
          <div class="idsk-crossroad idsk-crossroad-2">
            <div class="idsk-crossroad__item">
              <router-link
                :to="this.$route.path + sub.route"
                class="govuk-link idsk-crossroad-title"
                title="Title for 1st element"
                aria-hidden="false"
                >{{ sub.title }}
              </router-link>
              <hr class="idsk-crossroad-line" aria-hidden="true" />
            </div>
          </div>
        </li>
      </ul>

      <div>
        <p>
          Každá komisia sa skladá z predsedu komisie, tajomníka komisie a
          členov.
        </p>
        <p class="bold">Predseda komisie:</p>
        <ul>
          <li>
            riadi a organizuje prácu komisie, zvoláva jej schôdze a riadi ich
            priebeh, spločne s tajomníkom komisie pripravuje program schôdze,
          </li>
          <li>zostavuje plán činnosti,</li>
          <li>
            organizuje spoluprácu komisie s ostatnými komisiami mestského
            zastupiteľstva,
          </li>
          <li>zastupuje komisiu navonok.</li>
        </ul>

        <p class="bold">Tajomník komisie:</p>
        <ul>
          <li>
            tajomník komisie je pracovníkom MsÚ, ktorého menuje primátor mesta
            (nemá hlasovacie právo),
          </li>
          <li>
            spoločne s predsedom komisie vypracúva návrh plánu činnosti komisie,
          </li>
          <li>zabezpečuje prípravu programu schôdze komisie,</li>
          <li>vedie písomné záznamy o schôdzach komisie,</li>
          <li>
            zabezpečuje administratívnu agendu súvisiacu s činnosťou komisie,
          </li>
          <li>plní ďalšie úlohy, ktorými ho komisia poverí.</li>
        </ul>
        <p class="bold">
          V aktuálnom volebnom období sú zriadené tieto komisie MsZ v Trebišove:
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "KomisieView",
  data() {
    return {
      subpages: [
        {
          title: "Rozdelenie komisií",
          route: "/1",
        },
        {
          title: "Zasadnutia komisí",
          route: "/zasadnutia-komisii",
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
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}

.item {
  width: 100%;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
