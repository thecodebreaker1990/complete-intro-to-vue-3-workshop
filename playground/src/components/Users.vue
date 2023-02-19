<script setup>
import { reactive, computed } from "vue";

import UserCardList from "./UserCardList.vue";
import UserTable from "./UserTable.vue";

const state = reactive({
  activeView: "table",
  userList: [],
});

const viewComponent = computed(function () {
  if (state.activeView === "table") return UserTable;
  else return UserCardList;
});

const updateView = function (viewType) {
  state.activeView = viewType;
};

const fetchUsers = async function () {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
};

state.userList = await fetchUsers();
</script>

<template>
  <h2>UserList</h2>
  <div>
    <button @click="updateView('card-list')">Card View</button>
    <button @click="updateView('table')">Table View</button>
  </div>
  <component :is="viewComponent" :user-list="state.userList" />
</template>
