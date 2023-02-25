<script setup>
import { onUpdated } from 'vue';

const props = defineProps({
    n: { type: Number },
    rating: { type: Number },
    functional: { type: String },
    isEditing: { default: true },
    name: { type: String }
})
// const props = defineProps(['n', 'rating'])
const emit = defineEmits(['rate'])

const position = `${(props.n + 1) * 5}vw`

onUpdated(() => {
    console.log(props.functional, props.isEditing);
})

</script>

<template>
    <li class="relative" :class="{
        'to-edit': functional === 'edit',
        'rating-editing': (functional === 'edit' && isEditing)
    }" :style="{ zIndex: n === rating ? '11' : n, pointerEvents: isEditing ? 'auto' : 'none' }">
        <input type="radio" :name="functional === 'edit' ? name : 'rating'" value="n" :checked="rating === n"
            @click="$emit('rate', n)" :id="functional === 'edit' ? `${name}-${n}` : `rating-${n}`" class="opacity-0" />
        <label :for="functional === 'edit' ? `${name}-${n}` : `rating-${n}`"
            class="flex items-center justify-center rounded-full bg-white hover:bg-[#94e9cc] hover:text-white hover:border-none">{{
                n
            }}</label>
    </li>
</template>

<style scoped>
.to-edit {
    list-style: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(200%, -50%);
    transition: all 1s ease-in-out;
}

.rating-editing {
    left: v-bind('position');
}

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

