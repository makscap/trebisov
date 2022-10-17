<template>
  <!--  <form method="POST">-->
  <div>
    <div
      class="idsk-cookie-banner"
      data-nosnippet
      role="region"
      aria-label="Cookies na becep.sk"
      v-if="openBanner && !setCookies"
    >
      <div
        class="idsk-cookie-banner__message idsk-cookie-banner__example govuk-width-container"
      >
        <div class="govuk-grid-row">
          <div class="govuk-grid-column-two-thirds">
            <h2 class="idsk-cookie-banner__heading govuk-heading-m">
              Cookies na becep.sk
            </h2>
            <div class="idsk-cookie-banner__content">
              <p>
                Používame len základné cookies súbory aby mohla táto stránka
                fungovať.
              </p>
            </div>
          </div>
        </div>

        <div class="idsk-button-group idsk-button-group-cookie">
          <button
            value="understand"
            type="submit"
            name="cookies"
            class="idsk-button"
            data-module="idsk-button"
            @click="handleCookieClick"
          >
            Prijať všetky cookies
          </button>
          <button
            value="understand"
            type="submit"
            name="cookies"
            class="idsk-button"
            data-module="idsk-button"
            @click="handleCookieClick"
          >
            Odmietnúť cookies
          </button>
          <a
            class="govuk-link cookies-link"
            href="/nastavenia-cookies"
            title="Po kliknutí sa otvorí v tomto okne stránka s nastavením cookies."
            >Nastavenia cookies</a
          >
          <a
            class="govuk-link cookies-link"
            href="/cookies"
            title="Po kliknutí sa otvorí v tomto okne stránka s vysvetlením používania cookies."
            >Ako používame cookies</a
          >
        </div>

        <div
          class="idsk-cookie-banner__message idsk-cookie-banner__example govuk-width-container idsk-cookie-banner__message-understand"
          hidden
        >
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-two-thirds">
              <div class="idsk-cookie-banner__content">
                <p>
                  Ďakujeme za pochopenie, táto správa sa viac nebude zobrazovať.
                </p>
              </div>
            </div>
          </div>
          <div class="idsk-button-group">
            <a
              href="#"
              role="button"
              draggable="false"
              class="idsk-button hide-banner"
              data-module="idsk-button"
              title="Po kliknutí sa skryje obsah o akceptovaní cookies súborov."
            >
              Skryť túto správu
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--  </form>-->

    <header class="idsk-header-web" data-module="idsk-header-web">
      <div class="idsk-header-web__tricolor"></div>

      <div class="idsk-header-web__brand">
        <!-- <div class="govuk-width-container">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
              <div class="idsk-header-web__brand-gestor">
                <span class="govuk-body-s idsk-header-web__brand-gestor-text">
                  Oficiálna stránka
                  <button
                    class="idsk-header-web__brand-gestor-button"
                    aria-label="Zobraziť informácie o stránke"
                    aria-expanded="false"
                    data-text-for-hide="Skryť informácie o stránke"
                    data-text-for-show="Zobraziť informácie o stránke"
                    @click="openInfo = !openInfo"
                  >
                    verejnej správy SR
                    <span class="idsk-header-web__link-arrow"></span>
                  </button>
                </span>
                <span
                  class="govuk-body-s idsk-header-web__brand-gestor-text--mobile"
                >
                  SK
                  <button
                    class="idsk-header-web__brand-gestor-button"
                    aria-label="Zobraziť informácie o stránke"
                    aria-expanded="false"
                    data-text-for-hide="Skryť informácie o stránke"
                    data-text-for-show="Zobraziť informácie o stránke"
                    @click="openInfo = !openInfo"
                  >
                    e-gov
                    <span class="idsk-header-web__link-arrow"></span>
                  </button>
                </span>
                <div class="idsk-header-web__brand-dropdown">
                  <div class="govuk-width-container">
                    <div class="govuk-grid-row">
                      <div class="govuk-grid-column-one-half">
                        <h3 class="govuk-body-s">Doména gov.sk je oficálna</h3>
                        <p class="govuk-body-s">
                          Toto je oficiálna webová stránka orgánu verejnej moci
                          Slovenskej republiky. Oficiálne stránky využívajú
                          najmä doménu gov.sk.
                          <a
                            class="govuk-link"
                            style="color: white !important"
                            href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
                            target="_blank"
                            title="odkazy na webové sídla orgánov verejnej moci"
                            >Odkazy na jednotlivé webové sídla orgánov verejnej
                            moci nájdete na tomto odkaze</a
                          >.
                        </p>
                      </div>
                      <div class="govuk-grid-column-one-half">
                        <h3 class="govuk-body-s">
                          Táto stránka je zabezpečená
                        </h3>
                        <p class="govuk-body-s">
                          Buďte pozorní a vždy sa uistite, že zdieľate
                          informácie iba cez zabezpečenú webovú stránku verejnej
                          správy SR. Zabezpečená stránka vždy začína https://
                          pred názvom domény webového sídla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="idsk-header-web__brand-spacer"></div>
            </div>
          </div>
        </div> -->
      </div>

      <div class="idsk-header-web__main">
        <div class="govuk-width-container">
          <div class="govuk-grid-row">
            <div
              class="govuk-grid-column-full govuk-grid-column-one-third-from-desktop"
            >
              <div class="idsk-header-web__main-headline">
                <router-link to="/" title="Odkaz na úvodnú stránku" role="main">
                  <img
                    src="@/assets/becep_logo.svg"
                    alt="Bezpečnosť cestnej premávky"
                    class="idsk-header-web__main-headline-logo"
                  />
                  <h2 class="govuk-heading-m">MESTO TREBIŠOV</h2>

                  <!-- <p class="logo_text">MESTO TREBIŠOV</p> -->
                </router-link>

                <button
                  class="idsk-button idsk-header-web__main-headline-menu-button"
                  aria-label="Rozbaliť menu"
                  aria-expanded="false"
                  data-text-for-show="Rozbaliť menu"
                  data-text-for-hide="Skryť menu"
                >
                  Menu
                  <span class="idsk-header-web__menu-open"></span>
                  <span class="idsk-header-web__menu-close"></span>
                </button>
              </div>
            </div>

            <div class="govuk-grid-column-two-thirds">
              <div class="idsk-header-web__main-action">
                <form
                  class="idsk-header-web__main-action-search"
                  :action="`/vyhladavanie?search=${searchText}`"
                >
                  <input
                    class="govuk-input govuk-!-display-inline-block"
                    name="search"
                    placeholder="Zadajte hľadaný výraz"
                    title="Zadajte hľadaný výraz"
                    type="search"
                    v-model="searchText"
                    aria-label="Zadajte hľadaný výraz"
                  />
                  <button
                    type="submit"
                    class="govuk-button"
                    data-module="govuk-button"
                  >
                    <span class="govuk-visually-hidden">Vyhľadať</span>
                    <i aria-hidden="true" class="fas fa-search"></i>
                  </button>
                </form>
                <div class="idsk-header-web__main--buttons">
                  <div class="idsk-header-web__main--login">
                    <button
                      type="button"
                      class="idsk-button idsk-header-web__main--login-loginbtn"
                      data-module="idsk-button"
                    >
                      Prihlásiť sa
                    </button>
                    <div class="idsk-header-web__main--login-action">
                      <img
                        class="idsk-header-web__main--login-action-profile-img"
                        src="/assets/images/header-web/profile.svg"
                        alt="Profile image"
                      />
                      <div class="idsk-header-web__main--login-action-text">
                        <span
                          class="govuk-body-s idsk-header-web__main--login-action-text-user-name"
                        >
                          Ing. Jožko Veľký M.A
                        </span>
                        <div class="govuk-!-margin-bottom-1">
                          <a
                            class="govuk-link idsk-header-web__main--login-action-text-logout idsk-header-web__main--login-logoutbtn"
                            href="#"
                            title="odhlásiť"
                          >
                            Odhlásiť
                          </a>
                          <span> | </span>
                          <a
                            class="govuk-link idsk-header-web__main--login-action-text-profile idsk-header-web__main--login-profilebtn"
                            href="#"
                            title="profil"
                          >
                            Profil
                          </a>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="idsk-button idsk-header-web__main--login-profilebtn"
                      data-module="idsk-button"
                    >
                      Profil
                    </button>
                    <button
                      type="button"
                      class="idsk-button idsk-header-web__main--login-logoutbtn"
                      data-module="idsk-button"
                    >
                      Odhlásiť sa
                    </button>
                  </div>
                </div>
              </div>
              <!-- <div class="idsk-header-extended__social">
                <ul class="idsk-header-extended__social-list">
                  <li class="idsk-header-extended__social-item">
                    <a
                      class="idsk-header-extended__social-link"
                      href="https://www.facebook.com/BECEP.SR"
                      title="Po kliknutí sa v novom okne otvorí facebook stránka BECEPu."
                      target="_blank"
                    >
                      <span class="govuk-visually-hidden">Facebook</span>
                      <i class="fab fa-facebook-f icon" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="idsk-header-extended__social-item">
                    <a
                      class="idsk-header-extended__social-link"
                      href="https://www.instagram.com/becep.sk/"
                      title="Po kliknutí sa v novom okne otvorí instagram profilová stránka BECEPu."
                      target="_blank"
                    >
                      <span class="govuk-visually-hidden">Instagram</span>
                      <i class="fab fa-instagram icon" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="idsk-header-web__nav--divider"></div>
      <div class="idsk-header-web__nav idsk-header-web__nav--mobile">
        <div class="govuk-width-container">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
              <form
                class="idsk-header-web__main-action-search"
                :action="`/vyhladavanie?search=${searchText}`"
              >
                <input
                  class="govuk-input govuk-!-display-inline-block"
                  id="idsk-header-web__main-action-search-input"
                  name="search"
                  v-model="searchText"
                  placeholder="Zadajte hľadaný výraz"
                  title="Zadajte hľadaný výraz"
                  type="search"
                  aria-describedby="input-width-30-hint"
                  aria-label="Zadajte hľadaný výraz"
                />
                <button
                  type="submit"
                  class="govuk-button"
                  data-module="govuk-button"
                >
                  <span class="govuk-visually-hidden">Vyhľadať</span>
                  <i aria-hidden="true" class="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div class="govuk-grid-column-full">
              <nav class="idsk-header-web__nav-bar--buttons">
                <ul
                  class="idsk-header-web__nav-list"
                  aria-label="Hlavná navigácia"
                >
                  <li
                    class="idsk-header-web__nav-list-item"
                    v-for="page in pages"
                    :key="page.title"
                  >
                    <router-link
                      class="govuk-link idsk-header-web__nav-list-item-link"
                      :title="
                        page.title == 'BECEP'
                          ? 'Rozbalit menu položku ' + page.title
                          : 'Otvoriť stránku ' + page.title + ' na tejto karte.'
                      "
                      :to="page.route"
                      @click="falseFunction($event, page.route)"
                      :aria-label="
                        page.title == 'BECEP'
                          ? 'Rozbalit menu položku ' + page.title
                          : 'Otvoriť stránku ' + page.title + ' na tejto karte.'
                      "
                      aria-expanded="false"
                      :data-text-for-hide="`Skryť ${page.title}`"
                      :data-text-for-show="`Rozbaliť ${page.title}`"
                      :class="{ strong: page.type === 'strong' }"
                    >
                      {{ page.title }}
                      <div
                        class="idsk-header-web__link-arrow"
                        v-if="page.subpages.length !== 0"
                      ></div>
                      <div
                        class="idsk-header-web__link-arrow-mobile"
                        v-if="page.subpages.length !== 0"
                      ></div>
                    </router-link>
                    <div
                      class="idsk-header-web__nav-submenu"
                      v-if="page.subpages.length !== 0"
                    >
                      <div class="govuk-width-container">
                        <div class="govuk-grid-row">
                          <ul
                            class="idsk-header-web__nav-submenu-list"
                            aria-label="Vnútorná navigácia"
                          >
                            <li
                              class="idsk-header-web__nav-submenu-list-item"
                              v-for="subpage in page.subpages"
                              :key="subpage.title"
                            >
                              <router-link
                                class="govuk-link idsk-header-web__nav-submenu-list-item-link"
                                :title="
                                  'Otvoriť stránku ' +
                                  subpage.title +
                                  ' na tejto karte.'
                                "
                                :to="subpage.route"
                                :aria-label="
                                  'Otvoriť stránku ' +
                                  page.title +
                                  ' na tejto karte.'
                                "
                                @click="falseFunction($event, subpage.route)"
                              >
                                <span>{{ subpage.title }}</span>
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import { initAll } from "@id-sk/frontend/idsk/all";
import { useRoute } from "vue-router";

