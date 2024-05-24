<template>
    <header class="bg-slate-900 text-white">
      <div class="container mx-auto py-4 flex justify-between items-center">
         
        <router-link to="/" class="text-3xl text-gray-300 font-semibold"> RICK AND MORTY TV SHOW </router-link>
  
        <!-- Navigation Links -->
        <nav class="flex space-x-4">
          <a href="/" class="hover:text-gray-400 text-gray-300">Home</a>
          <a href="/#character" class="hover:text-gray-400 text-gray-200">Characters</a>
          <a href="/#episode" class="hover:text-gray-400 text-gray-200">Episodes</a>
          <a href="/#location" class="hover:text-gray-400 text-gray-200">Locations</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  
  </style>
  