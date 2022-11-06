<template>
  <div class="menu">
    <button
      :class="isTopics ? 'menu-button button-menu__active' : 'menu-button'"
      @click="toggleMenu(true)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM13 17H8C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15H13C13.55 15 14 15.45 14 16C14 16.55 13.55 17 13 17ZM16 13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM16 9H8C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9Z"
        />
        <defs>
          <rect width="24" height="24" fill="white" />
        </defs>
      </svg>
      Diskusné témy
    </button>

    <button
      :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
      @click="toggleMenu(false)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6H19V14C19 14.55 18.55 15 18 15H6V16C6 17.1 6.9 18 8 18H18L22 22V8C22 6.9 21.1 6 20 6ZM17 11V4C17 2.9 16.1 2 15 2H4C2.9 2 2 2.9 2 4V17L6 13H15C16.1 13 17 12.1 17 11Z"
        />
        <defs>
          <rect width="24" height="24" fill="white" />
        </defs>
      </svg>
      Pravidlá fóra
    </button>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
  props: {
    isTopics: Boolean,
    toggleMenu: Function,
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
