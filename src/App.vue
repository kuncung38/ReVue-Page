<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <RouterView />
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>