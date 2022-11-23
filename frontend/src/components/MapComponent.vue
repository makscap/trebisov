<template>
  <div>
    <div
      data-module="idsk-address"
      class="idsk-address idsk-address--full-width map"
    >
      <div class="idsk-address__content">
        <div class="idsk-address__description">
          <h2 class="govuk-heading-m">{{ dataMap.name }}</h2>
          <p class="govuk-body" v-if="dataMap.floor">{{ dataMap.floor }}</p>
          <p class="govuk-body">{{ dataMap.street }}</p>
          <p class="govuk-body">{{ dataMap.city }}</p>
          <p class="govuk-body" v-if="dataMap.text">{{ dataMap.text }}</p>
        </div>
        <iframe
          class="idsk-address__map"
          loading="lazy"
          allowfullscreen
          :src="dataMap.mapUrl"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {};
  },
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
  props: { dataMap: Object },
};
</script>
<style lang="scss" scoped>
.map {
  margin-bottom: 30px;
}

.map h2 {
  color: #0b0c0c !important;
  margin-bottom: 16px !important;
}

.map h3 {
  margin-bottom: 5px !important;
  color: #0b0c0c !important;
}
</style>
