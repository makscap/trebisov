<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">
        Súhlas k užívaniu stavby malého zdroja znečisťovania ovzdušia
      </h1>

      <p>
        V zmysle § 17 ods. 1, písm. a) zákona č. 137/2010 Z.z. o ovzduší je
        potrebný súhlas orgánu ochrany ovzdušia k užívaniu stavby malého zdroja
        znečisťovania ovzdušia.
      </p>

      <h4 class="label">Potrebné doklady:</h4>
      <ul>
        <li>žiadosť</li>
        <li>projektová dokumentácia</li>
        <li>
          súhlas k stavbe malého zdroja znečisťovania ovzdušia pokiaľ nie je tak
          PD
        </li>
        <li>(časť vykurovanie a architektúra)</li>
        <li>list vlastníctva</li>
      </ul>
      <div class="label_box">
        <h4 class="label inline">Doba vybavenia:</h4>
        <span> do 30 dní </span>
      </div>
      <div class="label_box">
        <h4 class="label inline">Poplatky:</h4>
        <span> 5 Eur </span>
      </div>

      <h4 class="label">Súvisiace predpisy:</h4>

      <div class="mb-30">
        <a href="/" className="">
          Zákon č. 137/2010 Z. z. o ovzduší v znení neskorších predpisov
        </a>
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
  name: "SuhlasKUzivaniuStavbyView",
  data() {
    return {
      files: [
        {
          name: "Vydanie súhlasu k povoleniu stavby malého zdroja znečisťovania ovzdušia - žiadosť",
          size: "93.56 kB",
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
