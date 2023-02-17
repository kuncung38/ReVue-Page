import { ref } from "vue";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", () => {
    const reviews = ref([
        {
            rating: 8,
            text: "This thing is quite good!",
        },
    ]);
    const editedData = ref({
        editable: false,
        item: null,
    });

    function addReview(review) {
        reviews.value.push(review);
    }

    return { reviews, editedData, addReview };
});
