<script setup>
import ReviewItem from './ReviewItem.vue';
import { useReviewStore } from '../stores/review';

const store = useReviewStore()


</script>

<template>
    <div class="flex flex-col gap-4 mb-4">
        <p v-if="!store.reviews.length">No Reviews yet</p>

        <ReviewItem v-for="(review, index) in store.reviews" :key="index" :review="review" />
    </div>
</template>



<style lang="scss" scoped></style>