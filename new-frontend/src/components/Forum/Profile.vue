<template>
  <div class="profile">
    <a @click="$router.go(-1)" class="arrow-box">
      <img src="@/assets/icons/arrow_back.svg" alt="back"
    /></a>

    <div class="logo-box">
      <div class="logo-circle">
        <!-- <img src="@/assets/icons/person.svg" alt="back" /> -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2923_41152)">
            <path
              d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2923_41152">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="name">Sokolova</div>
    </div>

    <ul class="menu-nav list">
      <li class="menu-nav__item">
        <button
          :class="
            isMessageView
              ? 'menu-nav__link menu-nav__link--current'
              : 'menu-nav__link'
          "
          @click="toggleButton(true)"
        >
          Reakcie vo fóre
        </button>
      </li>
      <li class="menu-nav__item">
        <button
          :class="
            !isMessageView
              ? 'menu-nav__link menu-nav__link--current'
              : 'menu-nav__link'
          "
          @click="toggleButton(false)"
        >
          Založené témy
        </button>
      </li>
    </ul>

    <ListMessages v-if="isMessageView" :isLinkActive="isLinkActive" />
    <ListTopics v-if="!isMessageView" :isFullRoute="isFullRoute" />
  </div>
</template>

<script>
import ListTopics from "@/components/Forum/ListTopics.vue";
import ListMessages from "@/components/Forum/ListMessages.vue";

export default {
  name: "ProfileComponent",
  data() {
    return {
      isMessageView: true,
    };
  },
  methods: {
    toggleButton(boolean) {
      this.isMessageView = boolean;
    },
  },
  components: { ListTopics, ListMessages },
  props: {
    isLinkActive: Boolean,
    isFullRoute: Boolean,
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
}
.arrow-box {
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f2f1;
  border-radius: 4px;
  padding: 0px 27px;
  cursor: pointer;
  margin-bottom: 30px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.logo-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
  background: #f3f2f1;
  border-radius: 4px;
}
.logo-circle {
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
}
.name {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #094e99;
}

.logo-circle svg {
  fill: #024497 !important;
  width: 100%;
  height: 100%;
}

.menu-nav {
  display: flex;
  margin-bottom: 30px;
  box-shadow: 0px 5px 15px rgba(222, 224, 226, 0.53);
  border-radius: 0px 0px 4px 0px;
}
.menu-nav li {
  margin-bottom: 0px !important;
}

.menu-nav__link {
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  position: relative;
  background-color: #ffffff;

  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  padding: 8px 27px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #949494 !important;
}

.menu-nav__link:hover,
.menu-nav__link:focus {
  color: #0065b3 !important;
  text-decoration: none;
}

.menu-nav__link--current {
  color: #0065b3 !important;
}

.menu-nav__link::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #0065b3;
  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
  -webkit-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}

.menu-nav__link:hover::after {
  opacity: 1;
}

.menu-nav__link--current::after {
  opacity: 1;
}

.menu-nav__item:first-child {
  margin-left: 0px;
}
</style>
