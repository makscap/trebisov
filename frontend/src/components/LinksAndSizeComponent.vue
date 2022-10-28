<template>
  <div>
    <!-- <div class="idsk-crossroad__item label govuk-heading-m">
      Profil verejného obstarávateľa
    </div> -->

    <ul class="p-0">
      <li class="item_link" v-for="(file, i) in files" :key="i">
        <a
          :href="file.urlFile"
          target="_blank"
          :title="file.name"
          class="govuk-link-custom link"
        >
          {{ file.name }}
        </a>

        <span class="link_size"> ({{ file.ext }}, {{ file.size }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinksAndSizeComponent",
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
  props: {
    files: Array,
  },
};
</script>
<style lang="scss" scoped>
.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
}
</style>
