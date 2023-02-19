<script setup>
import { ref, computed } from "vue";

let regionName = ref("kanto");
let pokedex = [];

const regionNameAllCaps = computed(function () {
  return regionName.value.toUpperCase();
});

const fetchPokeMon = async function () {
  const { results } = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  ).then((response) => response.json());
  pokedex = results;
};

const changeRegionName = function () {
  regionName.value = "Hoenn";
};

await fetchPokeMon();
</script>

<template>
  <h2>Region Name : {{ regionName }}</h2>
  <h3>Region Name (Capitalized): {{ regionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <ul>
    <li v-for="pokemon in pokedex" :key="pokemon.url">
      <p>{{ pokemon.name }}</p>
    </li>
  </ul>
</template>
