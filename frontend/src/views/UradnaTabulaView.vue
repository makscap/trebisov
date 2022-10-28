<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Úradná tabuľa</h2>

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
                  <label class="govuk-label" for="name"> Názov </label>
                  <input
                    tabindex="-1"
                    class="govuk-input"
                    type="text"
                    id="mesto"
                    name="name"
                    placeholder="Napíšte názov nariadnenia"
                    aria-label="Mesto"
                  />
                </div>
              </div>
              <div class="govuk-grid-column-one-third-from-desktop">
                <div class="govuk-form-group">
                  <label class="govuk-label" for="date"> Dátum </label>
                  <input
                    tabindex="-1"
                    class="govuk-input"
                    type="text"
                    id="mesto"
                    name="date"
                    placeholder="Vyberte dátum"
                    aria-label="Mesto"
                  />
                </div>
              </div>
              <div class="govuk-grid-column-one-third-from-desktop">
                <div class="govuk-form-group">
                  <label class="govuk-label" for="categories">
                    Kategória
                  </label>
                  <input
                    tabindex="-1"
                    class="govuk-input"
                    type="text"
                    id="mesto"
                    name="categories"
                    placeholder="Všetky kategórie"
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

    <div class="content">
      <div class="title_tabs">
        <div class="column_1">Dátum</div>
        <div class="column_2">Kategória</div>
      </div>

      <ul class="list">
        <!-- <li class="item">
          <div class="column_1">Dátum</div>
          <div class="column_2">Kategória</div>
        </li> -->
        <li class="item" v-for="(evt, i) in data" :key="i">
          <div class="column_1">{{ evt.date }}</div>
          <div class="column_2">
            <a
              :href="evt.url"
              target="_blank"
              :title="evt.name"
              class="govuk-link-custom"
              >{{ evt.name }}</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "UradnaTabulaView",
  data() {
    return {
      isOpen: false,
      data: [
        {
          date: "13.10.2022",
          name: "Oznámenie o uložení obyčajnej listovej zásielky",
          url: "http://bluelemons.sk",
        },
        {
          date: "13.10.2022",
          name: "Oznámenie o uložení obyčajnej listovej zásielky",
          url: "http://bluelemons.sk",
        },
        {
          date: "13.10.2022",
          name: "Oznámenie o uložení obyčajnej listovej zásielky",
          url: "http://bluelemons.sk",
        },
        {
          date: "13.10.2022",
          name: "Oznámenie o uložení obyčajnej listovej zásielky",
          url: "http://bluelemons.sk",
        },
        {
          date: "13.10.2022",
          name: "Oznámenie o uložení obyčajnej listovej zásielky",
          url: "http://bluelemons.sk",
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
.title_tabs {
  display: flex;
  padding: 10px 0px;
  border-bottom: 1px solid #bfc1c3;
  font-family: "Source Sans Pro";
  font-size: 19px;
  line-height: 25px;
  font-weight: 700;
  color: #024497;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
}
.item {
  display: flex;
  padding: 10px 0px;
  border-bottom: 1px solid #bfc1c3;
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}

.column_1 {
  width: 166px;
}
.column_2 {
  flex: 1;
}
</style>
