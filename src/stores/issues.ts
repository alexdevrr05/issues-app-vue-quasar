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
    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }

      labels.value.push(labelName);
    },
  };
});
