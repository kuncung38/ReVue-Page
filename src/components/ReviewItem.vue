<script setup>
import Card from './Shared/Card.vue';

const props = defineProps(['review'])

</script>

<template>
    <Card class="justify-start" style="flex-direction: row;" :id="`review-${review.id}`">
        <div class="rounded-full rating-display">
            {{ review.rating }}
        </div>

        <div class="absolute flex flex-row items-center justify-center gap-4 top-2 right-2">
            <button>
                <span class="font-semibold material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button>
                <span class="font-semibold material-symbols-outlined">
                    close
                </span>
            </button>
        </div>


        <div>
            <p class="p-8 text-justify">
                {{ review.text }}
            </p>
        </div>
    </Card>
</template>



<style scoped>
.rating-display {
    position: absolute;
    top: -1rem;
    left: -2%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4vw;
    height: 4vw;
    font-size: 1.2vw;
    background: #4ecca3;
    color: white;
    cursor: pointer;
    transition-duration: 200ms;

}
</style>