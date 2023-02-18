<script setup>
import { useReviewStore } from '../stores/review'

import { onMounted, ref } from 'vue';
import Card from './Shared/Card.vue';
import RatingSelect from './RatingSelect.vue'

const text = ref('')
const btnDisabled = ref(false)
const message = ref('Please choose rating')
const rating = ref(0)

const store = useReviewStore()

const rate = (n) => {
    rating.value = n

}

let warningText
let timer

const runTimer = () => {
    timer = setTimeout(() => {
        warningText.classList.remove('warning')
    }, 3000)
}

const handleSubmit = () => {
    if (text.value.length < 10 || !rating.value) {
        clearTimeout(timer)
        if (!rating.value) {
            message.value = 'Please choose rating'
        } else {
            message.value = 'Text must be at least 10 characters'
        }
        warningText.classList.remove('warning')
        void warningText.offsetWidth
        warningText.classList.add('warning')
        return runTimer()
    }

    const newReview = {
        text: text.value,
        rating: rating.value
    }
    store.addReview(newReview)
}

onMounted(() => {
    warningText = document.querySelector('#warning')
})

</script>


<template>
    <Card>
        <h2 class="text-2xl font-bold">How would you rate your service with us?</h2>
        <ul class="flex items-center justify-around w-full">
            <RatingSelect v-for="n in 10" :key="n" :n="n" @rate="rate" />
        </ul>
        <form @submit.prevent="handleSubmit" class="flex gap-2 w-full border border-[#ccc] p-2 rounded-md items-center">
            <input type="text" v-model.lazy="text" placeholder="Write a review"
                class="h-full ml-2 grow-[2] text-base focus:outline-none" />
            <button type="submit" :disabled="btnDisabled" class="px-4 py-2 text-white rounded-lg bg-[#232931]">send</button>
        </form>
        <p id="warning" class="text-red-600 duration-150 opacity-0">{{ message ? message : ' ' }}</p>
    </Card>
</template>


<style scoped>
.warning {
    opacity: 1;
    animation: glow 0.5s ease 3;
}

@keyframes glow {
    0% {
        text-shadow: 0 0 1em white;
    }

    50% {
        text-shadow: 0 0 1em red;
    }

    100% {
        text-shadow: 0 0 1em white;
    }
}
</style>