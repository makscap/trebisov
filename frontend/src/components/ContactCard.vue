<template>
  <div>
    <ul class="list">
      <li v-for="(item, i) in contactsData" :key="i" class="item">
        <div class="name bold">{{ item.name }}</div>
        <div class="position">{{ item.position }}</div>
        <div class="location">{{ item.location }}</div>
        <ul class="list_contact">
          <li class="item_contact">
            <ul v-if="item.phone" class="list_contact_fax">
              <li v-for="(phone, ind) in item.phone" :key="ind">
                Telefón:
                <a :href="'tel:' + phone" className="phone">
                  {{ phone }}
                </a>
              </li>
            </ul>

            <ul v-if="item.mobil" class="list_contact_mobil">
              <li v-for="(tel, ind) in item.mobil" :key="ind">
                <div>
                  Mobil:
                  <a :href="'tel:' + tel" className="phone">
                    {{ tel }}
                  </a>
                </div>
              </li>
            </ul>
            <ul v-if="item.fax" class="list_contact_fax">
              <li v-for="(fax, ind) in item.fax" :key="ind">
                Fax:
                <a :href="'tel:' + fax" className="phone">
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
                  <a :href="'mailto:' + email" className="email">
                    {{ email }}
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  data() {
    return {};
  },
  props: {
    contactsData: Array,
  },
};
</script>

<style scoped>
.card {
}
.location {
  margin-bottom: 16px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}

.item {
  padding-bottom: 30px;
  padding-top: 30px;
  border-bottom: 1px solid #bfc1c3;
}

.item:first-child {
  border-top: 1px solid #bfc1c3;
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
</style>
