<script setup lang="ts">
import { Issue } from 'src/issues/interfaces/issue';
import IssueCard from './IssueCard.vue';

interface Props {
  issues: Issue[],
}

const props = defineProps<Props>();

</script>

<template>
  <div>
    <IssueCard v-for="item of props.issues" :key="item.id" :issue="item" />
  </div>
</template>

<style scoped></style>
