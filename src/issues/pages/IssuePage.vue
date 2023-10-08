<script setup lang="ts">
// import { useRoute } from 'vue-router';
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';

// const route = useRoute();
</script>

<template>
  <LoaderSpinnner color="white" />
  <router-link class="text-white" to="/">Go back</router-link>
  <!-- Header -->
  <IssueCard />

  <LoaderSpinnner :thickness="1" size="2.3rem" :show-text="false" />

  <!-- Comentarios -->
  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <IssueCard v-for="item of 5" :key="item" />
  </div>
</template>

<style scoped></style>
