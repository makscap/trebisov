<template>
  <ul class="list" v-if="messages.length > 0">
    <li v-for="(message, i) in messages" :key="i" class="item">
      <div>
        <div v-if="message.question" class="question_box">
          <p>
            <span>{{ message.question.name }}</span
            >, {{ message.question.date }}
          </p>
          <p v-html="message.question.text"></p>
        </div>

        <div v-if="message.answer" class="answer_box">
          <p class="bold">Odpoveď:</p>
          <p v-html="message.answer.text"></p>
        </div>
      </div>
    </li>
  </ul>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "QuestionsComponent",
  data() {
    return {};
  },
  methods: {},
  components: {
    ErrorComponent,
  },
  props: { messages: Array },
};
</script>
<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  padding: 63px 53px;
  background-color: rgba(243, 242, 241, 0.5);
  margin-bottom: 30px;
}

// .item:last-child {
// margin-bottom: 0px;
// }

.question_box {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dee0e2;
}

@media (max-width: 960px) {
  .item {
    padding: 33px 28px;
  }
}
</style>
