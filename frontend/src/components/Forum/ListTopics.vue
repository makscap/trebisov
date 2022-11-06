<template>
  <ul class="list">
    <li class="item" v-for="(topic, i) in listTopics" :key="i">
      <router-link
        :to="isFullRoute ? '/diskusne-forum' + '/1' : this.$route.path + '/1'"
        class="link"
      >
        <div class="column_1">
          <h3 class="label inline">{{ topic.name }}</h3>
          <p>pridal/la {{ topic.owner }}</p>
        </div>
        <div class="column_2">
          <p>príspevky: {{ topic.quality }}</p>
        </div>
        <div class="column_3">
          <p>
            {{ topic.last_date }}<br />
            pridal/la {{ topic.last_anwer }}
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListTopics",
  data() {
    return {
      listTopics: [
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
        {
          name: "Separovanie odpadu v Trebišove",
          owner: "Sokolova",
          last_anwer: "Renata",
          last_date: "22.09.2022 17:57",
          quality: 3,
        },
      ],
    };
  },
  methods: {},
  props: {
    isFullRoute: Boolean,
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 24px;
}

.item:last-child {
  margin-bottom: 0px;
}

.link {
  display: flex;
  width: 100%;
  color: #ffffff !important;
  padding: 15px 20px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  background-color: #ffffff;
  border: 1px solid #dee0e2;
  box-shadow: 0px 5px 15px rgba(222, 224, 226, 0.53);
  border-radius: 4px;
  margin-bottom: 5px;
}

.item:last-child {
  margin-bottom: 0px;
}

.column_1 {
  flex: 1;
  margin-right: 30px;
}

.column_1 h3 {
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 7px !important;
}

.column_1 p {
  padding: 0 !important;
  margin: 0 !important;
}

.column_2 {
  width: 120px;
  margin-right: 30px;
}

.column_2 p {
  padding: 0 !important;
  margin: 0 !important;
}

.column_3 {
  width: 140px;
}

.column_3 p {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
