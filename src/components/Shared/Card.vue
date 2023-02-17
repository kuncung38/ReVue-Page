<script setup>
const props = defineProps({
    chosen: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="flex flex-col items-center gap-16 bg-white text-[#212121] rounded-md relative p-8 px-10"
        :class="{ chosen: chosen }">
        <slot />
    </div>
</template>



<style scoped>
.chosen {
    background: rgba(0, 0, 0, 0.4);
    color: white;
}
</style>