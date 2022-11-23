<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">Kontakty</h1>

      <ul class="p-0 m-0 list-none">
        <li class="item">
          <div class="column-1 blue bold">Kontaktné informácie</div>
          <div class="column-2 blue bold">Obce v pôsobnosti oddelenia</div>
        </li>
        <li v-for="(item, i) in contactsData" :key="i" class="item">
          <div class="column-1">
            <div class="bold">{{ item.name }}</div>
            <div class="">{{ item.location }}</div>
            <br />

            <div>
              Telefón:
              <a :href="'tel:' + item.phone" className="phone">
                {{ item.phone }}
              </a>
            </div>
            <div>
              Mobil:
              <a :href="'tel:' + item.mobil" className="phone">
                {{ item.mobil }}
              </a>
            </div>
          </div>
          <div class="column-2">
            <p class="m-0">
              {{ item.text }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "OkresneKontaktyView",
  data() {
    return {
      contactsData: [
        {
          name: "OO PZ Trebišov",
          location: "Nám. Mieru 1496/6, 075 01 Trebišov",
          phone: "+421 56 6713 385",
          mobil: "+421 915 759 463",
          text: "Trebišov, Čeľovce, Kožuchov, Nižný žipov, Nový Ruskov, Plechotice, Stanča, Vojčice, Zemplínska Nová Ves, Zemplínske Hradište",
        },
        {
          name: "OO PZ Kráľovský Chlmec",
          location: "Hlavná 36, 077 01 K. Chlmec",
          phone: "+421 56 6713 385",
          mobil: "+421 915 759 463",
          text: "Kráľovský Chlmec, Čierna nad Tisou, Bačka, Bieľ, Bôľ, Boťany, Čierna, Dobrá, Leles, Malé Trakany, Malý Horeš, Poľany, Pribeník, Soľnička, Strážne, Svätuše, Veľké Trakany, Veľký Horeš, Vojka, Zatín",
        },
        {
          name: "OO PZ Sečovce",
          location: "Štúrova 532/6, 078 01 Sečovce",
          phone: "+421 56 6713 385",
          mobil: "+421 915 759 463",
          text: "Sečovce, Bačkov, Dargov, Dvorianky, Egreš, Hriadky, Kravany, Malé Ozorovce, Parchovany, Stankovce, Trnávka, Veľké Ozorovce, Višňov, Zbehňov, Zemplínska Teplica",
        },
        {
          name: "OO PZ Streda nad Bodrogom",
          location: "Ružová 431/14, 076 31 Streda n/B",
          phone: "+421 56 6713 385",
          mobil: "+421 915 759 463",
          text: "Streda nad Bodrogom, Bara, Borša, Černochov, Klin nad Bodrogom, Ladmovce, Malý Kamenec, Rad, Slovenské Nové Mesto, Somotor, Svätá Mária, Svinice, Veľký Kamenec, Viničky, Zemplín",
        },
        {
          name: "OO PZ Michaľany",
          location: "Na sídlisku 353, 076 14 Michaľany",
          phone: "+421 56 6713 385",
          mobil: "+421 915 759 463",
          text: "Michaľany, Brehov, Brezina, Byšta, Cejkov, Čerhov, Hraň, Hrčeľ, Kašov, Kazimír, Kuzmice, Kysta, Lastovce, Luhyňa, Malá Tŕňa, Novosad, Sirník, Slivník, Veľaty, Veľká Tŕňa, Zemplínske Jastrabie, Zemplínsky Branč",
        },
      ],
    };
  },
  components: {},
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
.item {
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bfc1c3;
}

.item:first-child {
  padding-top: 0px;
}

.column-1 {
  width: 300px;
  margin-right: 32px;
}

.column-2 {
  flex: 1;
}
</style>
