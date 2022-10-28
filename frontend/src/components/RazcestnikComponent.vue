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
      <div class="idsk-crossroad__item label govuk-heading-m">
        {{ item.title }}
      </div>

      <div v-for="(child, indx) in item.children" :key="indx" class="">
        <div class="govuk-accordion__section-header">
          <h2 class="govuk-accordion__section-heading">
            <button
              type="button"
              id="2-heading-1"
              aria-controls="2-content-1"
              class="govuk-accordion__section-button"
              aria-expanded="false"
              @click="toggleAccordion(indx)"
            >
              {{ child.name }}</button
            ><span class="govuk-accordion__icon" aria-hidden="true"></span>
          </h2>
        </div>
        <div
          v-for="(el, i) in child.info"
          :key="i"
          id="2-content-1"
          :class="
            isOpen == ind
              ? 'govuk-accordion__section'
              : 'govuk-accordion__section-content'
          "
          aria-labelledby="2-heading-1"
        >
          <p>Organizácia:</p>
          <p>{{ el.organization }}</p>
          <p>{{ el.text }}</p>
          <p>Odkaz na Centrálny register zmlúv:</p>
          <a target="_blank" class="govuk-link-custom">{{ el.site }}</a>

          <p class="govuk-body"></p>
        </div>
      </div>
    </div>

    <div
      v-for="(item, ind) in links"
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
            @click="toggleAccordion(indx)"
          >
            {{ item.title }}</button
          ><span class="govuk-accordion__icon" aria-hidden="true"></span>
        </h2>
      </div>

      <div v-for="(child, indx) in item.children" :key="indx" class="">
        <div
          v-for="(el, i) in child.info"
          :key="i"
          id="2-content-1"
          :class="
            isOpen == ind
              ? 'govuk-accordion__section'
              : 'govuk-accordion__section-content'
          "
          aria-labelledby="2-heading-1"
        >
          <p>Organizácia:</p>
          <p>{{ el.organization }}</p>
          <p>{{ el.text }}</p>
          <p>Odkaz na Centrálny register zmlúv:</p>
          <a target="_blank" class="govuk-link-custom">{{ el.site }}</a>

          <p class="govuk-body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RazcestnikComponent",
  data() {
    return {
      isOpen: [],
    };
  },
  props: {
    archive: Array,
    links: Array,
  },
  methods: {
    toggle(elem) {
      // console.log(elem);
      this.isOpen = (prevState) =>
        prevState.map((item) => ({
          ...item,
          show: item == elem ? !item.show : false,
        }));
    },
    toggleAccordion(index) {
      console.log(this.isOpen);
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter((i) => i !== index);
        return;
      }

      this.isOpen.push(index);
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
