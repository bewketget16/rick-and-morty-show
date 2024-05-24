<template>
  <div class="bg-sky-950">
    <Header />
    <Carousel />
    <Character />
   <Episode />
    <Location />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Episode from "../components/Episode.vue";
import Character from "../components/Character.vue";
import Location from "../components/Location.vue";
</script>
