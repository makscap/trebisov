<template>
  <!--  <form method="POST">-->
  <div>
    <div
      class="idsk-cookie-banner"
      data-nosnippet
      role="region"
      aria-label="Cookies na trebisov.sk"
      v-if="openBanner && !setCookies"
    >
      <div
        class="idsk-cookie-banner__message idsk-cookie-banner__example govuk-width-container"
      >
        <div class="govuk-grid-row">
          <div class="govuk-grid-column-two-thirds">
            <h2 class="idsk-cookie-banner__heading govuk-heading-m">
              Cookies na trebisov.sk
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
                    <router-link
                      class="idsk-button idsk-header-web__main--login-loginbtn"
                      to="/auth"
                    >
                      Prihlásiť sa
                    </router-link>
                    <!-- <button
                      type="button"
                      class="idsk-button idsk-header-web__main--login-loginbtn"
                      data-module="idsk-button"
                    >
                      Prihlásiť sa
                    </button> -->
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
                        page.title == 'TREBISOV'
                          ? 'Rozbalit menu položku ' + page.title
                          : 'Otvoriť stránku ' + page.title + ' na tejto karte.'
                      "
                      :to="page.route"
                      @click="falseFunction($event, page.route)"
                      :aria-label="
                        page.title == 'TREBISOV'
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
            { title: "Základné údaje", route: "/o-meste/zakladne-udaje" },
            { title: "História mesta", route: "/o-meste/historia-mesta" },
            { title: "Symboly mesta", route: "/o-meste/symboly-mesta" },
            { title: "Štatút mesta", route: "/o-meste/statut-mesta" },
            {
              title: "Infolist mesta Trebišov",
              route: "/o-meste/infolist-mesta",
            },
          ],
          route: "",
        },

        {
          title: "Samospráva mesta",
          subpages: [
            { title: "Primátor", route: "/samosprava-mesta/primator" },
            {
              title: "Zástupcovia primátora",
              route: "/samosprava-mesta/zastupcovia-primatora",
            },
            {
              title: "Mestské zastupiteľstvo",
              route: "/samosprava-mesta/mestske-zastupitelstvo",
            },
            {
              title: "Hlavný kontrolór",
              route: "/samosprava-mesta/hlavny-kontrolor",
            },
            {
              title: "Úradná tabuľa",
              route: "/samosprava-mesta/uradna-tabula",
            },
            { title: "Rozpočet", route: "/samosprava-mesta/rozpocet-mesta" },
            { title: "Dotácie", route: "/samosprava-mesta/dotacie" },
            {
              title: "Verejné obstarávanie",
              route: "/samosprava-mesta/verejne-obstaravanie",
            },
            {
              title: "Interné predpisy",
              route: "/samosprava-mesta/interne-predpisy",
            },
            {
              title: "Zmluvy, faktúry, objednávky",
              route: "/samosprava-mesta/zmluvy-faktury",
            },
          ],
          route: "",
        },

        {
          title: "Mestský úrad",
          subpages: [
            {
              title: "O mestskom úrade",
              route: "/mestsky-urad/o-mestskom-urade",
            },
            { title: "Prednosta", route: "/mestsky-urad/prednosta" },
            { title: "Oddelenia", route: "/mestsky-urad/oddelenia" },
            { title: "Strediská", route: "/mestsky-urad/strediska" },
            { title: "Oznamy", route: "/mestsky-urad/oznamy" },
            {
              title: "Oznamy o úmrtiach",
              route: "/mestsky-urad/oznamy-o-umrtiach",
            },
            {
              title: "Strategické dokumenty",
              route: "/mestsky-urad/strategicke-dokumenty",
            },
            {
              title: "Všeobecne záväzné nariadenia",
              route: "/mestsky-urad/vseobecne-zavazne-nariadenia",
            },
            { title: "Cenník", route: "/mestsky-urad/cenniky" },
          ],
          route: "",
        },

        {
          title: "Pre občanov",
          subpages: [
            {
              title: "Evidencia obyvateľov",
              route: "/pre-obcanov/evidencia-obyvatelov",
            },
            { title: "Matrika", route: "/pre-obcanov/matrika" },
            { title: "Karty", route: "/pre-obcanov/karty" },
            { title: "Stavebný úrad", route: "/" },
            { title: "Sociálna pomoc", route: "/pre-obcanov/socialna-pomoc" },
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
            { title: "Aktuality", route: "/zivot-v-meste/aktuality" },
            {
              title: "Historické a kultúrne pamiatky",
              route: "/zivot-v-meste/historicke-a-kulturne-pamiatky",
            },
            { title: "Podujatia", route: "/zivot-v-meste/podujatia" },
            { title: "Fotogaléria", route: "/zivot-v-meste/fotogaleria" },
            { title: "Kam do mesta", route: "/" },
            { title: "Školstvo", route: "/zivot-v-meste/skolstvo" },
            {
              title: "Mestský športový klub mládeže",
              route: "/zivot-v-meste/mestsky-sportovy-klub-mladeze",
            },
            { title: "Polícia", route: "/zivot-v-meste/policia" },
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
