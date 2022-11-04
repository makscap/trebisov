<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Obchádzky a uzávierky miestnych komunikácií
      </h1>

      <p>
        Povolenie uzávierky miestnych komunikácií na území obce vydáva Mesto
        Trebišov na základe písomnej žiadosti.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>
          Žiadosť na vydanie povolenia uzávierky miestnej komunikácie (tlačivo).
        </li>
        <li>Prílohy uvedené na žiadosti.</li>
      </ul>

      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní od podania žiadosti</span>
      </div>

      <div class="label_box">
        <h4 class="label inline">Poplatok:</h4>
        <span> podľa platného sadzobníka správnych poplatkov</span>
      </div>
      <h4 class="label">Súvisiace predpisy:</h4>
      <div>
        <a href="/" className="">
          Zákon č. 135/1961 Zb. o pozemných komunikáciách (cestný zákon) v znení
          neskorších predpisov
        </a>
      </div>

      <h4 class="label">Vybavuje:</h4>
      <LinksAndSizeComponent :files="files" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "ObchadzkyView",
  data() {
    return {
      files: [
        {
          name: "žiadosť o určenie dopravného značenia",
          size: "1.19 MB",
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
