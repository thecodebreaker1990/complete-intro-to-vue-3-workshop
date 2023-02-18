<script>
import UserCard from "./UserCard.vue";

export default {
  components: {
    UserCard,
  },
  props: {
    userList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <UserCard
      v-for="user in userList"
      :key="user.id"
      :user="{ name: user.name, email: user.email, phone: user.phone }"
      :wrapper-class="$style.card"
    />
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container > .card {
  width: 32%;
  height: 200px;
  margin-bottom: 2%;
}
</style>
