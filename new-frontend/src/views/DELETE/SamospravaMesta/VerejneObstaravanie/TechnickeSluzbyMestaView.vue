<template>
  <ProfilVerejnehoSubPage
    :data="data"
    :links="links"
    :contact_person="contact_person"
  />
</template>

<script>
import ProfilVerejnehoSubPage from "@/components/ProfilVerejnehoSubPage.vue";
import { useMeta } from "vue-meta";

export default {
  name: "TechnickeSluzbyMestaView",
  data() {
    return {};
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
  components: { ProfilVerejnehoSubPage },
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
.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
</style>
