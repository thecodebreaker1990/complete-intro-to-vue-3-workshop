<script>
export default {
  props: {
    warriors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    warriorStatistics() {
      const weapons = ['Sword', 'Hammer', 'Bow'];
      const statistics = {
        sword: 0,
        hammer: 0,
        bow: 0,
      };
      return this.warriors.reduce((acc, cur) => {
        const weapon = cur.weapon.toLowerCase();
        return { ...acc, [weapon]: acc[weapon] + 1 };
      }, statistics);
    },
  },
};
</script>

<template>
  <h1>Statistics</h1>
  <p>Sword Experts: {{ warriorStatistics['sword'] }}</p>
  <p>Hammer Experts: {{ warriorStatistics['hammer'] }}</p>
  <p>Bow Experts: {{ warriorStatistics['bow'] }}</p>
</template>
