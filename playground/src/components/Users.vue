<script setup>
import { reactive, computed } from "vue";
import { useDataList } from "@/composables/useDataList";

import UserCardList from "./UserCardList.vue";
import UserTable from "./UserTable.vue";

const state = reactive({
  activeView: "table",
});

const viewComponent = computed(function () {
  if (state.activeView === "table") return UserTable;
  else return UserCardList;
});

const updateView = function (viewType) {
  state.activeView = viewType;
};

const { state: userList } = useDataList(
  "https://jsonplaceholder.typicode.com/users",
  []
);
</script>

<template>
  <h2>UserList</h2>
  <div>
    <button @click="updateView('card-list')">Card View</button>
    <button :class="$style.btn" @click="updateView('table')">Table View</button>
  </div>
  <component :is="viewComponent" :user-list="userList" />
</template>

<style module>
.btn {
  border-color: green;
}
</style>
