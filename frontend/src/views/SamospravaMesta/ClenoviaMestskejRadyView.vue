<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Členovia mestskej rady</h2>

    <div class="content">
      <ul class="list">
        <li v-for="(person, i) in persons" :key="i" class="item">
          {{ person }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "ClenoviaMestskejRadyView",
  data() {
    return {
      persons: [
        "Mgr. Viera Mokáňová",
        "Ing. Peter Duč",
        "MVDr. Ivan Hrdlík",
        "František Tomko",
        "Koloman Demeter",
        "Ing. Dušan Biž",
        "MUDr.Dušan Tomko",
        "Ing.Martin Telepovský",
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
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 20px;
}

.item:last-child {
  margin-bottom: 0px;
}
</style>
