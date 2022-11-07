<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Historické a kultúrne pamiatky</h1>

      <ul class="list-none p-0 m-0">
        <li v-for="(item, i) of list" :key="i" class="item">
          <div class="image_box image_extra">
            <img
              class="image"
              :src="require('@/assets/sights/' + item.source)"
              :alt="item.name"
            />
          </div>

          <router-link
            class="link"
            :to="this.$route.path + item.url"
            :title="item.name"
            aria-hidden="false"
            >{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "HistorickeAKulturnePamiatkyView",
  data() {
    return {
      list: [
        {
          name: "Mestský park",
          source: "mestsky-park.jpg",
          url: "/mestsky-park",
        },
        {
          name: "Mariánske súsošie",
          source: "marianske.jpg",
          url: "/marianske-susosie",
        },
        {
          name: "Mariánske súsošie",
          source: "vojnovy.jpg",
          url: "/vojnovy-cintorin-v-trebisove",
        },
        {
          name: "Nížinný vodný hrad Parič",
          source: "vodny-hrad.jpg",
          url: "/nizinny-vodny-hrad-paric",
        },
        {
          name: "Barokovo-klasicistický kaštieľ",
          source: "kastiel.jpg",
          url: "/barokovo-klasicisticky-kastiel",
        },
        {
          name: "Mauzóleum grófa Júliusa Andrássyho",
          source: "mauzoleum.jpg",
          url: "/mauzoleum-grofa-juliusa",
        },
        {
          name: "Pavlínsky kláštor",
          source: "klastor.jpg",
          url: "/pavlinsky-klastor",
        },
        {
          name: "Rímskokatolícky kostol Návštevy Panny Márie",
          source: "rim-kostol.jpg",
          url: "/rimskokatolicky-kostol-marie",
        },
        {
          name: "Gréckokatolícky chrám Zosnutia presvätej Bohorodičky",
          source: "chram.jpg",
          url: "/grekokatolicky-chram-bohorodicky",
        },
        {
          name: "Románsky kostol Sv. Ducha",
          source: "erb.jpg",
          url: "/romansky-kostol-ducha",
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
.main-box {
  margin-bottom: 50px;
}

.image_extra {
  max-width: 630px;
}

.link {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-decoration: underline;
  color: #0065b3;
}

.item {
  margin-bottom: 30px !important;
}

.item:last-child {
  margin-bottom: 0px !important;
}

.image {
  object-fit: cover;
  height: 275px;
}
</style>
