<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import useLabels from 'src/issues/composables/useLabels';

const { labelsQuery, selectedLabels, toggleLabel } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinnner v-if="labelsQuery.isLoading.value" size="50px" :thickness="1" :showText="false" />

    <div v-else class="q-mt-md">
      <q-chip v-for="label of labelsQuery.data.value" :key="label.id" :outline="!selectedLabels.includes(label.name)"
        clickable :style="{ color: `#${label.color}` }" @click="toggleLabel(label.name)">
        {{ label.name }}
      </q-chip>
    </div>
  </div>
</template>

<style scoped></style>

