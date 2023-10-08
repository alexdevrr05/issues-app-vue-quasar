<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import IssueList from '../components/issue-list/IssueList.vue';
import useIssues from 'src/issues/composables/useIssues';

const { issuesQuery } = useIssues();

</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h2">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- TODO: Filtros -->
      <!-- FilterSelector -->
      <FilterSelector />
    </div>

    <div class="col-xs-12 col-md-8">
      <!-- TODO: Loader -->
      <LoaderSpinnner v-if="issuesQuery.isLoading.value" :color="'secundary'" />

      <IssueList v-else :issues="issuesQuery.data?.value || []" />

    </div>

  </div>
</template>

<style scoped></style>
