<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">{{ this.details.name }}</h1>
      <ul class="list">
        <li class="item">
          <div class="column_title">Číslo:</div>
          <div class="text">{{ this.details.number }}</div>
        </li>
        <li class="item">
          <div class="column_title">Názov:</div>
          <div class="text">{{ this.details.name }}</div>
        </li>
        <li class="item">
          <div class="column_title">Schválené:</div>
          <div class="text">{{ this.details.aproove }}</div>
        </li>
        <li class="item">
          <div class="column_title">Účinné od:</div>
          <div class="text">{{ this.details.from }}</div>
        </li>
        <li class="item">
          <div class="column_title">Popis:</div>
          <div class="text_container">
            <div class="text">{{ this.details.text }}</div>
            <LinksAndSizeComponent :files="details.files" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import LinksAndSizeComponent from "@/components/LinksAndSizeComponent.vue";

export default {
  name: "VseobecneZavazneDetailView",
  data() {
    return {
      details: {
        name: "VZN č. 177/2022 o určení výšky príspevkov v školách a školských zariadeniach",
        number: "177/2022",
        aproove: "20.06.2022 - uznesenie MsZ č. 499/2022",
        from: "01.08.2022",
        text: "Toto VZN určuje výšku príspevkov v školách a školských zariadeniach, t.j.príspevkovú povinnosť za pobyt dieťaťa v materskej škole, v základnej umeleckej škole, na činnosť školského klubu detí, centra voľného času a na čiastočnú úhradu nákladov v zariadeniach školského stravovania v zriaďovateľskej pôsobnosti mesta Trebišov.",
        files: [
          {
            name: "VZN č. 177/2022 o určení výšky príspevkov v školách a školských zariadeniach",
            size: "329,06kB",
            ext: "PDF",
            urlFile: "/",
          },
        ],
      },
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
    toggle() {
      this.isOpen = !this.isOpen;
    },
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
  padding: 0;
  margin: 0;
  list-style: none;
}

.column_title {
  width: 135px;
}

.item {
  display: flex;
  padding: 18px 0px;
  border-bottom: 1px solid #dee0e2;
}

.item:last-child {
  border-bottom: none;
}

.text_container {
  flex: 1;
}

.text {
  margin-bottom: 15px;
}
</style>
