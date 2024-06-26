<template>
  <div class="flex flex-col min-h-screen bg-sky-950">
    <Header />
    <div class="container mx-auto mt-8 flex-grow">
      <div v-if="loading">Loading...</div>
      <!-- <div v-else-if="error">Error loading Episode data</div> -->
      <!-- Episode Detail -->
      <div v-else-if="episode" class="mt-8 ml-6">
        <h2 class="text-3xl font-semibold text-white">
          Episode Name: <span class="text-gray-400">{{ episode.name }}</span>
        </h2>
        <p class="text-gray-300 mt-2">Air Date: {{ episode.air_date }}</p>
        <p class="text-gray-300">Episode: {{ episode.episode }}</p>
        <p class="text-gray-300">Created: {{ episode.created }}</p>
        <hr class="my-4" />
        <!-- Characters List -->
        <h3 class="text-xl font-semibold mt-6 text-white mb-2 ml-6">
          Characters in this Episode:
        </h3>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mr-6 ml-6"
        >
          <div
            v-for="(character, index) in episode.characters"
            :key="index"
            class="border border-gray-500 rounded-lg overflow-hidden shadow-md"
          >
            <img
              :src="character.image"
              alt="Character Image"
              class="w-full h-auto object-cover rounded-t-lg"
            />
            <div class="p-4">
              <p class="font-semibold text-gray-400">{{ character.name }}</p>
              <p class="text-gray-300">Status: {{ character.status }}</p>
              <p class="text-gray-300">Species: {{ character.species }}</p>
              <p class="text-gray-300">Gender: {{ character.gender }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- No Episode Selected -->
      <!-- <div v-else class="text-center mt-8 text-lg font-semibold text-gray-800">
          NO Episode Data Available
        </div> -->
    </div>
    <Footer />
  </div>
</template>
  
  <script setup>
import { ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const episodeId = ref(route.params.id);

const { result, loading, error } = useQuery(
  gql`
    query GetEpisodeDetail($episodeId: ID!) {
      episode(id: $episodeId) {
        name
        air_date
        episode
        created
        characters {
          name
          status
          species
          gender
          image
        }
      }
    }
  `,
  {
    episodeId: episodeId.value,
  }
);

const episode = ref(null);

watchEffect(() => {
  if (result.value && result.value.episode) {
    episode.value = result.value.episode;
  }
  if (loading.value) {
    console.log("Loading Episode data...");
  }
  if (error.value) {
    console.error("Error loading Episode data:", error.value);
  }
});
</script>
  