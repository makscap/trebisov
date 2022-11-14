<template>
  <div>
    <!-- <SearchSection />
    <CategoryButtons />
    <HelpBanner />

    <NewsMenu />

    <ActualityComponent />
    <PodujatiaComponent /> -->

    <!-- <div class="govuk-width-container">
      <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
        <section id="products" class="govuk-main-wrapper">
          <div class="govuk-grid-row">
            <div class="govuk-grid-row row-with-boxes">
              <div
                v-for="item in rubriky"
                :key="item.name"
                class="govuk-grid-column-one-quarter"
                @click="top()"
              >
                <router-link
                  :to="item.link"
                  :title="'Odkaz na podstránku s článkami sekcie ' + item.name"
                  class="govuk-!-margin-bottom-6 standards govuk-!-padding-top-4 govuk-!-padding-bottom-2 govuk-!-padding-right-4 govuk-!-padding-left-4 module-icon"
                >
                  <div>
                    <span class="govuk-heading-l govuk-!-margin-bottom-2">
                      <img
                        style="width: 60px; height: 60px"
                        :src="item.icon"
                        :alt="'Na obrázku je ikona ' + item.name"
                      />
                    </span>
                    <p class="govuk-body">
                      <strong>{{ item.title }}</strong>
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </section>
        <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import HelpBanner from "@/components/MainPage/HelpBanner";
// import SearchSection from "@/components/MainPage/SearchSection";
import { useMeta } from "vue-meta";
// import CategoryButtons from "@/components/MainPage/CategoryButtons.vue";
// import NewsMenu from "../components/MainPage/NewsMenu.vue";
// import ActualityComponent from "../components/MainPage/ActualityComponent.vue";
// import PodujatiaComponent from "@/components/MainPage/PodujatiaComponent.vue";

export default {
  name: "HomeView",
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
  components: {
    // SearchSection,
    // HelpBanner,
    // CategoryButtons,
    // NewsMenu,
    // ActualityComponent,
    // PodujatiaComponent,
  },

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
<style lang="scss" scoped></style>
