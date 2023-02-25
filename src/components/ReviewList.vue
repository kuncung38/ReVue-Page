<script setup>
import { onUpdated } from 'vue';
import ReviewItem from './ReviewItem.vue';
import { useReviewStore } from '../stores/review';

const store = useReviewStore()

onUpdated(() => {
    const id = store.reviews[store.reviews.length - 1].id
    document.getElementById(`review-${id}`).scrollIntoView({ behavior: 'smooth' })
})
</script>

<template>
    <div class="flex flex-col gap-8 mb-4">
        <p v-if="!store.reviews.length">No Reviews yet</p>

        <ReviewItem v-for="(review, index) in store.reviews" :key="index" :review="review" />
    </div>
</template>



<style lang="scss" scoped></style>