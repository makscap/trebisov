<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Nastavenia cookies</h1>
    <div class="govuk-form-group">
      <div class="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            id="colours-3"
            name="colours"
            type="checkbox"
            value="necessary"
            checked
            disabled
          />
          <label class="govuk-label govuk-checkboxes__label" for="colours-3">
            Nevyhnutne nutné súbory cookie
          </label>
        </div>
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            id="colours-2"
            name="colours"
            type="checkbox"
            value="prefered"
            @click="cookiesChanged = false"
          />
          <label class="govuk-label govuk-checkboxes__label" for="colours-2">
            Preferenčné súbory cookie
          </label>
        </div>
        <div class="govuk-inset-text">
          Sú to základné súbory cookie, ktoré umožňujú pohybovať sa po webovej
          stránke a používať jej funkcie. Tieto súbory cookie neukladajú žiadne
          informácie o vás, ktoré by sa dali použiť na marketing alebo na
          zapamätaniesi, čo ste si na internete pozerali.
        </div>
        <div class="govuk-inset-text">
          V týchto súboroch sa ukladajú vaše voľby (napr. jazykové preferencie)
          a osobné charakteristiky. Môžu sa v nich uložiť zmeny, ktoré ste na
          webovej stránke urobili. Dá sa zabezpečiť, aby sa informácie zbierali
          anonymne. Na ich základe nie je možné zistiť, ktoré iné webové stránky
          ste navštívili.
        </div>
      </div>
      <button
        value="understand"
        type="submit"
        name="cookies"
        class="idsk-button"
        data-module="idsk-button"
        @click="handleCookieClick"
      >
        Uložiť nastavenia
      </button>
      <template v-if="cookiesChanged">
        <div>Nastavenia cookies boli zmené</div>
      </template>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SetCookiesView",
  data() {
    return {
      cookiesChanged: false,
    };
  },
  setup() {
    useMeta({
      title: "Oznámenie o nastavení súborov cookies",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Kedykoľvek navštívite toto webové sídlo, môže dochádzať ku zhromažďovaniu informácií prostredníctvom súborov cookies. Získané súbory cookies sú využívané len vo veľmi obmedzenom rozsahu, ktorý je nevyhnutný pre technické účely (funkčnosť webového sídla) v súlade s medzinárodnými štandardami NAI – www.networkadvertising.org. Tieto informácie nie je možné prepojiť so žiadnou konkrétnou osobou. Návštevou tohto webového sídla súhlasíte s používaním súborov cookies v rozsahu uvedenom v tomto Oznámení o používaní súborov cookies.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
  methods: {
    handleCookieClick() {
      this.$cookies.set("understandCookie", true);
      // this.openBanner = false;
      this.cookiesChanged = true;
    },
  },
};
</script>
