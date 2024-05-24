<template>
    <footer class="bg-slate-900 text-white mt-8">
      <div class="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
         
        <div>
          <h2 class="text-xl font-bold mb-4">About Us</h2>
          <p class="text-gray-400">
            Welcome to the Rick and Morty Movie Hub. Here, you can find all the latest updates, trailers, and reviews about the Rick and Morty universe.
          </p>
        </div>
   
        <div>
          <h2 class="text-xl font-bold mb-4">Contact Us</h2>
          <ul class="text-gray-400">
            <li>Email: info@rickandmortymoviehub.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Multiverse Street, Dimension C-137</li>
          </ul>
        </div>
  
         
        <div>
          <h2 class="text-xl font-bold mb-4">Follow Us</h2>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-300"><i class="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" class="hover:text-gray-300"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="#" class="hover:text-gray-300"><i class="fab fa-instagram"></i> Instagram</a>
           </div>
        </div>
  
         
        <div>
          <h2 class="text-xl font-bold mb-4">Legal</h2>
          <ul class="text-gray-400">
            <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" class="hover:text-gray-300">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
  </footer>
  </template>
  
  <!-- <script>
  import { defineComponent, computed } from "vue";
  
  export default defineComponent({
    setup() {
      const currentDate = computed(() => {
        const date = new Date();
        return `${date.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
        })}, ${date.getFullYear()}`;
      });
  
      return { currentDate };
    },
  });
  </script> -->
  
  <style scoped>
  footer {
    font-family: 'Arial', sans-serif;
  }
  h2 {
    color: #ffcc00;
  }
  a {
    transition: color 0.3s;
  }
  </style>
  