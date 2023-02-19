<script setup>
import { defineProps } from "vue";

defineProps({
  user: {
    type: Object,
    required: true,
  },
  wrapperClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="[$style.card, wrapperClass]">
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
  </div>
</template>

<style module>
.card {
  width: 100%;
  height: auto;
  padding: 0.5rem;
  border: solid 1px #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
</style>
