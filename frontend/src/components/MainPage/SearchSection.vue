<template>
  <section class="section">
    <div class="govuk-width-container">
      <div data-module="idsk-intro-block">
        <div class="idsk-intro-block">
          <div class="govuk-grid-row">
            <div
              class="govuk-grid-column-full govuk-grid-column-two-thirds-from-desktop serch-text-box"
            >
              <h2 class="govuk-heading-m white title">
                Oficiálna stránka mesta Trebišov
              </h2>
              <p class="white">Všetko čo potrebujete vedieť</p>
              <div
                data-module="idsk-search-component "
                class="idsk-search-component search"
              >
                <label class="label" for="intro-block-search">
                  Čo potrebujete nájsť?
                </label>
                <input
                  class="govuk-input idsk-search-component__input"
                  id="intro-block-search"
                  name="search"
                  type="search"
                />
                <button
                  type="submit"
                  class="idsk-button idsk-search-component__button button"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6749 12.4978C16.6749 15.3349 14.3661 17.6436 11.529 17.6436C8.69192 17.6436 6.38318 15.3349 6.38318 12.4978C6.38318 9.66067 8.69192 7.35193 11.529 7.35193C14.3661 7.35193 16.6749 9.66067 16.6749 12.4978ZM22.5558 22.0543C22.5558 21.6638 22.395 21.2847 22.1308 21.0206L18.191 17.0808C19.1214 15.7369 19.6153 14.1288 19.6153 12.4978C19.6153 8.02962 15.9972 4.41146 11.529 4.41146C7.06087 4.41146 3.44271 8.02962 3.44271 12.4978C3.44271 16.9659 7.06087 20.5841 11.529 20.5841C13.1601 20.5841 14.7681 20.0902 16.112 19.1598L20.0518 23.0881C20.316 23.3637 20.695 23.5246 21.0856 23.5246C21.8896 23.5246 22.5558 22.8584 22.5558 22.0543Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.17188 12.4978C3.17188 7.88005 6.9113 4.14062 11.529 4.14062C16.1467 4.14062 19.8862 7.88005 19.8862 12.4978C19.8862 14.1076 19.4206 15.6963 18.5401 17.0468L22.3223 20.829C22.6372 21.1439 22.8266 21.5918 22.8266 22.0543C22.8266 23.0079 22.0392 23.7954 21.0856 23.7954C20.6236 23.7954 20.1746 23.6063 19.8585 23.2778L16.0784 19.5087C14.7278 20.3893 13.139 20.8549 11.529 20.8549C6.9113 20.8549 3.17188 17.1155 3.17188 12.4978ZM11.529 4.68229C7.21045 4.68229 3.71354 8.1792 3.71354 12.4978C3.71354 16.8163 7.21045 20.3132 11.529 20.3132C13.1059 20.3132 14.66 19.8356 15.9579 18.9371L16.1434 18.8086L20.2474 22.9006C20.4596 23.1221 20.7675 23.2537 21.0856 23.2537C21.74 23.2537 22.285 22.7088 22.285 22.0543C22.285 21.7358 22.1528 21.4256 21.9393 21.2121L17.8397 17.1125L17.9684 16.9266C18.8669 15.6287 19.3445 14.0746 19.3445 12.4978C19.3445 8.1792 15.8476 4.68229 11.529 4.68229ZM11.529 7.62277C8.8415 7.62277 6.65402 9.81025 6.65402 12.4978C6.65402 15.1853 8.8415 17.3728 11.529 17.3728C14.2165 17.3728 16.404 15.1853 16.404 12.4978C16.404 9.81025 14.2165 7.62277 11.529 7.62277ZM6.11235 12.4978C6.11235 9.51109 8.54234 7.0811 11.529 7.0811C14.5157 7.0811 16.9457 9.51109 16.9457 12.4978C16.9457 15.4844 14.5157 17.9144 11.529 17.9144C8.54234 17.9144 6.11235 15.4844 6.11235 12.4978Z"
                      fill="white"
                    />
                  </svg>
                  <span class="govuk-visually-hidden">Vyhľadávanie </span>
                </button>
              </div>
            </div>

            <div
              class="idsk-intro-block__side-menu govuk-grid-column-full govuk-grid-column-one-third-from-desktop"
            >
              <h2 class="govuk-heading-s white bold">Pre občanov</h2>
              <ul class="idsk-intro-block__side-menu__ul">
                <li
                  class="idsk-intro-block__side-menu__li"
                  v-for="(link, i) in links"
                  :key="i"
                >
                  <router-link
                    :to="this.$route.path + link.url"
                    class="govuk-link idsk-intro-block__side-menu__a"
                    :title="link.name"
                    aria-hidden="false"
                    >{{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        {
          name: "Evidencia obyvateľov",
          url: "pre-obcanov/evidencia-obyvatelov",
        },
        {
          name: "Stavebný úrad",
          url: "pre-obcanov/stavebny-urad",
        },
        {
          name: "Komunálny odpad",
          url: "pre-obcanov/komunalny-odpad",
        },
        {
          name: "Miestne dane a poplatky",
          url: "pre-obcanov/miestne-dane-a-poplatky",
        },
        {
          name: "Doprava a komunikácie",
          url: "pre-obcanov/doprava-a-komunikacie",
        },
        {
          name: "Informácie",
          url: "pre-obcanov/informacie",
        },
      ],
    };
  },
  beforeMount() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  height: 460px;
  /* padding: 32px 0px; */
  background: linear-gradient(rgba(32, 32, 32, 0.4), rgba(32, 32, 32, 0.4)),
    url("../../assets/city.gif");
  /* background-image: url("../../assets/city.gif"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.section .govuk-width-container {
  width: 100%;
}

.serch-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.idsk-intro-block__side-menu {
  padding: 30px !important;
  background-color: #024497 !important ;
}
.idsk-intro-block__side-menu a {
  color: #ffffff !important;
}

.button {
  padding: 0px !important;
}

.search {
  margin-top: 0px !important;
}

.idsk-search-component__input {
  height: 51px !important;
}

.idsk-search-component__button {
  width: 52px !important;
  height: 51px !important;
}

.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}

.label {
  padding-top: 13px !important;
  padding-left: 24px !important;
}

/* .govuk-grid-row {
  margin-right: 0px;
  margin-left: 0px;
} */
</style>
