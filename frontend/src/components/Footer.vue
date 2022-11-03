<template>
  <div data-module="idsk-footer-extended ">
    <footer
      class="idsk-footer-extended idsk-footer-extended--up-button-enabled section"
    >
      <div
        class="idsk-footer-extended-up-button-div"
        id="footer-extended-up-button"
      >
        <div class="govuk-width-container">
          <div class="govuk-grid-column-full">
            <a
              href="#"
              role="button"
              draggable="false"
              class="idsk-button idsk-button--start idsk-footer-extended-up-button-a"
              data-module="idsk-button"
            >
              <svg
                class="idsk-footer-extended__up-button-svg"
                width="20"
                height="15"
                viewbox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 5.5984L0 15L0 9.40174L10 0L10 5.5984Z"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 9.4016L10 0V5.59826L20 15V9.4016Z"
                  fill="white"
                />
              </svg>
              Hore
            </a>
          </div>
        </div>
      </div>
      <div class="idsk-footer-extended-feedback">
        <!-- <div class="govuk-width-container">
          <div
            id="idsk-footer-extended-feedback"
            class="idsk-footer-extended-feedback-text"
          >
            <div class="idsk-footer-extended-feedback-container">
              <div id="idsk-footer-extended-info-question">
                <div
                  class="govuk-grid-column-two-thirds idsk-footer-extended-usefull-question"
                >
                  <span
                    class="idsk-footer-extended-feedback-question-info-usefull"
                  >
                    Boli tieto informácie pre vás užitočné?
                  </span>
                  <span class="idsk-footer-extended-usefull-question-mobile">
                    Je táto stránka užitočná?
                  </span>
                  <div class="idsk-footer-extended-usefull-answers-mobile">
                    <div>
                      <button
                        id="idsk-footer-extended-feedback-yes-button"
                        type="button"
                        class="idsk-footer-extended-feedback-text-answers idsk-footer-extended-help-button"
                      >
                        Áno
                        <span class="govuk-visually-hidden"
                          >Boli tieto informácie pre vás užitočné?</span
                        >
                      </button>
                      <button
                        id="idsk-footer-extended-feedback-no-button"
                        type="button"
                        class="idsk-footer-extended-feedback-text-answers idsk-footer-extended-help-button"
                      >
                        Nie
                        <span class="govuk-visually-hidden"
                          >Boli tieto informácie pre vás užitočné?</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="govuk-grid-column-one-third idsk-footer-extended-usefull-question idsk-footer-extended-white-border"
                >
                  <div
                    class="idsk-footer-extended-feedback-question-info-usefull"
                  >
                    <button
                      id="idsk-footer-extended-error-button"
                      type="button"
                      class="idsk-footer-extended-feedback-text-answers idsk-footer-extended-help-button"
                    >
                      Našli ste na stránke chybu?
                    </button>
                  </div>
                  <div class="idsk-footer-extended-usefull-question-mobile">
                    <span> Našli ste na stránke chybu? </span>
                    <button
                      id="idsk-footer-extended-write-us-button"
                      type="button"
                      class="idsk-footer-extended-write-us-button idsk-footer-extended-feedback-text-answers idsk-footer-extended-help-button"
                    >
                      Napíšte nám
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="idsk-footer-extended-heart"
                class="idsk-footer-extended-heart govuk-grid-column-full"
              >
                Ďakujeme za Vašu spätnú väzbu
                <svg
                  class="idsk-footer-extended-heart--svg"
                  width="291"
                  height="22"
                  viewbox="263 -4 291 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M271.42 19.33H290.42V0.33H271.42V19.33Z"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patterncontentunits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0" transform="scale(0.015625)" />
                    </pattern>
                    <image
                      id="image0"
                      width="64"
                      height="64"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div id="idsk-footer-extended-feedback-content">
        <div class="govuk-width-container">
          <div class="govuk-grid-row">
            <div
              id="idsk-footer-extended-help-form"
              class="idsk-footer-extended-feedback-hidden idsk-footer-extended-display-hidden"
            >
              <div
                id="idsk-help-container"
                class="idsk-footer-extended-feedback-container"
              >
                <div class="govuk-grid-column-full">
                  <div class="idsk-footer-extended-feedback-question-container">
                    <div
                      class="govuk-grid-column-two-thirds idsk-footer-extended-help-form-header-mobile"
                    >
                      <h3 class="govuk-heading-x">
                        Pomôžte nám zlepšiť mirri.gov.sk
                      </h3>
                    </div>
                    <div
                      class="govuk-grid-column-one-third idsk-footer-extended-close-button-mobile"
                    >
                      <button
                        id="idsk-footer-extended-close-help-form-button"
                        type="button"
                        class="idsk-footer-extended-feedback-button idsk-footer-extended-help-button"
                      >
                        Zatvoriť
                      </button>
                    </div>
                  </div>
                  <p class="idsk-footer-extended-form-text">
                    Aby sme vedeli zlepšiť obsah na tejto stránke, chceli by sme
                    vedieť o Vašej skúsenosti so stránkou. Pošleme Vám link na
                    formulár spätnej väzby. Jeho vyplnenie Vám zaberie iba 2
                    minúty.
                  </p>
                  <br />
                  <div class="idsk-footer-extended-feedback-button">
                    <a
                      href="/custom-components/customer-surveys/basic/preview"
                      id="fill-feedback-help-form"
                      title="Vyplniť prieskum"
                      role="button"
                      class="idsk-button"
                      data-module="idsk-button"
                    >
                      Vyplniť prieskum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="idsk-footer-extended-error-form"
              class="idsk-footer-extended-feedback-hidden idsk-footer-extended-display-hidden"
            >
              <div class="idsk-footer-extended-feedback-container">
                <div class="govuk-grid-column-full">
                  <div class="idsk-footer-extended-feedback-question-container">
                    <div
                      class="govuk-grid-column-two-thirds idsk-footer-extended-help-form-header-mobile"
                    >
                      <h3 class="govuk-heading-x">
                        Pomôžte nám zlepšiť mirri.gov.sk
                      </h3>
                    </div>
                    <div
                      class="govuk-grid-column-one-third idsk-footer-extended-close-button-mobile"
                    >
                      <button
                        id="idsk-footer-extended-close-error-form-button"
                        type="button"
                        class="idsk-footer-extended-feedback-button idsk-footer-extended-help-button"
                      >
                        Zatvoriť
                      </button>
                    </div>
                  </div>
                  <p class="idsk-footer-extended-form-text">
                    Prosím nevpisujte žiadne osobné informácie (meno, kontakt a
                    iné).
                  </p>
                  <br />
                  <div class="idsk-footer-extended-close-button">
                    <div class="govuk-form-group">
                      <label class="govuk-label" for="sort">
                        Aký typ chyby ste našli?
                      </label>
                      <select class="govuk-select" id="sort" name="sort">
                        <option value="published">Kompilačná chyba</option>
                        <option value="updated">Gramatická chyba</option>
                        <option value="views">Chyba responzivity</option>
                        <option value="comments">Chyba iná</option>
                        <option value="comments">Chyba piata</option>
                        <option value="comments">Chyba šiesta</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <br />

                    <div
                      class="idsk-character-count"
                      data-module="idsk-character-count"
                      data-maxlength="200"
                    >
                      <div class="govuk-form-group">
                        <label class="govuk-label" for="with-hint">
                          Popíšte chybu bližšie
                        </label>
                        <span id="with-hint-hint" class="govuk-hint"> </span>
                        <textarea
                          class="govuk-textarea govuk-js-character-count"
                          id="with-hint"
                          name="with-hint"
                          rows="5"
                          aria-describedby="with-hint-info with-hint-hint"
                        ></textarea>
                      </div>

                      <span
                        id="with-hint-info"
                        class="govuk-hint govuk-character-count__message"
                        aria-live="polite"
                      >
                        You can enter up to 200 characters
                      </span>
                    </div>
                  </div>
                  <div
                    class="idsk-footer-extended__feedback-info"
                    data-email="idsk@vicepremier.gov.sk"
                    data-subject="Nahlásenie chyby"
                  >
                    Dobrý deň, na stránke idsk.gov.sk máte problém týkajúci sa:
                    %issue%. Popis chyby: %description%
                  </div>
                  <div class="idsk-footer-extended-feedback-button">
                    <button
                      id="submit-button-error-form"
                      type="submit"
                      class="idsk-button"
                      data-module="idsk-button"
                    >
                      Odoslať
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="idsk-footer-extended-main-content">
        <div class="govuk-width-container">
          <div class="govuk-grid-column-two-thirds">
            <h3 class="govuk-heading-m">O meste</h3>
            <div class="idsk-footer-extended-subtitle">
              <div class="govuk-grid-column-one-half">
                <ul>
                  <li
                    v-for="(item, index) in menuItems.oMeste.firstBlock"
                    :key="index"
                    class="idsk-footer-extended-list-item"
                  >
                    <a
                      class="govuk-link-custom"
                      title="Link small Regular 12/20"
                      :href="item.url"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="govuk-grid-column-one-half">
                <ul>
                  <li
                    v-for="(item, index) in menuItems.oMeste.secondBlock"
                    :key="index"
                    class="idsk-footer-extended-list-item"
                  >
                    <a
                      class="govuk-link-custom"
                      title="Link small Regular 16/20"
                      :href="item.url"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="govuk-grid-column-one-third">
            <h3 class="govuk-heading-m">Kluby</h3>
            <div
              class="govuk-grid-column-three-thirds idsk-footer-extended-subtitle"
            >
              <ul>
                <li
                  v-for="(item, index) in menuItems.kluby"
                  :key="index"
                  class="idsk-footer-extended-list-item"
                >
                  <a
                    class="govuk-link-custom"
                    title="Link small Regular 20/20"
                    :href="item.url"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="govuk-grid-column-two-thirds">
            <h3 class="govuk-heading-m">Informačný servis</h3>
            <div class="idsk-footer-extended-subtitle">
              <div class="govuk-grid-column-one-half">
                <ul>
                  <li
                    v-for="(item, index) in menuItems.service.firstBlock"
                    :key="index"
                    class="idsk-footer-extended-list-item"
                  >
                    <a
                      class="govuk-link-custom"
                      title="Link small Regular 12/20"
                      :href="item.url"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="govuk-grid-column-one-half">
                <ul>
                  <li
                    v-for="(item, index) in menuItems.service.secondBlock"
                    :key="index"
                    class="idsk-footer-extended-list-item"
                  >
                    <a
                      class="govuk-link-custom"
                      title="Link small Regular 16/20"
                      :href="item.url"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="govuk-grid-column-one-third">
            <h3 class="govuk-heading-m">Pre občanov</h3>
            <div
              class="govuk-grid-column-three-thirds idsk-footer-extended-subtitle"
            >
              <ul>
                <li
                  v-for="(item, index) in menuItems.obcanov"
                  :key="index"
                  class="idsk-footer-extended-list-item"
                >
                  <a
                    class="govuk-link-custom"
                    title="Link small Regular 28/20"
                    :href="item.url"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="govuk-grid-column-full">
            <div
              class="idsk-footer-extended-description-panel idsk-footer-extended-description-panel-top-border"
            >
              <div
                class="govuk-grid-column-two-thirds idsk-footer-extended-info-links third-row"
              >
                <p class="idsk-footer-extended-frame third-row-title">
                  Prevádzkovateľom služby je Ministerstvo investícií,
                  regionálneho rozvoja a informatizácie SR.
                </p>

                <p class="idsk-footer-extended-frame third-row-label">
                  Vytvorené v súlade s
                  <a
                    class="govuk-link-custom"
                    title="Jednotným dizajn manuálom elektronických služieb."
                    href="#"
                  >
                    Jednotným dizajn manuálom elektronických služieb.
                  </a>
                </p>
              </div>
              <div class="idsk-footer-extended-meta-item third-row-links">
                <ul class="idsk-footer-extended-inline-list list-links">
                  <li
                    v-for="(item, index) in extraLinks"
                    :key="index"
                    class="idsk-footer-extended-inline-list-item"
                  >
                    <a
                      class="govuk-link-custom"
                      title="Pomoc"
                      :href="item.url"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      menuItems: {
        oMeste: {
          firstBlock: [
            {
              name: "Zákaldné údaje",
              url: "",
            },
            {
              name: "História mesta",
              url: "",
            },
            {
              name: "Symboly mesta",
              url: "",
            },
            {
              name: "Štatút mesta",
              url: "",
            },
          ],
          secondBlock: [
            {
              name: "Meské kultúrne stredisko",
              url: "",
            },
            {
              name: "Mestská plaváreň",
              url: "",
            },
            {
              name: "Mapa mesta",
              url: "",
            },
            {
              name: "Mestský infolist Trebišov",
              url: "",
            },
          ],
        },
        kluby: [
          {
            name: "Trebišovský umelecký klub",
            url: "",
          },
          {
            name: "Mestský športový klub mládeže",
            url: "",
          },
          {
            name: "Centrum voľného času",
            url: "",
          },
        ],
        service: {
          firstBlock: [
            {
              name: "Mestský úrad",
              url: "",
            },
            {
              name: "Úradná tabuľa",
              url: "",
            },
            {
              name: "Zverejňovanie objednávok a faktúr",
              url: "",
            },
            {
              name: "Interné predpisy",
              url: "",
            },
          ],
          secondBlock: [
            {
              name: "Oznamy",
              url: "",
            },
            {
              name: "Verejné obstarávanie",
              url: "",
            },
            {
              name: "Všeobecne záväzné nariadenia",
              url: "",
            },
          ],
        },

        obcanov: [
          {
            name: "Občianska inzercia",
            url: "",
          },
          {
            name: "Odkaz pre starostu",
            url: "",
          },
          {
            name: "Hlas občanov",
            url: "",
          },
          {
            name: "Oznámenia o výsledku vybavenia petícií",
            url: "",
          },
        ],
      },
      extraLinks: [
        {
          name: "Kontakty",
          url: "",
        },
        {
          name: "Dôležité čísla",
          url: "",
        },
        {
          name: "Cookies",
          url: "",
        },
        {
          name: "Vyhlásenie o prístupnosti",
          url: "",
        },
        {
          name: "Mapa webovej stránky",
          url: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section {
  padding-top: 15px;
  padding-bottom: 119px;
  border: 1px solid rgba(11, 12, 12, 0.25);
}
.idsk-footer-extended-description-panel {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.custom {
  width: 60%;
  padding-bottom: 30px;
}

.third-row {
  width: 100% !important;
  padding-top: 25px !important;
}

.third-row-title {
  margin-bottom: 30px !important;
  height: 100%;
}

.third-row-label {
  margin-bottom: 30px !important;
  height: 100%;
}

.list-links {
  padding: 0px;
  margin: 0px;
}

.govuk-heading-m {
  padding-top: 35px !important;
}

.idsk-footer-extended-subtitle {
  border-top: 1px solid rgba(11, 12, 12, 0.38) !important;
}

li:hover .govuk-link-custom {
  color: #003078 !important;
}
li:visited .govuk-link-custom {
  color: #003078 !important;
}
li:focus .govuk-link-custom {
  background-color: #ffdf0f !important;
}

@media (max-width: 645px) {
  .custom {
    width: 100%;
    padding-bottom: 30px;
  }
}
</style>
