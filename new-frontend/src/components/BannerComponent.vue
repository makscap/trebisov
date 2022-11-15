<template>
  <div
    class="image-box"
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
    <a :href="banner.urlLink" v-else class="link">
      <img class="image" :src="banner.urlImage" :alt="banner.title" />
      <div class="label-text">{{ banner.label }}</div>
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

.label-text {
  box-sizing: border-box;
  width: 100%;
  padding: 0px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
}

.link {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
