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

    const averageRating = computed(() => {
        let avg =
            reviews.value.reduce((current, next) => current + next.rating, 0) /
            reviews.value.length;
        return avg.toFixed(2);
    });

    const editedData = ref({
        editable: false,
        item: null,
    });

    function addReview(review) {
        const id = reviews.value[reviews.value.length - 1].id + 1;
        let newReview = { id, ...review };
        reviews.value.push(newReview);
    }

    return { reviews, averageRating, editedData, addReview };
});
