<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Infolist mesta Trebišov</h2>

    <div
      class="govuk-accordion"
      data-module="idsk-accordion"
      id="2"
      data-attribute="value"
    >
      <div
        v-for="(item, ind) in archive"
        :key="ind"
        class="govuk-accordion__section"
      >
        <div class="govuk-accordion__section-header">
          <h2 class="govuk-accordion__section-heading">
            <button
              type="button"
              id="2-heading-1"
              aria-controls="2-content-1"
              class="govuk-accordion__section-button"
              aria-expanded="false"
            >
              {{ item.name }}</button
            ><span class="govuk-accordion__icon" aria-hidden="true"></span>
          </h2>
        </div>
        <div
          v-for="(file, i) in item.files"
          :key="i"
          id="2-content-1"
          class="govuk-accordion__section-content"
          aria-labelledby="2-heading-1"
        >
          <a
            :href="require('@/assets/pdf/test.pdf')"
            target="_blank"
            title="Štatút mesta Trebišov"
            class="govuk-link-custom"
            >{{ file.name }}</a
          ><span class="no-link"> ({{ file.type }}, {{ file.size }} kB)</span>

          <p class="govuk-body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "InfolistMestaView",
  data() {
    return {
      archive: [
        {
          name: "Rok 2022",
          files: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          name: "Rok 2021",
          files: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          name: "Rok 2020",
          files: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          name: "Rok 2019",
          files: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
          ],
        },
        {
          name: "Rok 2018",
          files: [
            {
              name: "Mestský infolist Trebišov - č. 6/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 5/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 4/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 3/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 2/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
            },
            {
              name: "Mestský infolist Trebišov - č. 1/2022",
              urlFile: "@/assets/pdf/test.pdf",
              type: "PDF",
              size: 181.32,
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

  mounted() {},
  components: {},
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
