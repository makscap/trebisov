<template>
  <div class="wrapper">
    <ul class="list" v-if="files">
      <li class="item" v-for="(file, i) in files" :key="i">
        <a
          :href="file.urlFile"
          target="_blank"
          :title="file.name"
          class="govuk-link-custom link"
        >
          {{ file.name + " " }}
        </a>
        <span class="link_size" v-if="file.size">
          ({{ file.ext }}, {{ file.size }})</span
        >
      </li>
    </ul>
    <ErrorComponent v-else />
  </div>
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "FilesComponent",
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
  components: {
    ErrorComponent,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin-bottom: 30px;
}
.list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.item {
  margin-bottom: 20px;
}

.item:last-child {
  margin-bottom: 0px;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-weight: 400;
  white-space: nowrap;
}
</style>
