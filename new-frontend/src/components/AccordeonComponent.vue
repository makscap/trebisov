<template>
  <div class="govuk-accordion accordion" v-if="data">
    <div
      v-for="(item, ind) in data"
      :key="ind"
      class="govuk-accordion__section list"
    >
      <div class="govuk-accordion__section-header">
        <div class="govuk-accordion__section-heading">
          <button
            type="button"
            class="govuk-accordion__section-button blue"
            @click="toggleAccordion(item)"
          >
            {{ item.title }}

            <span class="icon">
              <svg
                v-if="!item.isOpen"
                class="icon_plus"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 10.2598H10.25V16.5098C10.25 17.1973 9.6875 17.7598 9 17.7598C8.3125 17.7598 7.75 17.1973 7.75 16.5098V10.2598H1.5C0.8125 10.2598 0.25 9.69727 0.25 9.00977C0.25 8.32227 0.8125 7.75977 1.5 7.75977H7.75V1.50977C7.75 0.822266 8.3125 0.259766 9 0.259766C9.6875 0.259766 10.25 0.822266 10.25 1.50977V7.75977H16.5C17.1875 7.75977 17.75 8.32227 17.75 9.00977C17.75 9.69727 17.1875 10.2598 16.5 10.2598Z"
                  fill="#0B0C0C"
                />
              </svg>

              <svg
                v-if="item.isOpen"
                class="icon_plus"
                width="18"
                height="4"
                viewBox="0 0 18 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 3.25977H1.5C0.8125 3.25977 0.25 2.69727 0.25 2.00977C0.25 1.32227 0.8125 0.759766 1.5 0.759766H16.5C17.1875 0.759766 17.75 1.32227 17.75 2.00977C17.75 2.69727 17.1875 3.25977 16.5 3.25977Z"
                  fill="#0B0C0C"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        :class="
          item.isOpen
            ? 'govuk-accordion__section'
            : 'govuk-accordion__section-content'
        "
      >
        <FilesComponent :files="item.children" />
      </div>
    </div>
  </div>
  <ErrorComponent v-else />
</template>

<script>
import FilesComponent from "@/components/FilesComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "RazcestnikAndLinksComponent",
  data() {
    return {
      isOpen: [],
    };
  },
  props: {
    data: Object,
    notBlank: Boolean,
  },
  methods: {
    toggle() {},
    toggleAccordion(item) {
      if (item.isOpen) {
        this.data.forEach((el) => {
          el.isOpen = false;
        });
      } else {
        this.data.forEach((el) => {
          el.isOpen = false;
        });
        item.isOpen = true;
      }
    },
  },
  components: {
    FilesComponent,
    ErrorComponent,
  },
};
</script>
<style lang="scss" scoped>
.accordion {
  position: relative !important;
}

.icon {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
}

.icon_plus {
  position: absolute;
  width: 100%;
  height: 100%;
}

.icon_min {
  position: absolute;
}
</style>
