<script setup>
import { ref } from 'vue';
import Card from './Shared/Card.vue';

const text = ref('')
const btnDisabled = ref(false)
const message = ref('')
</script>


<template>
    <Card>
        <h2 class="text-2xl font-bold">How would you rate your service with us?</h2>
        <!-- Rating -->
        <form class="flex gap-2 w-full border border-[#ccc] p-2 rounded-md items-center">
            <input type="text" placeholder="Write a review" class="h-full ml-2 grow-[2] text-base focus:outline-none" />
            <input type="button" :disabled="btnDisabled" value="send"
                class="px-4 py-2 text-white rounded-lg bg-[#232931]" />
        </form>
        <p class="text-red-600">Text must be at least 10 characters</p>
    </Card>
</template>


<style lang="scss" scoped></style>