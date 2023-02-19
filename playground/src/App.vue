<script>
import Pokedex from "./components/Pokedex.vue";
import Users from "./components/Users.vue";

export default {
  components: {
    Pokedex,
    Users,
  },
};
</script>

<template>
  <div class="container">
    <div>
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
}
</style>
