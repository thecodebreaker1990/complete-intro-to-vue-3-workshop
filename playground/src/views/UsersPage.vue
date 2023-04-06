<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRouter } from "vue-router";

import { useDataList } from "@/composables/useDataList";

import UserCardList from "../components/UserCardList.vue";
import UserTable from "../components/UserTable.vue";

const router = useRouter();
const state = reactive({
  activeView: "table",
});
const count = ref(0);

const viewComponent = computed(function () {
  if (state.activeView === "table") return UserTable;
  else return UserCardList;
});

const updateView = function (viewType) {
  state.activeView = viewType;
};

const incrementCount = function () {
  count.value += 10;
};

const { state: userList } = useDataList(
  "https://jsonplaceholder.typicode.com/users",
  []
);

watch(count, (val) => {
  if (val > 50) {
    router.push("/pokedex");
  }
});
</script>

<template>
  <h2>UserList</h2>
  <h3>{{ count }}</h3>
  <button @click="incrementCount">Increment Count</button>
  <br /><br />
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
