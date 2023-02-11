<script>
export default {
  props: {
    listHeaderText: {
      type: String,
      required: true,
    },
    characterList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <h2>{{ listHeaderText }}</h2>
  <ul v-if="characterList.length > 0">
    <li v-for="character in characterList" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
  <p v-else>No Characters Found!</p>
</template>
