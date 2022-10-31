<template>
  <div class="content">
    <div class="govuk-accordion">
      <div
        v-for="(item, ind) in archive"
        :key="ind"
        class="govuk-accordion__section list"
      >
        <div class="govuk-accordion__section-header">
          <h2 class="govuk-accordion__section-heading">
            <button
              type="button"
              class="govuk-accordion__section-button"
              @click="toggleAccordion(item)"
            >
              {{ item.title }}
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
          </h2>
        </div>
        <div
          v-for="(link, i) in item.children"
          :key="i"
          :class="
            item.isOpen
              ? 'govuk-accordion__section'
              : 'govuk-accordion__section-content'
          "
        >
          <div class="links_group">
            <div class="date" v-if="link.date">{{ link.date }}</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "RazcestnikAndLinksComponent",
  data() {
    return {
      isOpen: [],
    };
  },
  props: {
    archive: Array,
  },
  methods: {
    toggle() {},
    toggleAccordion(item) {
      item.isOpen = !item.isOpen;
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
.main-box {
  // width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}

.text {
  margin-bottom: 30px;
}

.links_group {
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}

.date {
  margin-right: 16px;
}

.link {
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.icon {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  // transform: translate(-50%, -50%);
}

.icon_plus {
  box-sizing: border-box;
  position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  // margin: auto;
  // border: 2px solid transparent;
  // background-color: #0b0c0c;
  // width: 100%;
}

.icon_min {
  box-sizing: border-box;
  position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // width: 25%;
  // height: 25%;
  // margin: auto;
  // height: 100%;
}
</style>
