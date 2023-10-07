import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');

  return data;
};

const useLabels = () => {
  // const { isLoading, data, isError } = useQuery(['labels'], getLabels);

  const labels = ref<Label[]>();
  const { isLoading, data } = useQuery(['labels'], getLabels, {
    /** tomamos en cuenta que los labels no cambian mucho, por eso los mantenemos 1 hora en la caché */
    staleTime: 1000 * 60 * 60, // una hora
  });

  watch(
    data,
    () => {
      if (data.value) {
        // Hacemos destructuring para que el v-model los inputs no marquen warning
        labels.value = { ...data.value };
      }
    },
    { immediate: true }
  );

  return {
    // labelsQuery,
    isLoading,
    labels,
  };
};

export default useLabels;
