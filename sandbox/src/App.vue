<script>
import CharacterAddNewForm from "./components/CharacterAddNewForm.vue";
import CharacterList from "./components/CharacterList.vue";
import CharacterStatistics from "./components/CharacterStatistics.vue";

const defaultCharacterInfo = {
  name: "",
  gender: "male",
  powers: [],
};
export default {
  components: {
    CharacterList,
    CharacterStatistics,
    CharacterAddNewForm,
  },
  data: () => ({
    showName: "Avatar - The Last Airbender",
    characters: [
      {
        id: 1,
        name: "Aang",
        gender: "female",
        powers: ["wind", "water", "fire"],
      },
      { id: 2, name: "Katara", gender: "male", powers: ["earth"] },
      { id: 3, name: "Zuko", gender: "male", powers: ["space"] },
      { id: 4, name: "Azula", gender: "male", powers: ["fire"] },
      { id: 5, name: "Sokka", gender: "female", powers: ["wind"] },
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
    updateCharacterModel(updatedInfo) {
      this.characterModel = { ...this.characterModel, ...updatedInfo };
    },
  },
};
</script>

<template>
  <!-- <button @click="toggleListView">Toggle List View</button> -->
  <CharacterStatistics :characters="characters" />
  <h2>{{ showName }} Charaters</h2>
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
  <CharacterList
    list-header-text="My Favourites"
    :character-list="favouriteCharacters"
  />
  <CharacterAddNewForm
    :character-model="characterModel"
    @on-input="updateCharacterModel($event)"
    @on-save="addNewCharacters"
  />
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
ul > li:not(:last-child) {
  margin-bottom: 1rem;
}
button.btn-favourite {
  margin: 0 10px;
  padding: 0.5rem;
  border: solid 1px black;
  background-color: #eee;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
button.btn-favourite:hover {
  background-color: black;
  color: white;
}
</style>
