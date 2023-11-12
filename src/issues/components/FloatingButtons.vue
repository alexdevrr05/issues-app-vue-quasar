<script setup lang="ts">

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface FabButton {
    icon: string;
    color?: string;
    size?: Size;
    actions: () => void;
}

interface Props {
    buttons: FabButton[];
}

const props = defineProps<Props>();

</script>

<template>
    <div class="fab">
        <q-btn round v-for="{ actions, color, icon, size } in props.buttons" :key="icon" :color="color" :icon="icon"
            :size="size" @click="actions" />
    </div>
</template>

<style scoped>
.fab {
    position: fixed;
    bottom: 30px;
    right: 30px;
}
</style>