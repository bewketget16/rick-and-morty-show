<template>
  <div class="flex flex-col min-h-screen bg-sky-950">
    <Header />
    <div class="container mx-auto mt-8 flex-grow" v-if="!loading">
      <div class="container mx-auto mt-8" v-if="character">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center mb-4">
            <img
              :src="character.image"
              :alt="character.name"
              class="rounded-3xl w-52 mr-6 h-auto object-cover mt-12"
            />
            <div>
              <h2 class="text-2xl font-bold text-gray-400">
                {{ character.name }}
              </h2>
              <p class="text-lg text-gray-300">
                {{ character.status }} - {{ character.species }}
              </p>
              <p class="text-lg text-gray-300">{{ character.gender }}</p>
              <div class="border-t border-gray-300 mt-4 pt-4">
                <h3 class="text-xl font-bold mb-2 text-white">
                  Last Known Location
                </h3>
                <p class="text-lg text-gray-300">
                  {{ character.location.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-300 mt-4 pt-4">
            <h3 class="text-xl font-bold mb-2 text-white">
              Episodes That This Character Participated In:
            </h3>
            <ul
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6"
            >
              <li
                v-for="(episode, index) in character.episode"
                :key="index"
                class="mb-2"
              >
                <div class="bg-sky-950 border border-gray-500 rounded-lg p-4">
                  <p class="text-lg font-semibold text-white italic">
                    {{ episode.name }}
                  </p>
                  <p class="text-gray-300">
                    {{ episode.air_date }} - {{ episode.episode }}
                  </p>
                  <p class="text-sm text-gray-300">
                    Created: {{ episode.created }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No character data available.</p>
      </div>
    </div>
    <div v-else>
      <p>Loading character data...</p>
    </div>
    <Footer />
  </div>
</template>
  
  <script setup>
import { ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { useRoute } from "vue-router";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const route = useRoute();
const characterId = ref(route.params.id);

const { result, loading, error } = useQuery(
  gql`
    query GetCharacter($id: ID!) {
      character(id: $id) {
        name
        status
        species
        gender
        image
        episode {
          name
          air_date
          episode
          created
        }
        location {
          name
        }
      }
    }
  `,
  {
    id: characterId.value,
  }
);

const character = ref(null);

watchEffect(() => {
  if (result.value && result.value.character) {
    character.value = result.value.character;
  }
  if (loading.value) {
    console.log("Loading character data...");
  }
  if (error.value) {
    console.error("Error loading character data:", error.value);
  }
});
</script>
  