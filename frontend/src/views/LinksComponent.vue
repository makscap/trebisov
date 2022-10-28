<template>
  <div class="govuk-width-container main-box w-75">
    <h2 class="govuk-heading-l title">
      Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného
      funkcionára - tlačivá
    </h2>

    <div v-for="link in data" :key="link.id" class="govuk-accordion__section">
      <a
        :href="require('@/assets/pdf/test.pdf')"
        target="_blank"
        title="Štatút mesta Trebišov"
        class="govuk-link-custom"
        >{{ link.name }}</a
      ><span class="no-link"> ({{ link.ext }}, {{ link.size }})</span>

      <p class="govuk-body"></p>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "InfolistMestaView",
  data() {
    return {
      isOpen: [],
      data: [
        {
          id: 1,
          name: "Oznámenie funkcií, zamestnaní, činností a majetkových pomerov verejných funkcionárov - Tlačivo A, B pre ručné vypĺňanie ",
          ext: "PDF",
          size: "3.38 MB",
        },
        {
          id: 2,
          name: "Oznámenie funkcií, zamestnaní, činností a majetkových pomerov verejných funkcionárov - Tlačivo A, B pre elektronické vypĺňanie",
          ext: "PDF",
          size: "2.97 MB",
        },
        {
          id: 3,
          name: "Oznámenie verejného funkcionára po skončení výkonu verejnej funkcie - Tlačivo C pre ručné vypĺňanie",
          ext: "PDF",
          size: "1.93 MB",
        },
        {
          id: 4,
          name: "Oznámenie verejného funkcionára po skončení výkonu verejnej funkcie - Tlačivo C pre elektronické vypĺňanie",
          ext: "PDF",
          size: "1.76 MB",
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
  components: {},
  methods: {
    toggleAccordion(index) {
      console.log(this.isOpen);
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter((i) => i !== index);
        return;
      }

      this.isOpen.push(index);
    },
    // toggle(elem) {
    // setExtraData((prevState) =>
    //   prevState.map((item) => ({
    //     ...item,
    //     show: item == elem ? !item.show : false,
    //   }))
    // );
    //   }
    // this.isOpen = !this.isOpen;

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
.main-box {
  // width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.hero-img {
  width: 100% !important;
}

.box {
  margin-bottom: 35px;
  margin-top: 30px;
}

.box img {
  height: 100%;
}

.content {
}
</style>
