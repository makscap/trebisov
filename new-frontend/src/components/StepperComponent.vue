<template>
  <div class="wrapper" v-if="steps.length > 0">
    <h2 class="govuk-heading-l">Hlasovanie</h2>

    <div class="idsk-stepper">
      <div
        class="idsk-stepper__section idsk-stepper__section--expanded"
        v-for="(item, i) in steps.slice(0, steps.length - 1)"
        :key="i"
        @click="toggleAccordion(item)"
      >
        <div class="idsk-stepper__section-header">
          <span class="idsk-stepper__circle idsk-stepper__circle--number">
            <span class="idsk-stepper__circle-inner">
              <span class="idsk-stepper__circle-background">
                <span class="idsk-stepper__circle-step-label">{{ i + 1 }}</span>
              </span>
            </span>
          </span>
          <h4 class="idsk-stepper__section-heading">
            <button type="button" class="idsk-stepper__section-button">
              {{ item.name }}
            </button>
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
          </h4>
        </div>
        <div v-if="item.isOpen" class="idsk-stepper__section">
          <div>{{ item.date }}</div>
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>

      <div
        :class="
          steps[steps.length - 1].isOpen
            ? 'idsk-stepper__section idsk-stepper__section--last-item idsk-stepper__section--expanded'
            : 'idsk-stepper__section idsk-stepper__section--last-item'
        "
        @click="toggleAccordion(steps[steps.length - 1])"
      >
        <div class="idsk-stepper__section-header">
          <span class="idsk-stepper__circle idsk-stepper__circle--number">
            <span class="idsk-stepper__circle-inner">
              <span class="idsk-stepper__circle-background">
                <span class="idsk-stepper__circle-step-label">{{
                  steps.length
                }}</span>
              </span>
            </span>
          </span>
          <h4 class="idsk-stepper__section-heading">
            <button type="button" class="idsk-stepper__section-button">
              {{ steps[steps.length - 1].name }}
            </button>
            <span class="icon">
              <svg
                v-if="!steps[steps.length - 1].isOpen"
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
                v-if="steps[steps.length - 1].isOpen"
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
          </h4>
        </div>
        <div
          v-if="steps[steps.length - 1].isOpen"
          class="idsk-stepper__section-content"
        >
          <div>{{ steps[steps.length - 1].date }}</div>

          <div>
            {{ steps[steps.length - 1].text }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "StepperComponent",
  data() {
    return {};
  },
  props: {
    steps: Array,
  },
  methods: {
    toggleAccordion(item) {
      if (item.isOpen) {
        this.steps.forEach((el) => {
          el.isOpen = false;
        });
      } else {
        this.steps.forEach((el) => {
          el.isOpen = false;
        });
        item.isOpen = true;
      }
    },
  },
  components: {
    ErrorComponent,
  },
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 30px;
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
