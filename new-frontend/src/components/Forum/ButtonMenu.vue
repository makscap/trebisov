<template>
  <!-- MAIN BUTTONS -->
  <button
    :class="isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(true)"
    v-if="this.type === 'forum'"
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
    v-if="this.type === 'chats'"
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

  <!-- Občianska inzercia -->

  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'all'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_47227)">
        <path
          d="M10 12C8.9 12 8 12.9 8 14C8 15.1 8.9 16 10 16C11.1 16 12 15.1 12 14C12 12.9 11.1 12 10 12ZM6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12C7.1 12 8 11.1 8 10C8 8.9 7.1 8 6 8ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8ZM14 16C12.9 16 12 16.9 12 18C12 19.1 12.9 20 14 20C15.1 20 16 19.1 16 18C16 16.9 15.1 16 14 16ZM18 12C16.9 12 16 12.9 16 14C16 15.1 16.9 16 18 16C19.1 16 20 15.1 20 14C20 12.9 19.1 12 18 12ZM14 8C12.9 8 12 8.9 12 10C12 11.1 12.9 12 14 12C15.1 12 16 11.1 16 10C16 8.9 15.1 8 14 8ZM10 4C8.9 4 8 4.9 8 6C8 7.1 8.9 8 10 8C11.1 8 12 7.1 12 6C12 4.9 11.1 4 10 4Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_47227">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Všetky inzeráty
  </button>
  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'realty'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_11378)">
        <path d="M24 0H0V24H24V0Z" fill="white" />
        <path
          d="M20 3H12C11.45 3 11 3.45 11 4V5.61C11 5.61 11 5.61 11.01 5.62L16.01 10.12C16.64 10.68 17 11.5 17 12.35V13H19V15H17V17H19V19H17V21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM15 7H13V5H15V7ZM19 11H17V9H19V11ZM19 7H17V5H19V7Z"
          fill="#0065B3"
        />
        <path
          d="M15 20.0016V12.3516C15 12.0716 14.88 11.8016 14.67 11.6116L9.67 7.11156C9.48 6.93156 9.24 6.85156 9 6.85156C8.76 6.85156 8.52 6.94156 8.33 7.11156L3.33 11.6116C3.12 11.7916 3 12.0616 3 12.3516V20.0016C3 20.5516 3.45 21.0016 4 21.0016H6C6.55 21.0016 7 20.5516 7 20.0016V16.0016H11V20.0016C11 20.5516 11.45 21.0016 12 21.0016H14C14.55 21.0016 15 20.5516 15 20.0016Z"
          fill="#0065B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_11378">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Nehnuteľnosti
  </button>
  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'auto'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_47232)">
        <path
          d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3.11 11.68C3.04 11.89 3 12.11 3 12.34V19.5C3 20.33 3.67 21 4.5 21C5.33 21 6 20.33 6 19.5V19H18V19.5C18 20.32 18.67 21 19.5 21C20.32 21 21 20.33 21 19.5V12.34C21 12.12 20.96 11.89 20.89 11.68L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.27 7.18C6.41 6.78 6.79 6.5 7.22 6.5H16.78C17.21 6.5 17.59 6.78 17.73 7.18L19 11H5Z"
          fill="#0065B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_47232">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Auto-moto
  </button>
  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'work'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_47237)">
        <path
          d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z"
          fill="#0065B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_47237">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Práca
  </button>
  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'animals'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_11399)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.31836 9.12122C2.38049 8.89085 2.42215 8.65295 2.50836 8.43135C3.05276 7.0311 4.62626 6.50685 5.94726 7.27837C7.31146 8.07519 7.83981 9.86698 7.10207 11.1953C6.46749 12.3377 5.0143 12.7209 3.86526 12.0507C3.00335 11.5481 2.51468 10.8054 2.35299 9.84947C2.34803 9.8203 2.33026 9.79297 2.31845 9.76485C2.31836 9.55034 2.31836 9.33582 2.31836 9.12122Z"
          fill="#0065B3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.70703 17.281C4.70893 16.6766 4.87997 16.1224 5.20242 15.6152C5.91572 14.493 6.61397 13.3605 7.34844 12.2527C8.38086 10.6953 9.84828 9.91705 11.705 10.0024C13.2447 10.0732 14.5078 10.77 15.3879 12.0478C16.2116 13.2438 16.987 14.476 17.7358 15.7214C18.8912 17.6438 17.6936 20.0899 15.4791 20.3747C14.9911 20.4374 14.5042 20.3966 14.0445 20.204C13.1293 19.8205 12.1875 19.5911 11.1875 19.6363C10.406 19.6716 9.66733 19.8692 8.94637 20.1639C7.37323 20.807 5.63176 20.0864 4.95198 18.5201C4.7803 18.125 4.70658 17.7103 4.70703 17.281Z"
          fill="#0065B3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.09375 6.36894C7.11473 5.32631 7.43321 4.44042 8.17586 3.74434C9.32161 2.6707 10.9643 2.77055 12.0364 3.96606C13.1933 5.25629 13.1771 7.45768 12.0013 8.73129C10.7474 10.0895 8.74088 9.92509 7.71376 8.37979C7.30727 7.76837 7.09554 7.06942 7.09375 6.36894Z"
          fill="#0065B3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.6951 7.21075C18.6298 8.55613 18.191 9.52998 17.2151 10.1965C15.7615 11.1895 14.0101 10.5848 13.4162 8.90204C12.8726 7.36229 13.6035 5.51744 15.0403 4.80247C16.3901 4.13088 17.9516 4.7687 18.467 6.22353C18.5967 6.58957 18.6446 6.98554 18.6951 7.21075Z"
          fill="#0065B3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1477 15.1112C17.8646 15.0842 16.8574 14.1125 16.8198 12.8449C16.7771 11.4094 17.7098 10.1346 19.0642 9.75319C20.7045 9.29135 22.2607 10.4631 22.0943 12.3014C21.9793 13.5725 21.0969 14.6189 19.8749 14.9789C19.64 15.0481 19.3903 15.0683 19.1477 15.1112Z"
          fill="#0065B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_11399">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Zvieratá
  </button>
  <button
    :class="!isTopics ? 'menu-button button-menu__active' : 'menu-button'"
    @click="toggleMenu(false)"
    v-if="this.type === 'other'"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2965_11385)">
        <path
          d="M7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17Z"
          fill="#0065B3"
        />
        <path
          d="M11 9C12.6569 9 14 7.65685 14 6C14 4.34315 12.6569 3 11 3C9.34315 3 8 4.34315 8 6C8 7.65685 9.34315 9 11 9Z"
          fill="#0065B3"
        />
        <path
          d="M16.5996 20.6016C18.2565 20.6016 19.5996 19.2584 19.5996 17.6016C19.5996 15.9447 18.2565 14.6016 16.5996 14.6016C14.9428 14.6016 13.5996 15.9447 13.5996 17.6016C13.5996 19.2584 14.9428 20.6016 16.5996 20.6016Z"
          fill="#0065B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_11385">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>

    Rôzne
  </button>
</template>

<script>
export default {
  name: "ButtonMenu",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
  props: {
    type: String,
  },
};
</script>
<style lang="scss" scoped>
.menu {
  width: 220px;
  margin-right: 30px;
  display: inline;
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
