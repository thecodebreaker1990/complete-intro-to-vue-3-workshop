<script setup>
import Pokedex from "./components/Pokedex.vue";
import Users from "./components/Users.vue";
import { ref } from "vue";

const colorPreference = ref("black");
</script>

<template>
  <div class="container">
    <div>
      <h2>Color Preference = {{ colorPreference }}</h2>
      <input type="color" v-model="colorPreference" />
      <Suspense>
        <Users />
        <template #fallback> Loading Users... </template>
      </Suspense>
    </div>
    <div>
      <Suspense>
        <Pokedex />
        <template #fallback> Loading Pokedex... </template>
      </Suspense>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5rem;
  background-color: v-bind(colorPreference);
}
html {
  background-color: papayawhip;
}

button {
  border: solid 5px red;
}
</style>
