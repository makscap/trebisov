<template>
  <div
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
</style>
