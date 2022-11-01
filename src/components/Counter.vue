<script>
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 8,
    };
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Standard - Very Long';
      } else {
        return 'Counter Standard';
      }
    },
  },
  methods: {
    increment() {
      this.count += this.incrementAmount;
    },
  },
};
</script>

<template>
  <h1>{{ displayTitle }}: {{ count }}</h1>
  <label for="incrementCounter"> Increment Count By: </label>
  <input id="incrementCounter" type="number" v-model="incrementAmount" />
  <button @click="increment">Increment Count</button>
</template>
