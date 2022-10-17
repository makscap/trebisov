<template>
  <div class="govuk-width-container">
    <h1 class="govuk-heading-l">Kontakt</h1>
    <h3 class="govuk-heading-s black">
      Ministerstvo dopravy a výstavby Slovenskej republiky<br />
      Oddelenie bezpečnosti cestnej premávky
      <br /><br />
      Adresa:
    </h3>
    <p id="contact-p">
      Námestie Slobody 6, P.O.BOX 100,<br />810 05 Bratislava 15
    </p>
    <h3 class="govuk-heading-s black">Kontakt:</h3>
    <div style="margin-bottom: 70px" class="row" id="last-row">
      <img id="post" src="@/assets/post.png" alt="" />
      <a href="mailto:becep@mindop.sk" id="email" class="govuk-link-custom">
        becep@mindop.sk
      </a>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "ContactsComponent",
  setup() {
    useMeta({
      title: "Kontakt",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Ministerstvo dopravy a výstavby Slovenskej republiky Oddelenie bezpečnosti cestnej premávky ",
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

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
