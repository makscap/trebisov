<template>
  <div class="govuk-width-container">
    <div
      class="govuk-main-wrapper govuk-main-wrapper--auto-spacing padding-bottom-0"
    >
      <div class="applicationBanner">
        <h3 class="govuk-heading-l title">POMOC PRE UKRAJINU</h3>
        <p class="label">допомога для україни</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationBannerComponent",
  data() {
    return {
      openBanner: false,
    };
  },
};
</script>

<style scoped>
.title {
  color: #ffffff !important;
}

.label {
  color: #ffdf0f;
}
.applicationBanner {
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("../assets/ukraine_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.padding-bottom-0 {
  padding-bottom: 0 !important;
}
@media screen and (max-width: 960px) {
  .applicationBanner {
    flex-wrap: wrap;
  }
}
</style>
