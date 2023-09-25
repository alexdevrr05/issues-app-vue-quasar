<script setup lang="ts">

</script>

<template>
  <!-- v-model="model" -->
  <q-btn-toggle push toggle-color="primary" :options="[
    { label: 'One', value: '' },
    { label: 'Two', value: 'open' },
    { label: 'Three', value: 'closed' }
  ]" />
</template>

<style scoped></style>
