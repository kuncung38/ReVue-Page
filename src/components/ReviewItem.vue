<script setup>
import { ref } from 'vue';
import Card from './Shared/Card.vue';

const props = defineProps(['review'])

const isEditing = ref(false)
const input = ref(null)


const toEdit = () => {
    isEditing.value = true
    input.value.focus()
}

</script>

<template>
    <Card class="justify-start" style="flex-direction: column;" :id="`review-${review.id}`">
        <div class="absolute flex flex-row items-center justify-center gap-4 top-2 right-2">
            <button @click="toEdit">
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

        <div class="rating-display" :class="isEditing ? 'static' : 'absolute'">
            {{ review.rating }}
        </div>

        <div class="w-full mt-4">
            <form class="flex gap-2 items-center">
                <input ref="input" type="text" class="px-2 py-1 my-4 text-justify w-full" :value="review.text"
                    :class="isEditing ? 'outline-1 outline' : 'pointer-events-none'" />
                <Transition>
                    <div v-if="isEditing" class="flex gap-2">
                        <button type="submit" class="px-2 py-1 h-fit text-white rounded-lg bg-[#232931]">Update</button>
                        <button @click.prevent="() => { isEditing = false }"
                            class="px-2 py-1 h-fit text-white rounded-lg bg-red-500">Cancel</button>
                    </div>
                </Transition>
            </form>
        </div>
    </Card>
</template>



<style scoped>
.rating-display {
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
    border-radius: 50%;
    transition-duration: 200ms;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>