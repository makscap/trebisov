<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Oznamy o úmrtiach</h1>
      <p>S hlbokým zármutkom vám oznamujeme, že nás opustili:</p>
      <ul class="list">
        <li class="item" v-for="(item, i) in items" :key="i">
          <h5 class="name">{{ item.name }}</h5>
          <p class="text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OznamyOUmrtiachView",
  data() {
    return {
      items: [
        {
          name: "MUDr. Ján TÓTH (†88)",
          text: "Rozlúčka bude 17.8.2022 o 10.30 h na Mestskom cintoríne v Trebišove. Gréckokatolícky obrad.",
        },
        {
          name: "MUDr. Ján TÓTH (†88)",
          text: "Rozlúčka bude 17.8.2022 o 10.30 h na Mestskom cintoríne v Trebišove. Gréckokatolícky obrad.",
        },
        {
          name: "MUDr. Ján TÓTH (†88)",
          text: "Rozlúčka bude 17.8.2022 o 10.30 h na Mestskom cintoríne v Trebišove. Gréckokatolícky obrad.",
        },
        {
          name: "MUDr. Ján TÓTH (†88)",
          text: "Rozlúčka bude 17.8.2022 o 10.30 h na Mestskom cintoríne v Trebišove. Gréckokatolícky obrad.",
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
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f2f1;
  border: 2px solid #0b0c0c;
  border-radius: 4px;
  padding: 43px 0px;
  margin-bottom: 30px;
}

.item:last-child {
  margin-bottom: 0px;
}

.name {
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #0b0c0c;
  text-align: center;
}
.text {
  padding: 0;
  margin: 0;
  max-width: 425px;
  text-align: center;
}
</style>
