<script setup>
import { useReviewStore } from '../stores/review';
const store = useReviewStore()

</script>

<template>
    <div class="flex items-center justify-between text-lg font-semibold text-semibold">
        <h4>{{ `${store.reviewsNumber} Reviews` }}</h4>
        <h4>{{ `Average Rating: ${store.averageRating}` }}</h4>
    </div>
</template>



<style lang="scss" scoped></style>