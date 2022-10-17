/* disable-eslint */
<template>
  <div class="modal-wrapper" :class="{ 'show-modal': isOpen }">
    <div class="modal-container" v-if="photos">
      <svg
        class="close-icon"
        fill="#888"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48px"
        height="48px"
        @click="closeModal"
      >
        <path
          d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
        />
      </svg>
      <Carousel
        :mouseDrag="true"
        :touchDrag="true"
        :items-to-show="1"
        :wrapAround="true"
        snapAlign="center"
        :pauseAutoplayOnHover="true"
        class="carousel"
        ref="carousel"
      >
        <Slide v-for="slide in photos" :key="slide.id">
          <img
            style="object-fit: contain; max-height: 70%; max-width: 70%"
            :src="slide.attributes.url"
          />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "ModalCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    open(to) {
      this.isOpen = to;
      this.$refs.carousel?.slideTo(
        this.photos.findIndex((photo) => this.currentSlide === photo.id) + 1
      );
      this.photos.findIndex((photo) => {
        console.log("diff", this.currentSlide, photo.id);
        return this.currentSlide === photo.id;
      });
      console.log(this.currentSlide);
      console.log(this.photos);
    },
  },
  props: {
    photos: Array,
    open: Boolean,
    currentSlide: Number,
  },
  mounted() {
    this.$refs.carousel?.slideTo(
      this.photos.findIndex((photo) => this.currentSlide === photo.id) + 1
    );
    this.photos.findIndex((photo) => {
      console.log("diff", this.currentSlide, photo.id);
      return this.currentSlide === photo.id;
    });
    console.log(this.currentSlide);
    console.log(this.photos);
  },
  methods: {
    closeModal() {
      this.$emit("onclose");
      this.isOpen = false;
    },
  },
};
</script>

<style>
.modal-wrapper {
  background: hsla(0, 0%, 100%, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: none;
}
.show-modal {
  display: flex;
}
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #bfc1c3;
  max-width: 70%;
  max-height: 80%;
  position: relative;
  padding: 50px;
}
.close-icon {
  right: 20px;
  top: 20px;
  position: absolute;
  cursor: pointer;
}
.close-icon:hover {
  fill: #0b0c0c;
}
.modal-container .carousel__next {
  right: 20px !important;
  background-color: #dee0e2;
}
.modal-container .carousel__prev {
  left: 20px !important;
  background-color: #dee0e2;
}
.modal-container .carousel__icon {
  fill: black;
}
@media (max-width: 960px) {
  .modal-container {
    padding: 10px;
    max-width: 90%;
    max-height: 90%;
  }
  .close-icon {
    right: 10px;
    top: 10px;
    z-index: 50;
  }
}
</style>
