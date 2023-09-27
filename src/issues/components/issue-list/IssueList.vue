<script setup lang="ts">
import IssueCard from './IssueCard.vue';

</script>

<template>
  <div>
    <IssueCard v-for="item of 20" :key="item" />
  </div>
</template>

<style scoped></style>
