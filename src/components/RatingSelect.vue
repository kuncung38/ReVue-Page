<script setup>
const props = defineProps(['n'])
const emit = defineEmits(['rate'])


</script>

<template>
    <li class="relative">
        <input type="radio" name="rating" value="n" @click="$emit('rate', n)" :id="`rating-${n}`" class="opacity-0" />
        <label :for="`rating-${n}`"
            class="flex items-center justify-center rounded-full hover:bg-[#94e9cc] hover:text-white hover:border-none">{{ n
            }}</label>
    </li>
</template>

<style scoped>
label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4vw;
    height: 4vw;
    font-size: 1vw;
    cursor: pointer;
    border: 1px solid black;
    transition-duration: 200ms;
}

input[type="radio"]:checked~label {
    background-color: #4ecca3;
    color: white;
    border: none;
}
</style>

