<template>
  <div v-if="links.length > 0">
    <h3 class="govuk-heading-s black title">Zdieľať tento článok:</h3>

    <ul class="list">
      <li v-for="(item, i) in links" :key="i">
        <a :href="item.url" class="link">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2913_61661)">
              <path
                d="M7.54 4.87542H9.00067V2.33142C8.74867 2.29675 7.882 2.21875 6.87267 2.21875C4.76667 2.21875 3.324 3.54342 3.324 5.97808V8.21875H1V11.0627H3.324V18.2188H6.17333V11.0634H8.40333L8.75733 8.21942H6.17267V6.26008C6.17333 5.43808 6.39467 4.87542 7.54 4.87542Z"
                fill="#0065B3"
              />
            </g>
            <defs>
              <clipPath id="clip0_2913_61661">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.21875)"
                />
              </clipPath>
            </defs>
          </svg>
          <span style="color: #0065b3; margin-left: 2px">
            {{ item.name }}
          </span>
        </a>
      </li>
    </ul>

    <div></div>
  </div>
  <ErrorComponent v-else />
</template>

<script>
import ErrorComponent from "@/components/ErrorComponent.vue";

export default {
  name: "SocialLink",
  data() {
    return {};
  },
  methods: {},
  components: {
    ErrorComponent,
  },
  props: { links: Array },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 18px !important;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  border-bottom: 2px solid #949494;
  padding-bottom: 30px;
}

.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.link:hover,
.link:focus {
  text-decoration: underline;
}
</style>
