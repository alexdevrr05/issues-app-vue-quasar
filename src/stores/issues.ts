import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('counter', () => {
  const state = ref(0); // all = '', open, closed
  const labels = ref<string[]>([]);

  return {
    // State properties
    state,
    labels,

    // Getters

    // Actions
    // toggleLabel(labelName: string) {},
  };
});
