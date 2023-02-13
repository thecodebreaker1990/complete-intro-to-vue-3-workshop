<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <button><slot>Submit</slot></button>
</template>
