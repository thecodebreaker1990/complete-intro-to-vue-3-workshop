<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    favouriteButtonText() {
      return this.isFavourite ? "Remove from Favourites" : "Add To Favourites";
    },
  },
  emits: ["on-toggle"],
  components: {
    BaseButton,
  },
};
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <BaseButton class="btn-favourite" @click="$emit('on-toggle', !isFavourite)">
      {{ favouriteButtonText }}
    </BaseButton>
  </div>
</template>

<style scoped>
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
