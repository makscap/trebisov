<template>
  <div>
    <div class="article-gallery-slid" v-if="images !== [] && images != null">
      <carousel
        class="carousel-mobile"
        :mouseDrag="true"
        :touchDrag="true"
        :items-to-show="1"
        :pauseAutoplayOnHover="true"
      >
        <slide style="cursor: pointer" v-for="slide in images" :key="slide">
          <div
            class="slide"
            :style="{ 'background-image': `url(${slide.attributes.url})` }"
            @click="openModal(slide.id)"
          ></div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
      <carousel
        class="carousel-desktop"
        :mouseDrag="true"
        :touchDrag="true"
        :items-to-show="4"
        :pauseAutoplayOnHover="true"
      >
        <slide style="cursor: pointer" v-for="slide in images" :key="slide">
          <div
            class="slide"
            :style="{ 'background-image': `url(${slide.attributes.url})` }"
            @click="openModal(slide.id)"
          ></div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>

    <ModalCarousel
      v-if="images.length > 0"
      :photos="images"
      :currentSlide="currentSlide"
      :open="isOpen"
      @onclose="closeModal"
    />
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ModalCarousel from "@/components/ModalCarousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    ModalCarousel,
  },
  name: "ArticleGallerySlider",
  data() {
    return {
      isOpen: false,
      currentSlide: 0,
      images: [
        {
          attributes: {
            id: 1,
            url: "https://picsum.photos/200/300",
          },
        },
        {
          attributes: {
            id: 2,
            url: "https://picsum.photos/seed/picsum/200/300",
          },
        },
        {
          attributes: {
            id: 3,
            url: "https://picsum.photos/200/300",
          },
        },
        {
          attributes: {
            id: 4,
            url: "https://picsum.photos/200/300?grayscale",
          },
        },
        {
          attributes: {
            id: 5,
            url: "https://picsum.photos/200/300",
          },
        },
      ],
    };
  },
  props: {
    // images: Array,
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
    openModal(slide) {
      this.currentSlide = slide;
      this.isOpen = true;
    },
  },

  computed: {
    vW: function () {
      return window.innerWidth;
    },
  },
};
</script>
<style lang="scss">
.carousel-desktop {
  display: none;
}
.carousel-mobile {
  display: none;
}
@media (max-width: 800px) {
  .carousel-mobile {
    display: block;
  }
  .carousel-desktop {
    display: none;
  }
}
@media (min-width: 800px) {
  .carousel-mobile {
    display: none;
  }
  .carousel-desktop {
    display: block;
  }
}
.article-gallery-slid .slideContentWrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
.article-gallery-slid .carousel__next:hover {
  background-color: #024497;
}
.article-gallery-slid .carousel__prev:hover {
  background-color: #024497;
}
.article-gallery-slid .carousel__next {
  right: 35px !important;
  background-color: #ffffff;
  opacity: 0.5;
}
.article-gallery-slid .carousel__prev {
  left: 35px !important;
  background-color: #ffffff;
  opacity: 0.5;
}
.article-gallery-slid .carousel__icon {
  fill: black;
}
.article-gallery-slid .carousel__slide {
  padding: 7px;
}
@media screen and (max-width: 960px) {
  .article-gallery-slid .slide {
    // left: 0 !important;
    height: 150px;
    // position: relative;
    width: 100%;

    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .article-gallery-slid .slideContent > h2 {
    font-size: 1.5rem;
  }
  .article-gallery-slid .slideContent {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffffd5;
    z-index: 20;
    height: 175px;
  }
}
@media screen and (min-width: 960px) {
  .article-gallery-slid .slide {
    // left: -30px !important;
    height: 150px;
    // position: relative;
    width: 100%;

    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
