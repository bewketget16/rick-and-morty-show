import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createRouter, createWebHistory } from "vue-router";
import { DefaultApolloClient } from "@vue/apollo-composable";

import HomePage from "./pages/HomePage.vue";
import CharacterPage from "./pages/CharacterPage.vue";
import EpisodePage from "./pages/EpisodePage.vue";
import LocationPage from "./pages/LocationPage.vue";

export const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/episode/:id", component: EpisodePage },
    { path: "/character/:id", component: CharacterPage },
    { path: "/location/:id", component: LocationPage },
  ],
});

createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount("#app");
