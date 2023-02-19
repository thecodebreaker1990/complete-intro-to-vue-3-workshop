<script setup>
import { defineProps } from "vue";

defineProps({
  userList: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table border="black">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in userList" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>
