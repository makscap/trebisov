<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">
        Priamy prenos zo zasadnutia MsZ v Trebišove
      </h1>
      <div class="circle_box">
        <div class="circle">
          <svg
            width="69"
            height="66"
            viewBox="0 0 69 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.7521 50.4223C60.4822 47.6469 61.4554 44.403 61.2391 40.8347C60.7705 33.0853 54.6071 26.5254 46.9298 25.6964C37.126 24.6151 28.8359 32.2203 28.8359 41.8078C28.8359 50.7827 36.0807 58.0275 45.0195 58.0275C48.1913 58.0275 51.1469 57.0903 53.6339 55.5044L62.3204 64.1909C63.7261 65.5966 66.0329 65.5966 67.4386 64.1909C68.8443 62.7852 68.8443 60.4784 67.4386 59.0727L58.7521 50.4223ZM45.0555 50.8187C40.0815 50.8187 36.0446 46.7819 36.0446 41.8078C36.0446 36.8338 40.0815 32.797 45.0555 32.797C50.0296 32.797 54.0664 36.8338 54.0664 41.8078C54.0664 46.7819 50.0296 50.8187 45.0555 50.8187Z"
              fill="#024497"
            />
            <path
              d="M3.33933 13.7227H50.0899C51.9266 13.7227 53.4293 15.2492 53.4293 17.115C53.4293 18.9808 51.9266 20.5073 50.0899 20.5073H3.33933C1.5027 20.5073 0 18.9808 0 17.115C0 15.2492 1.5027 13.7227 3.33933 13.7227Z"
              fill="#024497"
            />
            <path
              d="M3.33933 0H50.0899C51.9266 0 53.4293 1.52655 53.4293 3.39234C53.4293 5.25812 51.9266 6.78467 50.0899 6.78467H3.33933C1.5027 6.78467 0 5.25812 0 3.39234C0 1.52655 1.5027 0 3.33933 0Z"
              fill="#024497"
            />
            <path
              d="M3.33933 34.0737H19.5589C21.3956 34.0737 22.8983 32.5472 22.8983 30.6814C22.8983 28.8156 21.3956 27.2891 19.5589 27.2891H3.33933C1.5027 27.2891 0 28.8156 0 30.6814C0 32.5472 1.5027 34.0737 3.33933 34.0737Z"
              fill="#024497"
            />
            <path
              d="M3.32166 47.2879H19.93C21.7569 47.2879 23.2516 45.7931 23.2516 43.9662C23.2516 42.1393 21.7569 40.6445 19.93 40.6445H3.32166C1.49475 40.6445 0 42.1393 0 43.9662C0 45.7931 1.49475 47.2879 3.32166 47.2879Z"
              fill="#024497"
            />
          </svg>
        </div>
        <p class="text">Momentálne neprebieha žiadny priamy prenos.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "PriamyPrenosView",
  data() {
    return {};
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
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle {
  margin-top: 74px;
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: rgba(243, 242, 241, 0.5);
}

.text {
  max-width: 371px;
  text-align: center;
}
</style>
