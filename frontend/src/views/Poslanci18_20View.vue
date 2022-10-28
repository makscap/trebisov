<template>
  <div class="govuk-width-container main-box">
    <h2 class="govuk-heading-l title">Poslanci za volebné obdobie 2018-2022</h2>

    <div
      class="textbox"
      v-for="{ id, name, email, kandoloval, imgUrl, obvod, text } in persons"
      :key="id"
    >
      <div class="textbox_child_first">
        <img class="card-img" :src="imgUrl" alt="house" />
      </div>
      <div class="textbox_child_second">
        <div class="idsk-crossroad__item label">{{ name }}</div>

        <ul class="contact_list">
          <li>
            E-mail:
            <a href="mailto:primator@trebisov.sk" className="email">
              {{ email }}
            </a>
          </li>
          <li>Kandidoval za: {{ kandoloval }}</li>
          <li>Volebný obvod: {{ obvod }}</li>
        </ul>

        <div class="content">
          <p>{{ text }}</p>
        </div>
      </div>

      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div>
    <!-- <div class="textbox">
      <div class="textbox_child_first">
        <img class="card-img" src="../assets/primator.jpg" alt="house" />
      </div>
      <div class="textbox_child_second">
        <div class="idsk-crossroad__item label">PhDr. Marek Čižmár</div>

        <ul class="contact_list">
          <li>
            Telefón:
            <a href="tel:+421566722665" className="phone">
              +421 56 672 26 65
            </a>
          </li>
          <li>
            Fax:
            <a href="tel:+421566726668" className="phone">
              +421 56 672 66 68
            </a>
          </li>
          <li>
            E-mail:
            <a href="mailto:primator@trebisov.sk" className="email">
              primator@trebisov.sk
            </a>
          </li>
        </ul>

        <a
          :href="require('@/assets/pdf/test.pdf')"
          target="_blank"
          title="Štatút mesta Trebišov"
          class="govuk-link-custom link"
        >
          Štruktúrovaný životopis primátora
        </a>
        <div class="link_size">(PDF, 619,7 kB)</div>
      </div>

      <hr class="idsk-crossroad-line" aria-hidden="true" />
    </div> -->
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "StatutMestaView",
  data() {
    return {
      persons: [
        {
          id: 1,
          name: "Mgr. Martin Begala",
          email: "begala.martin7@gmail.com",
          kandidoval: "Trebišov nahlas",
          obvod: 1,
          text: "Komisia bytová - člen",
          imgUrl: require("../assets/primator.jpg"),
        },
        {
          id: 2,
          name: "Ing. Dušan Biž",
          email: "geodeziatrebisov@gmail.com",
          kandidoval: "Kresťanskodemokratické hnutie",
          obvod: 2,
          text: "Mestská rada - člen Komisia výstavby a majetku - predseda Komisia na ochranu verejného záujmu pri výkone funkcií verejných funkcionárov - člen",
          imgUrl: require("../assets/primator.jpg"),
        },
        {
          id: 3,
          name: "Mgr. Martin Begala",
          email: "begala.martin7@gmail.com",
          kandidoval: "Trebišov nahlas",
          obvod: 1,
          text: "Komisia bytová - člen",
          imgUrl: require("../assets/primator.jpg"),
        },
        {
          id: 4,
          name: "Ing. Dušan Biž",
          email: "geodeziatrebisov@gmail.com",
          kandidoval: "Kresťanskodemokratické hnutie",
          obvod: 2,
          text: "Mestská rada - člen Komisia výstavby a majetku - predseda Komisia na ochranu verejného záujmu pri výkone funkcií verejných funkcionárov - člen",
          imgUrl: require("../assets/primator.jpg"),
        },
        {
          id: 5,
          name: "Mgr. Martin Begala",
          email: "begala.martin7@gmail.com",
          kandidoval: "Trebišov nahlas",
          obvod: 1,
          text: "Komisia bytová - člen",
          imgUrl: require("../assets/primator.jpg"),
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
  components: {},
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
  width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.card-img {
  width: 300px !important;
}

.textbox {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 3px solid #bfc1c3;
}
.textbox_child_first {
  width: 300px !important;
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
</style>
