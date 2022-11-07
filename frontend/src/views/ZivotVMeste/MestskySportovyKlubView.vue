<template>
  <div class="govuk-width-container parent">
    <div class="content">
      <SubPagesMenu
        :subpages="subpages"
        title="Mestský športový klub mládeže"
      />

      <div class="wrap_banner">
        <div>
          <span class="label">
            S podporou Ministerstva školstva, vedy, výskumu a športu SR</span
          >
        </div>
        <div class="image_box">
          <img class="image" src="@/assets/ministerstvo.png" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "MestskySportovyKlubView",
  data() {
    return {
      subpages: [
        {
          title: "O klube",
          route: "/o-klube",
        },
        {
          title: "Aktuality",
          route: "/aktuality-klubu",
        },
        {
          title: "Fotogaléria",
          route: "/fotogaleria",
        },
        {
          title: "Rozpis ľadovej plochy a tréningov",
          route: "/rozpis-ladovej-plochy",
        },
        {
          title: "Prenájom ihriska s umelou trávou",
          route: "/prenajom-ihriska",
        },
        {
          title: "Program zápasov",
          route: "/program-zapasov",
        },
        {
          title: "Dokumenty",
          route: "/dokumenty",
        },
      ],
    };
  },
  components: { SubPagesMenu },
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
.wrap_banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f2f1;
  height: 133px;
}

.label {
  display: inline-block;
  max-width: 290px;
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  text-align: center;
  color: #024497;
  margin-right: 48px;
  margin-bottom: 0px;
}

.image_box {
  margin-bottom: 0px;
}
</style>
