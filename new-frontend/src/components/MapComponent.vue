<template>
  <div class="idsk-address idsk-address--full-width wrapper" v-if="mapInfo">
    <div class="idsk-address__content map">
      <div class="idsk-address__description column_1">
        <h2 class="govuk-heading-m">{{ mapInfo.name }}</h2>

        <ul class="p-0 m-0 list-none list">
          <li v-if="mapInfo.floor">{{ mapInfo.floor }}</li>
          <li>{{ mapInfo.street }}</li>
          <li>{{ mapInfo.city }}</li>
          <li v-if="mapInfo.text">{{ mapInfo.text }}</li>
        </ul>
      </div>
      <iframe
        class="idsk-address__map"
        loading="lazy"
        allowfullscreen
        :src="mapInfo.mapUrl"
      >
      </iframe>
    </div>
  </div>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "MapComponent",
  data() {
    return {};
  },
  methods: {},
  components: {
    ErrorComponent,
  },
  props: { mapInfo: Object },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin-bottom: 30px;
  border-bottom: 1px solid #bfc1c3;
}

.wrapper h2 {
  color: #0b0c0c !important;
  margin-bottom: 16px !important;
}

.wrapper h3 {
  margin-bottom: 5px !important;
  color: #0b0c0c !important;
}

@media (max-width: 767px) {
  .list {
    margin-bottom: 30px !important;
  }
}
@media (min-width: 768px) {
  .map {
    display: flex;
    align-items: center;
  }

  .column_1 {
    max-width: 205px;
    margin-right: 50px;
  }
}
</style>
