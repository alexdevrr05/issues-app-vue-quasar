<script setup lang="ts">
import { Issue, State } from 'src/issues/interfaces/issue';
import { timeSince } from 'src/shared/helpers/time-since';
import { toRef } from 'vue';
import VueMarkdown from 'vue-markdown-render';

interface Props {
  issue: Issue;
}

const props = defineProps<Props>();

const issue = toRef(props, 'issue');

</script>


<template>
  <q-card class="text-black col-12 q-mb-md" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="issue.user.avatar_url" alt="User Avatar">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <router-link :to="`/issue/${issue.number}`">{{ issue.title }}</router-link>
        </q-item-label>
        <q-item-label caption>
          {{ timeSince(issue.created_at) }} ago
        </q-item-label>
      </q-item-section>

      <q-item-section>
        <q-item-label class="row items-center justify-end">
          <q-item-label class="q-mr-md">
            <q-icon name="question_answer" />
            {{ issue.comments }}
          </q-item-label>
          <q-chip v-if="issue.state === State.Closed" color="positive" text-color="white" icon="check"> Closed </q-chip>
          <q-chip v-else color="negative" text-color="white" icon="bug_report"> Open</q-chip>
        </q-item-label>

      </q-item-section>
    </q-item>

    <q-separator />

    <q-item-section class="q-pa-md markdown-css">
      <vue-markdown :source="issue.body || ''" />
    </q-item-section>

    <q-separator />

    <q-item-section class="q-pa-xs q-gutter-xs">
      <div>
        <q-chip v-for="label of issue.labels" :key="label.id" outline
          :style="{ color: `#${label.color === 'e7e7e7' ? 'ff00ff' : label.color}` }">
          {{ label.name }}
        </q-chip>
      </div>
    </q-item-section>

  </q-card>
</template>


<style>
/* Hacemos esto porque hay body's que vienen con imagenes gigantes */
.markdown-css img {
  width: 250px !important;
}

/* Hacemos esto porque hay code's gigantes */
.q-item__section code {
  white-space: pre-wrap;
  /* Controla el flujo del texto y permite el ajuste de línea */
  overflow-x: auto;
  /* Agrega una barra de desplazamiento horizontal si es necesario */
  max-width: 100%;
  /* Asegura que el código no supere el ancho del contenedor */
  word-break: break-word;
}
</style>
