<template>
  <div>
    <ul class="list">
      <li class="item">
        <h4 class="label">Adresa</h4>
        <div class="name bold">{{ dataMap.name }}</div>
        <div class="position">{{ dataMap.street }}</div>
        <div class="location">{{ dataMap.city }}</div>
        <p>{{ dataMap.text }}</p>
      </li>
      <li class="item">
        <img
          class="image"
          :src="require('../assets/maps/' + dataMap.img)"
          alt="policia"
        />
      </li>
    </ul>
    <!-- <hr class="idsk-crossroad-line" aria-hidden="true" /> -->
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
.image {
  width: 100% !important;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
.location {
  margin-bottom: 16px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
.item {
  width: 100%;
}

.item:first-child {
  width: 247px;
}

.item:last-child {
  flex: 1;
}
</style>
