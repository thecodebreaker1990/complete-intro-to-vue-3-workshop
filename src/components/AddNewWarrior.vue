<script>
export default {
  data() {
    return {
      newWarrior: { name: null, weapon: null, level: null },
    };
  },
  methods: {
    handleSubmitNewWarrior() {
      this.$emit('on-submit-user', this.newWarrior);
      this.newWarrior = {};
    }
  }
};
</script>

<template>
  <h1>Add new Warrior</h1>
  <form @submit.prevent="handleSubmitNewWarrior">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="newWarrior.name" />
    <label for="weapon">Weapon</label>
    <input type="text" id="weapon" v-model="newWarrior.weapon" />
    <label for="level">Level</label>
    <input type="text" id="level" v-model="newWarrior.level" />
    <input type="submit" value="Save" />
  </form>
</template>

<style>
input {
  display: block;
}
</style>
