<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Oznamy</h2>

    <div data-module="idsk-crossroad" class="">
      <div class="idsk-crossroad idsk-crossroad-1">
        <div class="idsk-crossroad__item">
          <p class="idsk-crossroad-subtitle" aria-hidden="false">26.07.2022</p>
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 1st element"
            aria-hidden="false"
            >Elektronické čipovanie nádob na zmesový komunálny odpad
          </a>
        </div>
        <div class="idsk-crossroad__item">
          <p class="idsk-crossroad-subtitle" aria-hidden="false">26.07.2022</p>
          <a
            href="#"
            class="govuk-link idsk-crossroad-title"
            title="Title for 1st element"
            aria-hidden="false"
            >Elektronické čipovanie nádob na zmesový komunálny odpad
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
  data() {
    return {};
  },
  setup() {
    useMeta({
      title: "Domov",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Národný kooridnátor pre zvyšovanie bezpečnosti cestnej premávky",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },

  mounted() {},
  components: {},
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped>
.main-box {
  margin-bottom: 50px;
}
.card-img {
  width: 100% !important;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px;
}

.textbox_child_second {
  padding-left: 30px;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
.contact_list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.phone,
.email {
  display: inline-block;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
}
</style>
