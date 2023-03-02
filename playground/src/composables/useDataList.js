import { ref } from "vue";

export function useDataList(url, initialState = []) {
  const state = ref(initialState);
  const isLoading = ref(false);
  const error = ref(undefined);

  const fetchList = async function () {
    try {
      isLoading.value = true;
      const response = await fetch(url).then((response) => response.json());
      state.value = response?.results ?? response;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };

  fetchList();

  return {
    state,
    isLoading,
    error,
  };
}
