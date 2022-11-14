<template>
  <div class="govuk-width-container">
    <div class="content w-75">
      <h1 class="govuk-heading-l">{{ data.verejny }}</h1>
      <h2 class="idsk-crossroad__item govuk-heading-m">
        Profil verejného obstarávateľa
      </h2>

      <div class="container">
        <ul class="list">
          <li class="item">
            <div class="column_one">Verejný obstarávateľ:</div>
            <div class="column_two">{{ data.verejny }}</div>
          </li>
          <li class="item">
            <div class="column_one">Sídlo:</div>
            <div class="column_two">{{ data.sidlo }}</div>
          </li>
          <li class="item">
            <div class="column_one">Štatutárny zástupca:</div>
            <div class="column_two">{{ data.zastupca }}</div>
          </li>
          <li class="item">
            <div class="column_one">IČO:</div>
            <div class="column_two">{{ data.ico }}</div>
          </li>
          <li class="item">
            <div class="column_one">DIČ:</div>
            <div class="column_two">{{ data.dic }}</div>
          </li>
          <li class="item" v-if="data.phone">
            <div class="column_one">Telefón:</div>
            <div class="column_two">{{ data.phone }}</div>
          </li>
          <li class="item" v-if="data.mobil">
            <div class="column_one">Mobil:</div>
            <div class="column_two">{{ data.mobil }}</div>
          </li>
          <li class="item" v-if="data.fax">
            <div class="column_one">Fax:</div>
            <div class="column_two">{{ data.fax }}</div>
          </li>
          <li class="item">
            <div class="column_one">E-mail:</div>
            <div class="column_two">
              <a :href="'mailto:' + data.email" class="contact_link">{{
                data.email
              }}</a>
            </div>
          </li>
        </ul>

        <div v-if="contact_person" class="contact">
          <p>Kontaktná osoba pre verejné obstarávanie:</p>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
          <p class="contact_title">{{ contact_person.person }}</p>
          <ul class="contact_list">
            <li class="contact_item">Tel: {{ contact_person.phone }}</li>
            <li class="contact_item">
              E-mail:
              <a
                :href="'mailto:' + contact_person.email"
                class="contact_link"
                >{{ contact_person.email }}</a
              >
            </li>
          </ul>
          <hr class="idsk-crossroad-line" aria-hidden="true" />
        </div>

        <!-- <div data-module="idsk-crossroad" class="">
          <div class="idsk-crossroad idsk-crossroad-1 list">
            <div
              class="idsk-crossroad__item"
              v-for="(item, i) in links"
              :key="i"
            >
              <p class="text">{{ item.text }}</p>


              <ul class="list_links menu" v-if="item.items">
                <li
                  v-for="(el, ind) in item.items"
                  :key="ind"
                  class="item_links"
                >
                  <div class="idsk-crossroad idsk-crossroad-2">
                    <div class="idsk-crossroad__item">
                      <router-link
                        :to="this.$route.path + el.url"
                        class="govuk-link idsk-crossroad-title"
                        title="Title for 1st element"
                        aria-hidden="false"
                      >
                        {{ el.name }}
                      </router-link>
                      <hr class="idsk-crossroad-line" aria-hidden="true" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilVerejnehoSubPage",
  data() {
    return {};
  },
  props: {
    title: String,
    data: Object,
    links: Array,
    contact_person: Object,
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  margin-top: 30px;
}

.item {
  display: flex;
}

.column_one {
  width: 217px;
  font-family: "Source Sans Pro";
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}
.column_two {
  flex: 1;
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}
.contact_title {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}
.contact_list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.contact_item {
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}

.contact_item:first-child {
  width: 216px;
  margin-right: 32px;
}

.contact_link {
  color: #0065b3;
  text-decoration: underline;
}

.text {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
  margin-bottom: 32px;
}

/* .links {
  margin-bottom: 45px;
}
.links:last-child {
  margin-bottom: 0px;
} */

.list_links {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}

.item_links {
  width: 100%;
}

.idsk-crossroad-2 {
  width: 100% !important;
  padding-right: 0px !important;
}
</style>
