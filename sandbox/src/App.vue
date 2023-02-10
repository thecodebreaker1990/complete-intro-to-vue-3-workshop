<script>
const defaultCharacterInfo = {
  name: "",
  gender: "male",
  powers: [],
};
export default {
  data: () => ({
    showName: "Stranger Things",
    characters: [
      { id: 1, name: "Eleven", gender: "female", powers: ["pshycic"] },
      { id: 2, name: "Vecna", gender: "male", powers: ["pshycic"] },
      { id: 3, name: "Dustin", gender: "male", powers: ["Tech geek"] },
      { id: 4, name: "Steve", gender: "male", powers: ["Playboy"] },
      { id: 5, name: "Max", gender: "female", powers: ["Friendly"] },
    ],
    favouriteCharacters: [],
    characterModel: {
      ...defaultCharacterInfo,
    },
    isListView: true,
  }),
  computed: {
    commaSeparatedCharacterNames() {
      return this.characters.map((char) => char.name).join(", ");
    },
    genderStatistics() {
      return this.characters.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.gender]: (acc[cur.gender] || 0) + 1,
        };
      }, {});
    },
    listOfPowers: {
      get() {
        return this.characterModel.powers.join(",");
      },
      set(value) {
        const powerArr = value.split(",");
        this.characterModel.powers = powerArr;
      },
    },
  },
  methods: {
    toggleListView() {
      this.isListView = !this.isListView;
    },
    toggleFavourite(id, addToFavourite = false) {
      const index = this.characters.findIndex((char) => char.id === id);

      if (index === -1) return;
      if (addToFavourite) {
        const charDetails = this.characters[index];
        this.favouriteCharacters.push(charDetails);
      } else {
        const idx = this.favouriteCharacters.findIndex(
          (char) => char.id === id
        );
        this.favouriteCharacters.splice(idx, 1);
      }
    },
    isCharAddedToFavourite(id) {
      return this.favouriteCharacters.find((char) => char.id === id);
    },
    addNewCharacters() {
      this.characters.push({ id: +new Date(), ...this.characterModel });
      this.characterModel = { ...defaultCharacterInfo };
    },
  },
};
</script>

<template>
  <h2>{{ showName }} Charaters</h2>
  <button @click="toggleListView">Toggle List View</button>
  <div>
    <ul v-if="characters.length > 0 && isListView">
      <li v-for="character in characters" :key="character.id">
        <span>{{ character.name }} is a {{ character.gender }}</span>
        <button
          v-if="!isCharAddedToFavourite(character.id)"
          class="btn-favourite"
          @click="toggleFavourite(character.id, true)"
        >
          Add To Favourites
        </button>
        <button
          v-else
          class="btn-favourite"
          @click="toggleFavourite(character.id, false)"
        >
          Remove from Favourites
        </button>
      </li>
    </ul>
    <p v-else-if="characters.length > 0 && !isListView">
      {{ commaSeparatedCharacterNames }}
    </p>
    <p v-else>No Characters Found!</p>
  </div>
  <pre>{{ genderStatistics }}</pre>
  <div>
    <h2>My Favourites</h2>
    <ul v-if="favouriteCharacters.length > 0">
      <li v-for="character in favouriteCharacters" :key="character.id">
        {{ character.name }}
      </li>
    </ul>
    <p v-else>No Favourite Characters Found!</p>
  </div>
  <div>
    <h2>Add New Characters</h2>
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="characterModel.name" />
      <br />
      <br />
      <label for="gender">Gender</label>
      <input
        type="radio"
        name="gender"
        value="male"
        v-model="characterModel.gender"
      />
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        v-model="characterModel.gender"
      />
      Female
      <input
        type="radio"
        name="gender"
        value="others"
        v-model="characterModel.gender"
      />
      others
      <br />
      <br />
      <label for="powers">Powers</label>
      <input
        type="text"
        id="powers"
        placeholder="heat vision, fly, superhuman strength"
        v-model="listOfPowers"
      />
      <br />
      <br />
      <button @click.prevent="addNewCharacters">Save Character</button>
    </form>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