export default {
  name: "HeaderComponent",
  data() {
    return {
      openBanner: true,
      openInfo: false,
      searchText: "",
      pages: [
        {
          title: "O meste",
          subpages: [
            { title: "Základné údaje", route: "/" },
            { title: "Symboly mesta", route: "/" },
            { title: "História mesta", route: "/" },
            { title: "Štatút mesta", route: "/" },
            { title: "Infolist mesta Trebišov", route: "/" },
          ],
          route: "",
        },

        {
          title: "Samospráva mesta",
          subpages: [
            { title: "Primátor", route: "/" },
            { title: "Zástupcovia primátora", route: "/" },
            { title: "Mestské zastupiteľstvo", route: "/" },
            { title: "Hlavný kontrolór", route: "/" },
            { title: "Úradná tabuľa", route: "/" },
            { title: "Rozpočet", route: "/" },
            { title: "Dotácie", route: "/" },
            { title: "Verejné obstarávanie", route: "/" },
            { title: "Interné predpisy", route: "/" },
            { title: "Zmluvy, faktúry, objednávky", route: "/" },
          ],
          route: "",
        },

        {
          title: "Mestský úrad",
          subpages: [
            { title: "O mestskom úrade", route: "/" },
            { title: "Prednosta", route: "/" },
            { title: "Oddelenia", route: "/" },
            { title: "Strediská", route: "/" },
            { title: "Oznamy", route: "/" },
            { title: "Oznamy o úmrtiach", route: "/" },
            { title: "Strategické dokumenty", route: "/" },
            { title: "Všeobecne záväzné nariadenia", route: "/" },
            { title: "Cenník", route: "/" },
          ],
          route: "",
        },

        {
          title: "Pre občanov",
          subpages: [
            { title: "Evidencia obyvateľov", route: "/" },
            { title: "Matrika", route: "/" },
            { title: "Karty", route: "/" },
            { title: "Stavebný úrad", route: "/" },
            { title: "Sociálna pomoc", route: "/" },
            { title: "Komunálny odpad", route: "/" },
            { title: "Miestne dane a poplatky", route: "/" },
            { title: "Doprava a komunikácie", route: "/" },
            { title: "Životné prostredie", route: "/" },
            { title: "Informácie", route: "/" },
            { title: "Otázky a odpovede", route: "/" },
            { title: "Ostatné", route: "/" },
          ],
          route: "",
        },

        {
          title: "Život v meste",
          subpages: [
            { title: "Aktuality", route: "/" },
            { title: "Historické a kultúrne pamiatky", route: "/" },
            { title: "Podujatia", route: "/" },
            { title: "Fotogaléria", route: "/" },
            { title: "Kam do mesta", route: "/" },
            { title: "Školstvo", route: "/" },
            { title: "Mestský športový klub mládeže", route: "/" },
            { title: "Polícia", route: "/" },
          ],
          route: "",
        },
      ],
    };
  },
  beforeMount() {
    if (this.$cookies.get("understandCookie")) this.openBanner = false;
  },
  computed: {
    setCookies() {
      const route = useRoute();
      return route.name === "nastavenia-cookies";
    },
  },
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    handleCookieClick() {
      this.$cookies.set("understandCookie", true);
      this.openBanner = false;
    },
  },
};
</script>

<style scoped>
.logo_text {
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #024497;
}
.strong {
  font-weight: bold;
}
.idsk-header-web__brand-dropdown .govuk-width-container {
  width: 85vw;
}
.icon {
  color: #024497;
}
.govuk-button {
  background-color: #0065b3 !important;
}
.cookies-link {
  color: #024497 !important;
}

.idsk-header-web__brand {
  height: 40px !important;
}

.idsk-header-web__nav-submenu-list-item {
  width: 25% !important;
}
</style>
