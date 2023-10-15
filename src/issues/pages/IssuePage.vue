<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinnner from 'src/shared/components/LoaderSpinnner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id } = route.params;

const { issueQuery, issueCommentsQuery } = useIssue(+id);
</script>

<template>
  <router-link class="text-white" to="/">Go back</router-link>
  <!-- Header -->
  <LoaderSpinnner v-if="issueQuery.isLoading.value" :thickness="1" size="2.3rem" color="white" :show-text="false" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with id {{ id }} not found</p>


  <!-- Comentarios -->
  <LoaderSpinnner v-if="issueCommentsQuery.isLoading.value" :thickness="1" size="2.3rem" :show-text="false" />
  <div class="column" v-else-if="issueCommentsQuery.data.value">
    <span class="text-h3 q-mb-md">Comments ({{ issueCommentsQuery.data.value?.length }})</span>
    <IssueCard v-for="comment of issueCommentsQuery.data.value" :issue="comment" :key="comment.id" />
  </div>
</template>

<style scoped></style>
