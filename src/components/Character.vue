<template>
     
    <div class="container mx-auto flex flex-wrap justify-center bg-sky-950">
      <div class="container mx-auto flex flex-wrap justify-center">
         
        <div class="text-5xl w-full text-gray-300 font-semibold mb-4" id="character">
          Characters
        </div>
      </div>
       
      <div
        v-if="result && result.loading"
        class="text-center mt-8 text-lg font-semibold text-gray-800"
      >
        Loading...
      </div>
       
      <div
        v-else-if="result && result.error"
        class="text-center mt-8 text-lg font-semibold text-red-600"
      >
        Error: {{ result.error.message }}
      </div>
      
      <div
        v-else-if="characters.length > 0"
        class="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"
      >
        <div
          v-for="(item, index) in characters"
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-md mx-4 mb-4"
        >
          <router-link :to="`/character/${item.id}`">
            <img
              :src="item.image"
              alt="Character Image"
              class="w-full h-auto object-cover rounded-lg"
            />
          </router-link>
          <div class="p-4">
            <router-link :to="`/character/${item.id}`">
              <h3 class="text-xl font-semibold text-gray-300">{{ item.name }}</h3>
            </router-link>
            <div class="text-sm text-gray-400 mt-1">
              <span
                :class="{
                  'text-green-400': item.status === 'Alive',
                  'text-red-500': item.status === 'Dead',
                }"
              >
                {{ item.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
       
      <div v-else class="text-center mt-8 text-lg font-semibold text-gray-800">
        No data available.
      </div>
    </div>
   
  </template>
  
  <script setup>
  import { ref, watchEffect } from "vue";
  import { useQuery } from "@vue/apollo-composable";
  import { gql } from "graphql-tag";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const { result } = useQuery(
    gql`
      query GetCharacters {
        characters {
          results {
            id
            name
            status
            image
          }
        }
      }
    `
  );
  
  const characters = ref([]);
  
  watchEffect(() => {
    if (result.value && result.value.characters) {
      characters.value = result.value.characters.results;
    }
  });
  </script>
  