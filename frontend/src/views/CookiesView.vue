<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Oznámenie o používaní súborov cookies</h1>
    <p>
      Kedykoľvek navštívite toto webové sídlo, môže dochádzať ku zhromažďovaniu
      informácií prostredníctvom súborov cookies. Získané súbory cookies sú
      využívané len vo veľmi obmedzenom rozsahu, ktorý je nevyhnutný pre
      technické účely (funkčnosť webového sídla) v súlade s medzinárodnými
      štandardami NAI –
      <a href="https://www.networkadvertising.org">www.networkadvertising.org</a
      >. Tieto informácie nie je možné prepojiť so žiadnou konkrétnou osobou.
      Návštevou tohto webového sídla súhlasíte s používaním súborov cookies v
      rozsahu uvedenom v tomto Oznámení o používaní súborov cookies.<br /><br />
      Pokiaľ chcete získať podrobnejšie informácie o súboroch cookies, ktoré
      používame, obrátte sa na našu zodpovednú osobu prostredníctvo e-mailovej
      adresy <a href="mailto:becep@mindop.sk">becep@mindop.sk</a><br /><br />
      Návštevou webového sídla súhlasíte s tým, že môžeme do Vášho počítača
      alebo zariadenia umiestniť súbory cookies, tak ako je vysvetlené vyššie.
      Tieto súbory však môžete kontrolovať a spravovať niekoľkými spôsobmi.
      Majte prosím na pamäti, že odstránenie alebo blokovanie súborov cookies
      môže ovplyvniť Vašu užívateľskú skúsenosť a je možné, že nebudete mať
      úplný prístup k niektorým oblastiam webového sídla.<br /><br />
      Väčšina internetových prehliadačov Vám umožní kontrolovať, aké súbory
      cookies máte uložené, jednotlivé súbory cookies vymazať alebo ukladať
      súbory cookies z určitých alebo všetkých webových stránok. Vezmite prosím
      na vedomie, že pokiaľ všetky súbory cookies odstránite, všetky Vaše osobné
      nastavenia budú stratené, a to vrátane preferencií zakazujúcich používanie
      súborov cookies, pretože aj táto voľba vyžaduje nastavenie tzv. opt-out
      cookies. Viac informácií o tom ako môžete nastaviť svoj internetový
      prehliadač tak, aby boli súbory cookies blokované alebo filtrované,
      nájdete na
      <a href="http://www.cookiecentral.com/faq/">www.cookiecentral.com/faq</a>
      alebo
      <a href="https://www.aboutcookies.org">www.aboutcookies.org</a
      >.<br /><br />
      Za účelom zobrazenia obsahu webového sídla, napríklad za účelom zobrazenia
      obrázkov alebo videí, niekedy používame externé webové služby. Rovnako ako
      v prípade tlačidiel sociálnych sietí nie sme schopní týmto externým
      stránkam alebo doménam zabrániť, aby zhromažďovali údaje o tom, ako
      využívate obsah vložený na naše webové sídlo.<br /><br />
      Toto Oznámenie o používaní súborov cookies môže byť upravené alebo
      doplnené. Odporúčame Vám pravidelne kontrolovať toto Oznámenie o používaní
      súborov cookies, aby ste mali prehľad o tom, akým spôsobom súbory cookies
      používame.
    </p>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "CookiesView",
  setup() {
    useMeta({
      title: "Oznámenie o používaní súborov cookies",
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
};
</script>
