<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Podanie sťažnosti</h1>

      <p>
        Sťažnosť sa podáva spravidla písomne, alebo ústne. Ak je sťažnosť podaná
        telefonicky, formou faxu, alebo internetovou správou, je prijímateľ
        povinný bezodkladne vyžiadať jej písomné znenie.
      </p>

      <p><span class="label_blue">Vybavovanie:</span> Mestský úrad</p>

      <p>
        <span class="label_blue">Doba vybavenia: </span>do 60 pracovných dní
      </p>
      <p><span class="label_blue">Poplatok:</span> bez poplatku</p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PodanieStaznostiView",
  data() {
    return {};
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
.label_blue {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #024497;
}
</style>
