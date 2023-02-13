<template>
  <div class="grid">
    <div><slot name="one"></slot></div>
    <div><slot name="two"></slot></div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
