<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Postup pri sprístupňovaní informácií</h1>

      <p>
        <span>
          Informácie o tom, kde možno podať žiadosť, návrh, podnet, sťažnosť
          alebo iné podanie.</span
        >
      </p>
      <p><span> Osobne: </span>Na podateľni Mestského úradu</p>
      <p>
        <span>Písomne:</span> Mestský úrad, M.R. Štefánika 204/862, 075 25
        Trebišov
      </p>
      <p>
        <span> Elektronickou poštou: </span>
        <a href="mailto:info@trebisov.sk" class="contact_link"
          >info@trebisov.sk</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PostupPriSpristupnovaniView",
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
.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}

.label-mb-10 {
  margin-bottom: 10px;
  max-width: 274px;
}

.item-main {
  margin-bottom: 30px !important;
}

.item {
  display: flex;
  padding: 10px 0px;
  border-top: 1px solid #bfc1c3;
}

.item:last-child {
  border-bottom: 1px solid #bfc1c3;
}

.item-no-border {
  border-top: none;
}

.column-1 {
  width: 301px;
  margin-right: 30px;
}

.column-2 {
  flex: 1;
}

.font-light {
  font-weight: 400;
}
</style>
