import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", () => {
    const reviews = ref([
        {
            id: 1,
            rating: 8,
            text: "This thing is quite good!",
        },
    ]);

    const reviewsNumber = computed(() => {
        return reviews.value.length;
    });

    const averageRating = computed(() => {
        let avg =
            reviews.value.reduce((current, next) => current + next.rating, 0) /
            reviews.value.length;
        return avg.toFixed(2);
    });

    function addReview(review) {
        const id = reviews.value[reviews.value.length - 1].id + 1;
        let newReview = { id, ...review };
        reviews.value.push(newReview);
    }

    function editReview(id, newRating, newText) {
        const index = reviews.value.findIndex((el) => el.id === id);
        reviews.value[index] = { id, rating: newRating, text: newText };
    }

    function deleteReview(id) {
        const index = reviews.value.findIndex((el) => el.id === id);
        reviews.value.splice(index, 1);
    }

    return {
        reviews,
        reviewsNumber,
        averageRating,
        editReview,
        addReview,
        deleteReview,
    };
});
