import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue } from '../interfaces/issue';
import { useIssuesStore } from 'src/stores/issues';
import { toRefs } from 'vue';

import { State } from '../interfaces/issue';

const getIssues = async (state: State, labels: string[]): Promise<Issue[]> => {
  const params = new URLSearchParams();

  params.append('per_page', '10');

  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsStrings = labels.join(',');
    params.append('labels', labelsStrings);
  }

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const issueStore = useIssuesStore();

  const { state, labels } = toRefs(issueStore);

  const issuesQuery = useQuery(['issues', { state, labels }], () =>
    getIssues(state.value, labels.value)
  );

  return {
    issuesQuery,
  };
};

export default useIssues;
