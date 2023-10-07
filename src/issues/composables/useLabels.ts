import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';
import { useIssuesStore } from 'src/stores/issues';
import { computed } from 'vue';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');

  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();
  // const { labels } = storeToRefs(issuesStore);

  const labelsQuery = useQuery(['labels'], getLabels, {
    /** tomamos en cuenta que los labels no cambian mucho, por eso los mantenemos 1 hora en la caché */
    staleTime: 1000 * 60 * 60, // una hora
  });

  return {
    labelsQuery,

    // Getters
    // Esto pierde reactividad
    // selectedLabels: issuesStore.labels,
    selectedLabels: computed(() => issuesStore.labels),
    // Cuando usamos 'storeToRefs' esto crea las referencias creativas
    // selectedLabels: labels,

    // Methods
    toggleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
