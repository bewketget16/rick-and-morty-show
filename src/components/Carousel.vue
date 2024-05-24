<template>
  <div class="bg-sky-950 container mx-auto relative">
    <Carousel
      :items-to-show="4"
      :wrap-around="true"
      :snap-align="'start'"
      class="carousel py-4"
      ref="carousel"
    >
      <Slide v-for="(display, index) in displays" :key="index">
        <div class="carousel-item flex-shrink-0 w-full">
          <div class="aspect-w-1 aspect-h-1">
            <img
              :src="display.image"
              alt="display image"
              class="w-full h-auto object-cover"
              :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
            />
          </div>
          <div class="mt-4 bg-sky-950 p-4 rounded-lg shadow-md w-full">
            <h2 class="text-xl font-bold mb-2 italic text-white">
              {{ display.title }}
            </h2>
            <p class="text-gray-300 mb-2">
              <strong>Description:</strong> {{ display.description }}
            </p>
            <p class="text-gray-300 mb-2">
              <strong>Genre:</strong> {{ display.genre }}
            </p>
            <p class="text-gray-300 mb-2">
              <strong>Creators:</strong> {{ display.creators }}
            </p>
            <p class="text-gray-300 mb-2">
              <strong>Stars:</strong> {{ display.stars }}
            </p>
            <p class="text-gray-300">
              <strong>Rating:</strong> {{ display.rating }}
            </p>
          </div>
        </div>
      </Slide>
    </Carousel>
    <button
      @click="prev"
      class="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 text-red-600 text-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      @click="next"
      class="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 text-red-600 text-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const carousel = ref(null);

const displays = [
  {
    image: "public/assets/images/ab.jpg",
    title: "Pilot",
    description:
      "Rick takes Morty on a journey to another dimension to find seeds for his research.",
    genre: "Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "8.5/10",
  },
  {
    image: "public/assets/images/cd.jpg",
    title: "Lawnmower Dog",
    description:
      "Rick and Morty enter the dream of Morty's math teacher to influence his behavior.",
    genre: "Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "8.6/10",
  },
  {
    image: "public/assets/images/ef.jpg",
    title: "Meeseeks and Destroy",
    description:
      "Rick provides the family with a solution to their problems through Mr. Meeseeks, a creature who fulfills requests.",
    genre: "Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "8.9/10",
  },
  {
    image: "public/assets/images/gh.jpg",
    title: "Rick Potion No. 9",
    description:
      "Rick gives Morty a potion to make Jessica fall in love with him, but it goes wrong.",
    genre: " Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "9.0/10",
  },
  {
    image: "public/assets/images/ij.jpg",
    title: "Total Rickall",
    description:
      "The family battles a parasite that implants fake memories into their minds.",
    genre: "Fantasy, Drama",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "9.2/10",
  },
  {
    image: "public/assets/images/kl.jpg",
    title: "The Ricks Must Be Crazy",
    description:
      "Rick and Morty travel inside Rick's car's battery, where they discover a microverse.",
    genre: "Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "9.0/10",
  },
  {
    image: "public/assets/images/mn.jpg",
    title: "Pickle Rick",
    description:
      "Rick turns himself into a pickle to avoid family therapy but ends up on an unexpected adventure.",
    genre: " Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "9.3/10",
  },
  {
    image: "public/assets/images/op.jpg",
    title: "The Ricklantis Mixup",
    description:
      "While Rick and Morty visit Atlantis, the Citadel of Ricks undergoes major changes.",
    genre: "Animation, Adventure, Comedy, Sci-Fi",
    creators: "Dan Harmon, Justin Roiland",
    stars: " Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke",
    rating: "9.8/10",
  },
];

const imgWidth = 300;
const imgHeight = 300;

const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};
</script>
  
  <style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100%;
  max-width: 20rem;
  height: auto;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.prev-btn,
.next-btn {
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.prev-btn:hover,
.next-btn:hover {
  background-color: #ddd;
}
</style>
  