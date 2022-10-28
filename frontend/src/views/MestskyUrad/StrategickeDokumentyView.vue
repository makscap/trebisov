<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Strategické dokumenty</h2>
    <RazcestnikAndLinksComponent :archive="archive" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "../../components/RazcestnikAndLinksComponent.vue";

export default {
  name: "StrategickeDokumentyView",
  data() {
    return {
      archive: [
        {
          title: "Územný plán",
          isOpen: false,
          children: [
            {
              name: "Programový rozpočet mesta Trebišov na rok 2022 s výhľadom na roky 2023 - 2024 (PDF, 5.86 MB)",
              url: "/",
              size: "181.32 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 1/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 2/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              name: "Rozpočtové opatrenie primátora mesta č. 3/2022 (PDF, 182.91 kB) ",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
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
  components: { RazcestnikAndLinksComponent },
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
.main-box {
  margin-bottom: 50px;
}
.card-img {
  width: 100% !important;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px;
}

.textbox_child_second {
  padding-left: 30px;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
.contact_list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.phone,
.email {
  display: inline-block;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
}

.box {
  padding-top: 30px;
  padding-bottom: 50px;
}

.title {
  margin-bottom: 7px !important;
}
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
  margin-top: 23px;
  margin-right: 23px;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
