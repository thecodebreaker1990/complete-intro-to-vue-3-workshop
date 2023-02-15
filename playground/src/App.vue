<script>
import UserCardList from "./components/UserCardList.vue";
import UserTable from "./components/UserTable.vue";

export default {
  components: {
    UserCardList,
    UserTable,
  },
  data() {
    return {
      userList: [],
      activeView: "card-list",
    };
  },
  computed: {
    viewComponent() {
      return `user-${this.activeView}`;
    },
  },
  methods: {
    async fetchUsers() {
      this.userList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  <h2>UserList</h2>
  <div>
    <button @click="activeView = 'card-list'">Card View</button>
    <button @click="activeView = 'table'">Table View</button>
  </div>
  <component :is="viewComponent" :user-list="userList" />
</template>
