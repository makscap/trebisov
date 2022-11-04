<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Denné centrá</h1>
      <p>
        V dennom centre sa poskytuje sociálna služba počas dňa fyzickej osobe,
        ktorá dovŕšila dôchodkový vek, fyzickej osobe s ťažkým zdravotným
        postihnutím alebo nepriaznivým zdravotným stavom, rodičovi s dieťaťom
        alebo starému rodičovi s vnukom alebo vnučkou. V dennom centre sa
        poskytuje sociálne poradenstvo a zabezpečuje záujmová činnosť.
      </p>
      <ul class="list">
        <li class="item" v-for="(item, i) in items" :key="i">
          <h5 class="name">{{ item.name }}</h5>
          <div>
            <ul class="list_child">
              <li v-if="item.adress" class="item_child">
                <span>Sídlo:</span> {{ item.adress }}
              </li>
              <li v-if="item.host" class="item_child">
                <span>Vedúca DC:</span> {{ item.host }}
              </li>
              <li v-if="item.quality" class="item_child">
                <span>Počet členov:</span> {{ item.quality }}
              </li>
              <li v-if="item.phone" class="item_child">
                <span>Tel.:</span> {{ item.phone }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "DenneCentraView",
  data() {
    return {
      items: [
        {
          name: "Denné centrum č.1",
          adress: "Puškinova 277/18",
          host: "Marta Dzúrová",
          quality: 46,
          phone: "0905 392 228",
        },
        {
          name: "Denné centrum č.2",
          adress: "Mestský úrad v Trebišove, M. R. Štefánika 862/204",
          host: "Oľga Repovská",
          quality: 42,
        },
        {
          name: "Denné centrum č.3",
          adress: "Puškinova 277/18",
          host: "Marta Dzúrová",
          quality: 46,
          phone: "0905 392 228",
        },
        {
          name: "Denné centrum č.4",
          adress: "Puškinova 277/18",
          host: "Marta Dzúrová",
          quality: 46,
          phone: "0905 392 228",
        },
        {
          name: "Denné centrum č.5",
          adress: "Mestský úrad v Trebišove, M. R. Štefánika 862/204",
          host: "Oľga Repovská",
          quality: 42,
        },
        {
          name: "Denné centrum č.6",
          adress: "Mestský úrad v Trebišove, M. R. Štefánika 862/204",
          host: "Oľga Repovská",
          quality: 42,
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
  align-items: flex-start;
  background-color: rgba(243, 242, 241, 0.5);
  border: 2px solid #2b8cc4;
  border-radius: 4px;
  padding: 55px 50px;
  margin-bottom: 30px;
}

.item:last-child {
  margin-bottom: 0px;
}

.name {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #2b8cc4;
  margin-bottom: 10px;
}

.list_child {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
