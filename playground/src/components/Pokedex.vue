<script setup>
import { ref, computed } from "vue";
import { useDataList } from "@/composables/useDataList";

let regionName = ref("kanto");

const regionNameAllCaps = computed(function () {
  return regionName.value.toUpperCase();
});

const changeRegionName = function () {
  regionName.value = "Hoenn";
};

const { state: pokedex } = useDataList(
  "https://pokeapi.co/api/v2/pokemon?limit=20",
  []
);
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
