<template>
  <div class="govuk-width-container parent">
    <h2 class="govuk-heading-l title">Poslanci MsZ v Trebišove</h2>
    <SubPagesMenu :subpages="subpages" />
  </div>
</template>

<script>
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import { useMeta } from "vue-meta";

export default {
  name: "PoslanciVTrebisoveView",
  data() {
    return {
      subpages: [
        {
          title: "Prehľad poslancov volebných období",
          route: "/prehlad-poslancov-volebnych-obdobi",
        },
        {
          title: "Interpelácie poslancov MsZ v Trebišove",
          route: "/interpelacie-poslancov-msz",
        },
        {
          title: "Podnety poslancov MsZ v Trebišove",
          route: "/podnety-poslancov-msz-v-trebisove",
        },
        {
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
          route: "/oznamenia-funkcii-poslanci",
        },
        {
          title:
            "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
          route: "/oznamenia-funkcii-tlaciva",
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
<style lang="scss" scoped></style>
