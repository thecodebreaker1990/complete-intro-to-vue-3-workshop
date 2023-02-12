<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    genderStatistics() {
      return this.characters.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.gender]: (acc[cur.gender] || 0) + 1,
        };
      }, {});
    },
  },
};
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(stat, type) in genderStatistics" :key="`char-${stat}-${type}`">
      {{ type }}: {{ stat }}
    </li>
  </ul>
</template>
