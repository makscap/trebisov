<template>
  <ul :class="isVertical ? 'list  list-vertical' : 'list '">
    <li
      v-for="(sub, ind) in subpages"
      :key="ind"
      :class="isVertical ? 'item-vertical' : 'item'"
    >
      <div class="idsk-crossroad idsk-crossroad-2">
        <div class="idsk-crossroad__item">
          <router-link
            v-if="sub.route"
            :to="this.$route.path + sub.route"
            class="govuk-link idsk-crossroad-title"
            :title="sub.title"
            aria-hidden="false"
            >{{ sub.title }}
          </router-link>

          <a
            v-if="sub.url"
            :href="sub.url"
            class="govuk-link idsk-crossroad-title"
            aria-hidden="false"
            >{{ sub.title }}
          </a>
          <!-- <hr class="idsk-crossroad-line" aria-hidden="true" /> -->
        </div>
      </div>
    </li>
  </ul>

  <!-- <div class="govuk-width-container">
    <div style="width: 50%; margin-top: 40px">
      <router-link
        :to="`/dokumenty/pravne-predpisy`"
        class="idsk-crossroad-title green link"
      >
        Právne predpisy
      </router-link>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>

    <div class="idsk-crossroad__item" style="width: 50%; margin-top: 40px">
      <a
        href="https://www.mindop.sk/ministerstvo-1/doprava-3/bezpecnost-cestnej-premavky/cestny-bezpecnostny-audit"
        class="idsk-crossroad-title green link"
      >
        Cestný bezpečnostný audit
      </a>
      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "SubMenuView",
  props: {
    subpages: Array,
    isVertical: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  margin-bottom: 30px;
}

.list-vertical {
  max-width: 630px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  margin-bottom: 30px;
}

.item {
  width: calc((100% / 2) - 23px);
  margin-top: 23px;
  margin-right: 23px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee0e2;
}

.item:nth-child(2n) {
  margin-right: 0px;
}

.item-vertical {
  width: 100%;
  margin-top: 23px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee0e2;
}

.list a {
  font-weight: 700;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}

@media (max-width: 767px) {
  .list {
    flex-direction: column;
    padding: 0px;
  }

  .item {
    width: 100%;
    margin-right: 0px;
  }
}
</style>
