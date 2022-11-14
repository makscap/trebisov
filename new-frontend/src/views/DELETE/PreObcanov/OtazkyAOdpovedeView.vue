<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Otázky a odpovede</h1>

      <p>
        Vážení občania.
        <br />
        <br />
        Máte otázky, ktoré sa týkajú mesta alebo mestskej samosprávy? Napíšte
        svoju otázku a v čo najkratšom možnom čase uverejníme odpoveď v
        spolupráci s príslušnými zamestnancami mesta z danej oblasti.
      </p>
      <SubPagesMenuVertical :subpages="subpages" />
      <button type="submit" class="idsk-button submit-table-filter">
        Napísať otázku
      </button>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import SubPagesMenuVertical from "@/components/SubPagesMenuVertical.vue";

export default {
  name: "OtazkyAOdpovedeView",
  data() {
    return {
      subpages: [
        {
          title: "Občania a podnety občanov",
          route: "/obcania-a-podnety-obcanov",
        },
        {
          title: "Komunálny a stavebný odpad",
          route: "/",
        },
        {
          title: "Mesto a samospráva",
          route: "/",
        },
        {
          title: "Mesto",
          route: "/",
        },
        {
          title: "Mesto",
          route: "/",
        },
      ],
    };
  },
  components: { SubPagesMenuVertical },
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
