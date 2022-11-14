<template>
  <div>
    <ul class="list" v-if="contacts">
      <li v-for="(item, i) in contacts" :key="i" class="item">
        <h2 v-if="item.isTitle" class="govuk-heading-m">
          Kontaktné informácie
        </h2>

        <h3 class="govuk-heading-s black">{{ item.name }}</h3>
        <p :style="item.isTitle && 'margin-bottom: 0px'">
          {{ item.position }}<br />
          {{ item.location }}
        </p>
        <ul class="list_contact">
          <li class="item_contact">
            <ul v-if="item.phone" class="list_contact_fax">
              <li v-for="(phone, ind) in item.phone" :key="ind">
                <p>
                  Telefón:
                  <a :href="'tel:' + phone">
                    {{ phone }}
                  </a>
                </p>
              </li>
            </ul>

            <ul v-if="item.mobile" class="list_contact_mobil">
              <li v-for="(tel, ind) in item.mobile" :key="ind">
                <div>
                  Mobil:
                  <a :href="'tel:' + tel">
                    {{ tel }}
                  </a>
                </div>
              </li>
            </ul>
            <ul v-if="item.fax" class="list_contact_fax">
              <li v-for="(fax, ind) in item.fax" :key="ind">
                Fax:
                <a :href="'tel:' + fax">
                  {{ fax }}
                </a>
              </li>
            </ul>
          </li>

          <li class="item_contact">
            <ul v-if="item.email" class="list_contact_email">
              <li v-for="(email, ind) in item.email" :key="ind">
                <div>
                  E-mail:
                  <a :href="'mailto:' + email">
                    {{ email }}
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ErrorComponent v-else />
  </div>
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "ContactCard",
  data() {
    return {};
  },
  props: {
    contacts: Object,
  },
  components: {
    ErrorComponent,
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
  margin-bottom: 30px;
}

.item {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #bfc1c3;
}

.list_contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-end;
}
.item_contact {
  margin: 0;
  margin-right: 32px;
}

.item_contact:last-child {
  margin-right: 0px;
}

.list_contact_mobil,
.list_contact_fax,
.list_contact_email {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 767px) {
  .list_contact {
    flex-direction: column;
    align-items: flex-start;
  }

  .item_contact {
    margin-right: 0px;
    width: 100%;
  }
}
</style>
