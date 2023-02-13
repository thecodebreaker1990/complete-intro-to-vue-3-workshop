<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    powerStatistics() {
      const elementalPowerStatistics = {
        earth: 0,
        water: 0,
        fire: 0,
        wind: 0,
        space: 0,
      };
      return this.characters.reduce((acc, cur) => {
        const powers = cur.powers;
        powers.forEach((power) => {
          const currentStatistic = acc[power] || 0;
          acc = { ...acc, [power]: currentStatistic + 1 };
        });
        return acc;
      }, elementalPowerStatistics);
    },
  },
};
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(stat, type) in powerStatistics" :key="`char-${stat}-${type}`">
      {{ type }}: {{ stat }}
    </li>
  </ul>
</template>
