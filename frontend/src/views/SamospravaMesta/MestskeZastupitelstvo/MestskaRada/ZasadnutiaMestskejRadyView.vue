<template>
  <div class="govuk-width-container main-box">
    <div class="container">
      <h2 class="govuk-heading-l title">Zasadnutia mestskej rady MsZ</h2>
    </div>
    <!-- <div
      class="govuk-accordion"
      data-module="idsk-accordion"
      id="2"
      data-attribute="value"
    >
      <div
        v-for="(item, ind) in archive"
        :key="ind"
        class="govuk-accordion__section list"
      >
        <div class="govuk-accordion__section-header">
          <h2 class="govuk-accordion__section-heading">
            <button
              type="button"
              id="2-heading-1"
              aria-controls="2-content-1"
              class="govuk-accordion__section-button"
              aria-expanded="false"
              @click="toggleAccordion(item)"
            >
              {{ item.title }}</button
            ><span class="govuk-accordion__icon" aria-hidden="true"></span>
          </h2>
        </div>
        <div
          v-for="(link, i) in item.children"
          :key="i"
          id="2-content-1"
          :class="
            item.isOpen
              ? 'govuk-accordion__section'
              : 'govuk-accordion__section-content'
          "
          aria-labelledby="2-heading-1"
        >
          <div class="links_group">
            <div class="date">{{ link.date }}</div>
            <div>
              <a
                :href="link.url"
                target="_blank"
                :title="link.name"
                class="govuk-link-custom link"
              >
                {{ link.name }}
              </a>
              <span> ({{ link.ext }}, {{ link.size }})</span>
            </div>
          </div>

          <p class="govuk-body"></p>
        </div>
      </div>
    </div> -->
    <RazcestnikAndLinksComponent :archive="archive" />
    <!-- </div> -->
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent.vue";

export default {
  name: "ZmluvyFakturyView",
  data() {
    return {
      archive: [
        {
          title: "Rok 2022",
          isOpen: false,
          children: [
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2021",
          isOpen: false,
          children: [
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2020",
          isOpen: false,
          children: [
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2019",
          isOpen: false,
          children: [
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
          ],
        },
        {
          title: "Rok 2018",
          isOpen: false,
          children: [
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
              url: "/",
              size: "365 kB",
              ext: "PDF",
            },
            {
              date: "19.04.2022 ",
              name: "Zápisnica zo zasadnutia",
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

  mounted() {},
  components: { RazcestnikAndLinksComponent },
  methods: {
    toggle(elem) {
      // console.log(elem);
      this.isOpen = (prevState) =>
        prevState.map((item) => ({
          ...item,
          show: item == elem ? !item.show : false,
        }));
    },
    toggleAccordion(item) {
      // console.log(this.isOpen);
      // if (this.isOpen.includes(index)) {
      //   this.isOpen = this.isOpen.filter((i) => i !== index);
      //   return;
      // }

      // this.isOpen.push(index);
      item.isOpen = !item.isOpen;
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
<style lang="scss" scoped></style>
