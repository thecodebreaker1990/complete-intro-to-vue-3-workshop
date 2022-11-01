<script>
import Counter from './components/Counter.vue';
import WarriorStatistics from './components/WarriorStatistics.vue';
import AddNewWarrior from './components/AddNewWarrior.vue';

export default {
  name: 'App',
  components: {
    Counter,
    WarriorStatistics,
    AddNewWarrior,
  },
  data() {
    return {
      warriorList: [
        { name: 'Beristan Selmy', weapon: 'Sword', level: 'Pro' },
        { name: 'Arthur Dayne', weapon: 'Sword', level: 'Pro' },
        { name: 'Robert Baratheon', weapon: 'Hammer', level: 'Pro' },
        { name: 'Ned Stark', weapon: 'Sword', level: 'Semi Pro' },
        { name: 'Arya Stark', weapon: 'Bow', level: 'Pro' },
      ],
      favouriteList: [],
      newWarrior: { name: null, weapon: null, level: null },
    };
  },
  methods: {
    toggleFavourite(name, isAddOperation = true) {
      if (isAddOperation) this.favouriteList.push(name);
      else {
        const idx = this.favouriteList.findIndex((char) => char.name === name);
        this.favouriteList.splice(idx, 1);
      }
    },
    isFavouriteCharacter(name) {
      return this.favouriteList.indexOf(name) != -1;
    },
    addNewWarrior(newWarrior) {
      this.warriorList.push(newWarrior);
    },
  },
};
</script>

<template>
  <div id="app">
    <Counter />

    <WarriorStatistics :warriors="warriorList" />

    <h1>GOT Warriors!</h1>
    <ul v-if="warriorList.length > 0">
      <li v-for="warrior in warriorList">
        {{ warrior.name }} expertieses in {{ warrior.weapon }}, level -
        {{ warrior.level }}
        <button
          v-if="!isFavouriteCharacter(warrior.name)"
          @click="toggleFavourite(warrior.name)"
        >
          Add To Favourite
        </button>
        <button v-else @click="toggleFavourite(warrior.name, false)">
          Remove from Favourite
        </button>
      </li>
    </ul>
    <div v-else>No Warrior Found!</div>

    <h1>My Favourites</h1>
    <ul v-if="favouriteList.length > 0">
      <li v-for="fav in favouriteList">{{ fav }}</li>
    </ul>
    <div v-else>No favourites Found!</div>

    <AddNewWarrior @on-submit-user="addNewWarrior" />
  </div>
</template>
