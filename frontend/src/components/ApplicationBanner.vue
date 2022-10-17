<template>
  <div class="govuk-width-container">
    <div
      class="govuk-main-wrapper govuk-main-wrapper--auto-spacing padding-bottom-0"
    >
      <div class="applicationBanner">
        <div>
          <p>Aplikácia pre deti</p>
          <h1 class="govuk-heading-l">
            Stiahnite si aplikáciu, ktorá vzdeláva deti k vyššej bezpečnosti na
            cestách
          </h1>
          <a
            title="Po kliknutí sa otvorí v novej karte Apple store odkaz pre aplikáciu"
            href="https://apps.apple.com/sk/app/dopravko/id1624519294"
            target="_blank"
          >
            <img
              style="width: 150px; padding: 20px"
              :src="require('@/assets/Btn_App_store.svg')"
              alt="Obrázok tlačidla pre Apple store link"
            />
          </a>
          <a
            title="Po kliknutí sa otvorí v novej karte Google store odkaz pre aplikáciu"
            href="https://play.google.com/store/apps/details?id=com.becep.hra"
            target="_blank"
          >
            <img
              style="width: 150px; padding: 20px"
              :src="require('@/assets/Btn_Google_play.svg')"
              alt="Obrázok tlačidla pre Google store link"
            />
          </a>
        </div>
        <img
          id="logoPhone"
          src="@/assets/phone-app.png"
          alt="Ukážka aplikácie hry pre deti"
        />
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
.applicationBanner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
