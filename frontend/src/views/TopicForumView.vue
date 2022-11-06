<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Diskusné fórum</h1>

      <div class="forum">
        <Menu :isTopics="isTopics" :toggleMenu="toggleMenu" />
        <!-- v-bind:class="{ overlay: isOpenModal, closeModal: !isOpenModal }" -->

        <TopicDescribe v-if="isTopics" />
        <Rules v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import TopicDescribe from "@/components/Forum/TopicDescribe.vue";
import Menu from "@/components/Forum/Menu.vue";
import Rules from "@/components/Forum/Rules.vue";

export default {
  name: "TopicForumView",
  data() {
    return {
      isTopics: true,
      isProfile: false,
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
  components: { TopicDescribe, Menu, Rules },
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
    toggleMenu(evt) {
      this.isTopics = evt;
    },
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
.forum {
  display: flex;
}

.menu {
  width: 217px;
  margin-right: 30px;
}

.button_topics {
  width: 217px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0065b3;

  color: #ffffff !important;
  text-decoration: none;
}

.button_rules {
  width: 217px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  color: #0065b3 !important;
  text-decoration: none;
  border-radius: 0px 0px 4px 4px;
}

.topics {
  flex: 1;
  width: 100%;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  padding: 15px 20px;
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
