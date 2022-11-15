<template>
  <ul class="list">
    <li class="item" v-for="(item, i) in this.details" :key="i">
      <div v-if="!item.links && !item.file" class="box">
        <div class="column_title">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </div>

      <div v-if="item.file" class="box">
        <div class="column_title">Popis:</div>
        <div class="text_container">
          <div class="text">{{ item.text }}</div>
          <FilesComponent :files="item.file" />
        </div>
      </div>
    </li>
    <li class="item">
      <div class="column_title">Názov:</div>
      <!-- <div class="text">{{ this.details.name }}</div> -->
    </li>
    <li class="item">
      <div class="column_title">Schválené:</div>
      <!-- <div class="text">{{ this.details.aproove }}</div> -->
    </li>
    <li class="item">
      <div class="column_title">Účinné od:</div>
      <!-- <div class="text">{{ this.details.from }}</div> -->
    </li>
    <li class="item"></li>
  </ul>
</template>

<script>
import FilesComponent from "@/components/FilesComponent.vue";

export default {
  name: "DetailOfPlace",
  data() {
    return {};
  },
  props: {
    details: Array,
  },
  components: {
    FilesComponent,
  },
};
</script>

<style scoped>
.list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.column_title {
  width: 135px;
  font-weight: 700;
}

.item {
  display: flex;
  padding: 18px 0px;
  border-bottom: 1px solid #dee0e2;
}

.box {
  display: flex;
}

.item:last-child {
  border-bottom: none;
}

.text_container {
  flex: 1;
}

.text {
  margin-bottom: 15px;
}
</style>
