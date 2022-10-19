<template>
  <div class="govuk-width-container">
    <div
      class="govuk-main-wrapper govuk-main-wrapper--auto-spacing padding-top-0"
    >
      <div class="banner">
        <h3 class="govuk-heading-l title">POMOC PRE UKRAJINU</h3>
        <p class="label">допомога для україни</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpBanner",
  data() {
    return {
      openBanner: false,
    };
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 4px !important;
  color: #ffffff !important;
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #ffffff;
}

.label {
  color: #ffdf0f;
  margin-bottom: 0px !important;
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
}
.banner {
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("../../assets/ukraine_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.padding-top-0 {
  padding-top: 0 !important;
}

@media screen and (max-width: 960px) {
  .banner {
    flex-wrap: wrap;
  }
}
</style>
