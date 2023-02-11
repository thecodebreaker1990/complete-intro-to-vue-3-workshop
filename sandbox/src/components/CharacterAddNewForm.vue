<script>
export default {
  props: {
    characterModel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      genderList: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" },
      ],
      elementalPowers: ["earth", "water", "fire", "wind", "space"],
    };
  },
  computed: {
    charGender: {
      get() {
        return this.characterModel.gender;
      },
      set(value) {
        this.$emit("on-input", { gender: value });
      },
    },
    charPowers: {
      get() {
        return this.characterModel.powers;
      },
      set(value) {
        this.$emit("on-input", { powers: value });
      },
    },
  },
  emits: ["on-input", "on-save"],
};
</script>

<template>
  <h2>Add New Characters</h2>
  <form>
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        :value="characterModel.name"
        @input="$emit('on-input', { name: $event.target.value })"
      />
    </div>
    <div>
      <label for="gender">Gender</label>
      <span v-for="gender in genderList" :key="gender.value">
        <input
          type="radio"
          name="gender"
          :id="`gender_${gender.value}`"
          :value="gender.value"
          v-model="charGender"
        />
        <label :for="`gender_${gender.value}`">{{ gender.label }}</label>
      </span>
    </div>
    <div>
      <label for="powers">Elemental Powers</label>
      <span v-for="powerName in elementalPowers" :key="powerName">
        <input
          type="checkbox"
          :id="`power_${powerName}`"
          :value="powerName"
          v-model="charPowers"
        />
        <label :for="`power_${powerName}`">{{ powerName }}</label>
      </span>
    </div>
    <button @click.prevent="$emit('on-save')">Save Character</button>
  </form>
</template>
