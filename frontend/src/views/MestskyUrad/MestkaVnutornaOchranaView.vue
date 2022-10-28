<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Mestská vnútorná ochrana</h2>

    <div class="content">
      <p>Mestská vnútorná ochrana zabezpečuje činnosti najmä v oblastiach:</p>
      <ul>
        <li>kontrola stavu majetku v dôležitých objektoch a zariadeniach,</li>
        <li>
          fyzická ochrana majetku a osôb v dôležitých objektoch a zariadeniach,
        </li>
        <li>
          informovanie návštevníkov v strážených objektoch prístupných
          verejnosti,
        </li>
        <li>režimové opatrenia pri ochrane majetku,</li>
        <li>ochrana osobných údajov a utajovaných skutočností,</li>
        <li>
          ochrana záujmov mesta na významných verejných podujatiach a počas
          mimoriadnych situácií
        </li>
      </ul>
      <h4 class="label">Kontaktné informácie</h4>
      <div class="info">
        <div class="name bold">Mestský úrad</div>
        <div class="floor">4. poschodie</div>
        <div class="street">M. R. Štefánika 862/204</div>
        <div class="city">075 25 Trebišov</div>
      </div>
      <ContactCard :contactsData="contactsData" />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactCard from "../../components/ContactCard.vue";

export default {
  name: "MestkaVnutornaOchranaView",
  data() {
    return {
      contactsData: [
        {
          name: "Ing. Jozef Kereštan",
          position: "vedúci strediska",
          location: "Mestský úrad, 5. poschodie, kancelária č. 503",
          mobil: ["+421 56 6713 336"],
          fax: ["+421 915 790 369"],
          email: ["kerestan@trebisov.sk"],
        },
      ],
    };
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
  components: { ContactCard },
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
.main-box {
  margin-bottom: 50px;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px;
}

.textbox_child_second {
  padding-left: 30px;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #024497;
}
.contact_list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.phone,
.email {
  display: inline-block;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.link {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
}

.info {
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
  margin-bottom: 20px;
}
</style>
