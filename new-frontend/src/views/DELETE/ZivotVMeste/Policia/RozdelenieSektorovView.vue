<template>
  <div class="govuk-width-container parent">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Rozdelenie sektorov</h1>

      <div class="image_box">
        <img
          class="image"
          src="@/assets/mestska_policia_rozdelenie_sektorov.jpg"
          alt="Rozdelenie sektorov"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "RozdelenieSektorovView",
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
<style lang="scss" scoped></style>
