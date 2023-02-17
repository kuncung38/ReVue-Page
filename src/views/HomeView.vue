<script setup>
import Header from '@/components/Header.vue'
import ReviewsForm from '../components/ReviewsForm.vue';
import ReviewStats from '../components/ReviewStats.vue';
import ReviewList from '../components/ReviewList.vue'
</script>

<template>
  <section>
    <Header />

    <main class="w-full mt-16 px-[15vw] flex flex-col gap-4">
      <ReviewsForm />

      <ReviewStats />

      <ReviewList />
    </main>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>