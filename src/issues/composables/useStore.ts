import { useIssuesStore } from 'src/stores/issues';
import { toRefs } from 'vue';

const useStore = () => {
  const issueStore = useIssuesStore();
  const { state, labels } = toRefs(issueStore);

  return {
    // Reactive properties
    labels,
    state,

    // Getters (computed)

    // Actions Methods
  };
};

export default useStore;
