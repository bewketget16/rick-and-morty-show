<template>
     
    <div class="container mx-auto flex flex-wrap justify-center bg-sky-950">
      <div class="text-5xl w-full text-gray-300 font-semibold mb-4" id="location">
        Locations
      </div>
     
      <div v-if="loading" class="text-center mt-8 text-lg font-semibold text-gray-800">
        Loading...
      </div>
      
      <div v-else-if="error" class="text-center mt-8 text-lg font-semibold text-red-600">
        Error: {{ error.message }}
      </div>
       
      <div
        v-else-if="locations.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4"
      >
        <div
          v-for="location in locations"
          :key="location.id"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-md"
        >
          <router-link :to="`/location/${location.id}`">
            <div class="p-4">
              <img
                :src="location.residentImage || defaultImageUrl"
                alt="Resident Image"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-300">{{ location.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
       
      <div v-else class="text-center mt-8 text-lg font-semibold text-gray-300">
        No locations available.
      </div>
    </div>
     
  </template>
  
  <script setup>
  import { useQuery } from "@vue/apollo-composable";
  import { gql } from "graphql-tag";
  import { ref, watchEffect } from "vue";
  
  const DEFAULT_IMAGE_URL = "/assets/images/location.png";
  
  const locations = ref([]);
  const defaultImageUrl = DEFAULT_IMAGE_URL;
  
  const { result: locationResult, loading, error } = useQuery(gql`
    query {
      locations {
        results {
          id
          name
          residents {
            image
          }
        }
      }
    }
  `);
  
  watchEffect(() => {
    if (error.value) {
      console.error("Error fetching locations:", error.value);
      return;
    }
  
    if (locationResult.value && locationResult.value.locations) {
      const locationMap = new Map();
  
      locationResult.value.locations.results.forEach((location) => {
        if (location && !locationMap.has(location.id)) {
          const residentImage =
            location.residents && location.residents.length > 0
              ? location.residents[0].image
              : null;
  
          locations.value.push({
            id: location.id,
            name: location.name,
            residentImage: residentImage || defaultImageUrl,
          });
          locationMap.set(location.id, true);
        }
      });
    }
  });
  </script>
  