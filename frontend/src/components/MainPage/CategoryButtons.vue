<template>
  <div class="govuk-width-container">
    <div class="govuk-main-wrapper govuk-main-wrapper--auto-spacing pt-pb">
      <section id="products" class="govuk-main-wrapper m-0 p-0">
        <div class="govuk-grid-row m-0 p-0">
          <div class="govuk-grid-row row-with-boxes m-0 p-0">
            <div
              v-for="item in rubriky"
              :key="item.name"
              class="govuk-grid-column-one-quarter"
              @click="top()"
            >
              <router-link
                :to="item.link"
                :title="'Odkaz na podstránku s článkami sekcie ' + item.name"
                class="govuk-!-margin-bottom-6 standards govuk-!-padding-top-4 govuk-!-padding-bottom-2 govuk-!-padding-right-4 govuk-!-padding-left-4 module-icon m-0 p-0"
              >
                <div>
                  <span class="govuk-heading-l govuk-!-margin-bottom-2 icon">
                    <img
                      style="width: 40px; height: 40px"
                      :src="item.icon"
                      :alt="'Na obrázku je ikona ' + item.name"
                    />
                  </span>
                  <p class="govuk-body">
                    <strong>{{ item.title }}</strong>
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
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
          link: "/samosprava-mesta/primator",
        },
        {
          title: "Mestské zastupiteľstvo",
          icon: require("@/assets/categories_icons/people.svg"),
          link: "/samosprava-mesta/mestske-zastupitelstvo",
        },
        {
          title: "Voľby 2022",
          icon: require("@/assets/categories_icons/info.svg"),
          link: "/aktuality/seniori",
        },
        {
          title: "Úradná tabuľa",
          icon: require("@/assets/categories_icons/assignment.svg"),
          link: "/samosprava-mesta/uradna-tabula",
        },
        {
          title: "Otázky a odpovede",
          icon: require("@/assets/categories_icons/live_help.svg"),
          link: "/pre-obcanov/otazky-a-odpovede",
        },
        {
          title: "Diskusné fórum",
          icon: require("@/assets/categories_icons/message.svg"),
          link: "/diskusne-forum",
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
  border: 1px solid #0065b3;
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

.govuk-grid-column-one-quarter {
  width: calc((100% / 3) - 20px) !important;
  padding: 0px !important;
  margin-right: 30px !important;
}

.govuk-grid-column-one-quarter:nth-child(3n) {
  margin-right: 0px !important;
}

.govuk-grid-column-one-quarter:nth-child(4),
.govuk-grid-column-one-quarter:nth-child(5),
.govuk-grid-column-one-quarter:nth-child(6) {
  margin-bottom: 0px !important;
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

.pt-pb {
  padding: 30px 0px;
}

.icon {
  margin-bottom: 8px !important;
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
