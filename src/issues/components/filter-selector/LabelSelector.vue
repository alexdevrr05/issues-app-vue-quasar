<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';


</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinnner size="50px" :thickness="1" :showText="false" />

    <div class="q-mt-md">
      <q-chip v-for="label of 10" :key="label" color="primary" outline clickable>
        Example
      </q-chip>
    </div>
  </div>
</template>

<style scoped></style>

