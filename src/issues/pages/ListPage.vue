<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';

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
      <LoaderSpinnner :color="'secundary'" />
      <!-- TODO: IssueList - Array de IssueCard -->
    </div>

  </div>
</template>

<style scoped></style>
