<script setup lang="ts">
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import { useRoute } from 'vue-router';
import IssueCard from '../components/issue-list/IssueCard.vue';

const route = useRoute();
// Si no viene entonces establezco empty string
const { id = '' } = route.params;

</script>

<template>
  <LoaderSpinnner color="white" />
  <router-link class="text-white" to="/">Go back</router-link>
  <!-- Header -->
  <IssueCard />

  <!-- Comentarios -->
  <LoaderSpinnner :thickness="1" size="2.3rem" :show-text="false" />

  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <IssueCard v-for="item of 5" :key="item" />
  </div>
</template>

<style scoped></style>
