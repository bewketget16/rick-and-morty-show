<template>
     
    <div class="container mx-auto flex flex-wrap justify-center bg-sky-950 py-8">
       
      <div class="text-5xl w-full text-gray-300 mb-8 font-semibold" id="episode">
        Episodes
      </div>
       
      <div
        v-if="episodesResult && episodesResult.loading"
        class="text-center mt-8 text-lg font-semibold text-gray-800"
      >
        Loading...
      </div>
      
      <div
        v-else-if="episodesResult && episodesResult.error"
        class="text-center mt-8 text-lg font-semibold text-red-600"
      >
        Error: {{ episodesResult.error.message }}
      </div>
       
      <div
        v-else-if="episodes.length > 0"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="(episode, index) in episodes"
          :key="episode.id"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-md mx-4 mb-4"
        >
          <router-link :to="`/episode/${episode.id}`">
            
            <img
              :src="getUniqueCharacterImage(episode, index)"
              alt="Episode Image"
              class="w-full h-auto object-cover rounded-lg"
            />
          </router-link>
          <div class="p-4">
          
            <router-link :to="`/episode/${episode.id}`">
              <h3 class="text-xl font-semibold text-gray-300">{{ episode.name }}</h3>
            </router-link>
          </div>
        </div>
      </div>
       
      <div v-else class="text-center mt-8 text-lg font-semibold text-gray-300">
        No episodes available.
      </div>
    </div>
   
  </template>
  
  <script setup>
  import { useQuery } from "@vue/apollo-composable";
  import { gql } from "graphql-tag";
  import { ref, watchEffect } from "vue";
  
  const GET_EPISODES = gql`
    query GetEpisodes {
      episodes {
        results {
          id
          name
          characters {
            image
          }
        }
      }
    }
  `;
  
  const { result: episodesResult } = useQuery(GET_EPISODES);
  const episodes = ref([]);
  
  const getUniqueCharacterImage = (episode, index) => {
    if (episode.characters.length > 0) {
      const characterIndex = index % episode.characters.length;
      return episode.characters[characterIndex].image;
    }
    return "default-image-url.jpg";
  };
  
  watchEffect(() => {
    if (episodesResult.value && episodesResult.value.episodes) {
      episodes.value = episodesResult.value.episodes.results;
    }
  });
  </script>
  