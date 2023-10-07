<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import useLabels from 'src/issues/composables/useLabels';

const { isLoading, labels } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinnner v-if="isLoading" size="50px" :thickness="1" :showText="false" />

    <div v-else class="q-mt-md">
      <q-chip v-for="label of labels" :key="label.id" outline clickable :style="{ color: `#${label.color}` }">
        {{ label.name }}
      </q-chip>
    </div>
  </div>
</template>

<style scoped></style>

