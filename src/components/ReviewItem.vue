<script setup>
import { ref, nextTick } from 'vue';
import Card from './Shared/Card.vue';
import RatingSelect from './Shared/RatingSelect.vue';

import { useReviewStore } from '../stores/review';

const props = defineProps(['review'])

const isEditing = ref(false)
const input = ref(null)

const rating = ref(props.review.rating)
const text = ref(props.review.text)

const initialValue = rating.value
const initialText = text.value

const store = useReviewStore()

const toEdit = async () => {
    isEditing.value = true
    await nextTick()
    setTimeout(() => {
        input.value.scrollIntoView({ behavior: 'smooth' })
        input.value.focus({ preventScroll: true })
    }, 100)
}

const rate = (n) => {
    rating.value = n
    console.log(rating.value);
}

const cancel = () => {
    rating.value = initialValue
    text.value = initialText
    isEditing.value = false
    console.log(props.review.rating);
}

const submitEdit = () => {
    store.editReview(props.review.id, rating.value, text.value)
    isEditing.value = false
}

const deleteReview = () => {
    store.deleteReview(props.review.id)
}

</script>

<template>
    <Card class="justify-start transition-all duration-150" style="flex-direction: column;" :id="`review-${review.id}`">
        <div class="absolute flex flex-row items-center justify-center gap-4 top-2 right-2">
            <button @click.prevent="toEdit">
                <span class="font-semibold material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button @click="deleteReview">
                <span class="font-semibold material-symbols-outlined">
                    close
                </span>
            </button>
        </div>

        <div class="rating-display" :class="isEditing ? 'editing' : ''">
            <RatingSelect v-for="n in 10" :key="`edit-${n}`" :n="n" :rating="rating" :isEditing="isEditing"
                :functional="'edit'" :name="`review-${review.id}-edit`" @rate="rate" />
        </div>

        <div class="w-full mt-4" :style="{ transition: 'all 0.5s ease', marginTop: isEditing ? '15vh' : '0' }">

            <form class="flex items-center gap-2" @submit.prevent="submitEdit">
                <input ref="input" type="text" class="w-full px-2 py-1 my-4 text-justify" v-model="text"
                    :class="isEditing ? 'border' : 'outline-none'" :readonly="!isEditing" />
                <Transition>
                    <div v-if="isEditing" class="flex gap-2">
                        <button type="submit" class="px-2 py-1 h-fit text-white rounded-lg bg-[#232931]">Update</button>
                        <button @click.prevent="cancel"
                            class="px-2 py-1 text-white bg-red-500 rounded-lg h-fit">Cancel</button>
                    </div>
                </Transition>
            </form>
        </div>
    </Card>
</template>



<style scoped>
.rating-display {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    overflow-x: hidden;
    position: absolute;
    top: -4vh;
    left: -2%;
    z-index: 10;
    width: 50vw;
    height: 4.5vw;
    margin: 0;
    overflow: hidden;
    color: black;
    pointer-events: none;
    transition-duration: 500ms;
}

.editing {
    top: 0;
    left: 0;
    height: 4.5vw;
    margin-top: 3rem;
    width: 100%;
}

.rating {
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    font-size: 1.2vw;
    background: #4ecca3;
    transition: all 0.2s ease;
}
</style>