<template>
  <!-- <section> -->
  <div class="govuk-width-container">
    <h2 class="govuk-heading-l">Oznamy</h2>

    <div data-module="idsk-crossroad" class="">
      <div class="idsk-crossroad idsk-crossroad-2">
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 1st element"
            aria-hidden="false"
            >Title for 1st element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 1st element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 2nd element"
            aria-hidden="false"
            >Title for 2nd element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 2nd element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 3rd element"
            aria-hidden="false"
            >Title for 3rd element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 3rd element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 4th element"
            aria-hidden="false"
            >Title for 4th element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 4th element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
      </div>
      <div class="idsk-crossroad idsk-crossroad-2">
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 5th element"
            aria-hidden="false"
            >Title for 5th element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 5th element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 6th element"
            aria-hidden="false"
            >Title for 6th element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 6th element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 7th element"
            aria-hidden="false"
            >Title for 7th element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 7th element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
        <div class="idsk-crossroad__item">
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 8th element"
            aria-hidden="false"
            >Title for 8th element
          </a>
          <p class="idsk-crossroad-subtitle" aria-hidden="false">
            Subtitle for 8th element
          </p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>
      </div>
    </div>
    <button
      type="button"
      class="idsk-button idsk-header-web__main--login-loginbtn"
      data-module="idsk-button"
    >
      Ďalšie oznamy
    </button>
  </div>
  <!-- </section> -->
</template>

<script>
export default {
  name: "CategoryButtons",
  data() {
    return {
      rubriky: [
        {
          title: "Primátor mesta",
          icon: require("@/assets/categories_icons/person.svg"),
          link: "/aktuality/chodci",
        },
        {
          title: "Mestské zastupiteľstvo",
          icon: require("@/assets/categories_icons/people.svg"),
          link: "/aktuality/deti",
        },
        {
          title: "Voľby 2022",
          icon: require("@/assets/categories_icons/info.svg"),
          link: "/aktuality/seniori",
        },
        {
          title: "Úradná tabuľa",
          icon: require("@/assets/categories_icons/assignment.svg"),
          link: "/aktuality/cyklisti",
        },
        {
          title: "Otázky a odpovede",
          icon: require("@/assets/categories_icons/live_help.svg"),
          link: "/aktuality/motocyklisti",
        },
        {
          title: "Diskusné fórum",
          icon: require("@/assets/categories_icons/message.svg"),
          link: "/aktuality/mladi-vodici",
        },
      ],
    };
  },
};
</script>

<style scoped>
#products .classes,
#products .ics-codes,
#products .standards,
#products .other-products {
  display: block;
  width: 100%;
  text-align: center;
  border: 2px solid #dee0e2;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  -webkit-box-shadow: #bfc1c3 0 5px 15px;
  box-shadow: #bfc1c3 0 5px 15px;
}
.module-icon > * .govuk-body {
  -webkit-box-flex: 1;
  color: #0065b3;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
#products .classes:hover,
#products .classesactive,
#products .ics-codes:hover,
#products .ics-codesactive,
#products .standards:hover,
#products .standardsactive,
#products .other-products:hover,
#products .other-productsactive {
  border: 2px solid #00703c;
}
.govuk-heading-l {
  color: #0b0c0c;
  font-family: Source Sans Pro, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;

  line-height: 1.04167;
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
}

#products a {
  text-decoration: none;
}
.govuk-grid-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 7px;
}
#products .row-with-boxes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
@media (min-width: 40.0625em) {
  .govuk-grid-column-one-quarter {
    width: 33.33%;
    float: left;
  }
  .govuk-\!-padding-left-4 {
    padding-left: 20px !important;
  }
  .govuk-\!-padding-right-4 {
    padding-right: 20px !important;
  }
  .govuk-\!-padding-top-4 {
    padding-top: 20px !important;
  }
}
#products .row-with-boxes > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 30px;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
@media screen and (max-width: 53em) {
  #products .row-with-boxes > div {
    width: 50%;
  }
}

.module-icon > * {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
.sections-home-container {
  max-width: 966px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  margin-bottom: 60px;
  position: relative;
}
.squares-mobile-top {
  height: auto;
  width: 100%;
}
.squares-mobile-bottom {
  transform: rotate(180deg);
  height: auto;
  width: 100%;
}
.squares-desktop-left {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("@/assets/stvorce_farebne_desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 550px;
  width: 112px;
}
.squares-mobile-top {
  height: auto;
  width: 100%;
}
.squares-mobile-bottom {
  transform: rotate(180deg);
  height: auto;
  width: 100%;
}
.squares-desktop-right {
  position: absolute;
  bottom: 0;
  right: 0;
  background-image: url("@/assets/stvorce_farebne_desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 550px;
  width: 112px;
  transform: rotate(180deg);
}

.govuk-grid-column-one-quarter:nth-last-child(-n + 3) {
  margin-bottom: 0px;
}
@media (min-width: 960px) {
  .find-out-btn {
    width: 100px;
    padding: 12px 9px;
    background-color: #00703c;
    border: none;
    border-bottom: 2px solid #000;
    font-weight: 400;
    font-size: 19px;
    color: #fff;
    cursor: pointer;
  }
  .banner-text {
    font-family: Source Sans Pro, Arial, sans-serif;
    max-width: 70%;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
  }
  #vizia-nula-banner {
    margin-top: 40px;
    background-color: #f6f6f6;
    width: 100%;
    height: 552px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  #vizia-nula-banner-mobile {
    display: none;
  }
}
@media (max-width: 960px) {
  .find-out-btn {
    width: 100px;
    padding: 12px 9px;
    background-color: #00703c;
    border: none;
    border-bottom: 2px solid #000;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    top: 80%;
    left: 41%;
    font-size: 16px;
  }

  #vizia-nula-banner {
    display: none;
  }

  #vizia-nula-banner-mobile {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f6f6;
  }
  .banner-text {
    width: 100%;
    font-family: Source Sans Pro, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
  .first {
    margin-bottom: 30px;
  }
  .vizia-nula-logo {
    margin: 32px 0;
  }
  .find-out-btn {
    margin: 32px 0;
  }
}
</style>
