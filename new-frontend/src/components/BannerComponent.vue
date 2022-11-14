<template>
  <div
    class="image_box"
    :style="{
      width: banner.width ? banner.width : '100%',
      height: banner.height ? banner.height : '100%',
    }"
  >
    <img
      class="image"
      :src="banner.urlImage"
      :alt="banner.title"
      v-if="!banner.isClickable"
    />
    <a :href="banner.urlLink" v-else>
      <img class="image" :src="banner.urlImage" :alt="banner.title" />
    </a>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  props: { banner: Object },
};
</script>
<style lang="scss" scoped>
.image_box {
  margin-bottom: 30px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
