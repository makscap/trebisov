<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Oznamy</h1>

      <ul class="list">
        <li class="item" v-for="(link, i) in links" :key="i">
          <p class="date">{{ link.date }}</p>
          <router-link
            class="link"
            :to="this.$route.path + link.url"
            :title="link.name"
            aria-hidden="false"
            >{{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- <div data-module="idsk-crossroad" class="">
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
    </div> -->
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
  data() {
    return {
      links: [
        {
          name: "Elektronické čipovanie nádob na zmesový komunálny odpad",
          date: "26.07.2022",
          url: "/1",
        },
        {
          name: "Elektronické čipovanie nádob na zmesový komunálny odpad",
          date: "26.07.2022",
          url: "/1",
        },
        {
          name: "Elektronické čipovanie nádob na zmesový komunálny odpad",
          date: "26.07.2022",
          url: "/1",
        },
      ],
    };
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
.list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.item {
  width: 100%;
  padding: 12px 0px;
}

.date {
  margin-bottom: 8px !important;
  color: #626a6e !important;
}

.link {
  font-weight: 700;
}
</style>
