<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Zasadnutia MsZ v Trebišove</h2>

    <div data-module="idsk-table" id="priklad-2">
      <div
        data-module="idsk-table-filter"
        id="example-table-2-filter"
        class="idsk-table-filter"
      >
        <div class="idsk-table-filter__panel idsk-table-filter__inputs">
          <div class="idsk-table-filter__title govuk-heading-m">
            Filtrovať obsah
          </div>
          <button
            @click="toggle"
            class="govuk-body govuk-link idsk-filter-menu__toggle"
            tabindex="0"
            type="button"
          >
            {{ isOpen ? "Zbaliť obsah filtra" : "Rozbaliť obsah filtra" }}
          </button>

          <form
            :class="isOpen ? 'idsk-table-filter' : 'idsk-table-filter__content'"
            action="#"
          >
            <div class="govuk-grid-row idsk-table-filter__filter-inputs">
              <div class="govuk-grid-column-one-third-from-desktop">
                <div class="govuk-form-group">
                  <label class="govuk-label" for="mesto">
                    Volebné obdobie
                  </label>
                  <input
                    tabindex="-1"
                    class="govuk-input"
                    type="text"
                    id="mesto"
                    name="mesto"
                    placeholder="Volebné obdobie"
                    aria-label="Mesto"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="idsk-button submit-table-filter">
              Vyhľadať
            </button>
            <button type="submit" class="idsk-button submit-table-filter">
              Zrušiť filter
            </button>
          </form>
        </div>
        <div
          class="idsk-table-filter__panel idsk-table-filter__active-filters idsk-table-filter__active-filters__hide idsk-table-filter--expanded"
          data-remove-filter="Zrušiť filter"
          data-remove-all-filters="Zrušiť všetko"
        >
          <div class="govuk-body idsk-table-filter__title">Aktívny filter</div>
          <button
            class="govuk-body govuk-link idsk-filter-menu__toggle"
            tabindex="0"
            data-open-text="Rozbaliť aktívny filter"
            data-close-text="Zbaliť aktívny filter"
            data-category-name=""
            aria-label="Zbaliť aktívny filter"
            type="button"
          >
            Zbaliť aktívny filter
          </button>

          <div class="govuk-clearfix idsk-table-filter__content"></div>
        </div>
      </div>
    </div>

    <RazcestnikAndLinksComponent :archive="archive" :notBlank="true" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import RazcestnikAndLinksComponent from "@/components/RazcestnikAndLinksComponent";

export default {
  name: "ZasadnutiaView",
  data() {
    return {
      archive: [
        {
          title: "Rok 2022",
          isOpen: false,
          children: [
            {
              name: "25. zasadnutie MsZ zo dňa 20.06.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "24. zasadnutie MsZ zo dňa 25.04.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "23. zasadnutie MsZ zo dňa 14.02.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
          ],
        },
        {
          title: "Rok 2021",
          isOpen: false,
          children: [
            {
              name: "25. zasadnutie MsZ zo dňa 20.06.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "24. zasadnutie MsZ zo dňa 25.04.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "23. zasadnutie MsZ zo dňa 14.02.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
          ],
        },
        {
          title: "Rok 2020",
          isOpen: false,
          children: [
            {
              name: "25. zasadnutie MsZ zo dňa 20.06.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "24. zasadnutie MsZ zo dňa 25.04.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "23. zasadnutie MsZ zo dňa 14.02.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
          ],
        },
        {
          title: "Rok 2019",
          isOpen: false,
          children: [
            {
              name: "25. zasadnutie MsZ zo dňa 20.06.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "24. zasadnutie MsZ zo dňa 25.04.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "23. zasadnutie MsZ zo dňa 14.02.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
          ],
        },
        {
          title: "Rok 2018",
          isOpen: false,
          children: [
            {
              name: "25. zasadnutie MsZ zo dňa 20.06.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "24. zasadnutie MsZ zo dňa 25.04.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
            {
              name: "23. zasadnutie MsZ zo dňa 14.02.2022",
              url: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/1",
            },
          ],
        },
      ],
    };
  },
  components: { RazcestnikAndLinksComponent },
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
<style lang="scss" scoped></style>
