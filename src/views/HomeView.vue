<script setup>
import Header from '@/components/Header.vue'
import ReviewsForm from '../components/ReviewsForm.vue';
import ReviewStats from '../components/ReviewStats.vue';
import ReviewList from '../components/ReviewList.vue'
</script>

<template>
  <section>
    <Header />

    <main class="w-full mt-16 px-[15vw]">
      <div class="flex flex-col max-w-5xl gap-8">
        <ReviewsForm />

        <ReviewStats />

        <ReviewList />
      </div>
    </main>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>