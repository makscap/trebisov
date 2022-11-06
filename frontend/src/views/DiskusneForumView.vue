<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Diskusné fórum</h1>

      <div class="forum">
        <Menu :isTopics="isTopics" :toggleMenu="toggleMenu" />
        <div class="topics">
          <div v-if="isTopics">
            <div class="" v-if="!isDescribe">
              <h2 class="label">Diskusné témy</h2>
              <div class="idsk-header-web__main-action">
                <form
                  class="idsk-header-web__main-action-search"
                  :action="`/vyhladavanie?search=${searchText}`"
                >
                  <input
                    class="govuk-input govuk-!-display-inline-block"
                    name="search"
                    placeholder="Hľadať výraz vo fóre"
                    title="Hľadať výraz vo fóre"
                    type="search"
                    v-model="searchText"
                    aria-label="Hľadať výraz vo fóre"
                  />
                  <button
                    type="submit"
                    class="govuk-button"
                    data-module="govuk-button"
                  >
                    <span class="govuk-visually-hidden">Vyhľadať</span>
                    <i aria-hidden="true" class="fas fa-search"></i>
                  </button>
                </form>
                <div class="idsk-header-web__main--buttons">
                  <div class="idsk-header-web__main--login">
                    <button
                      type="button"
                      class="idsk-button idsk-header-web__main--login-loginbtn"
                      data-module="idsk-button"
                    >
                      Pridať novú tému
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <ListTopics v-if="!isDescribe" />
          </div>
          <Rules v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
// import TopicDescribe from "@/components/Forum/TopicDescribe.vue";
import Rules from "@/components/Forum/Rules.vue";
import ListTopics from "@/components/Forum/ListTopics.vue";
import Menu from "@/components/Forum/Menu.vue";

export default {
  name: "DiskusneForumView",
  data() {
    return {
      isTopics: true,
      isDescribe: false,
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
  components: {
    Rules,
    ListTopics,
    Menu,
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
  width: 220px;
  margin-right: 30px;
}

.menu-button {
  width: 220px;
  height: 60px;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  color: #0065b3 !important;
  text-decoration: none;
  border-radius: 0px;
  border-bottom: 1px solid #f3f2f1;
  box-shadow: 0px 5px 15px rgba(222, 224, 226, 0.53);
  padding: 0px 30px;

  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  cursor: pointer;
  fill: #0065b3;
}

.button-menu__active {
  background-color: #0065b3;
  color: #ffffff !important;
  border: 1px solid #0065b3;
  fill: #ffffff;
}

.menu-button svg {
  margin-right: 8px;
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

.topics h2 {
  margin: 0px !important;
}
</style>
