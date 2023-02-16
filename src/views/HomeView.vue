<script setup>
import Header from '@/components/Header.vue'
import ReviewsForm from '../components/ReviewsForm.vue';
</script>

<template>
  <section>
    <Header />

    <main class="w-full px-80">
      <ReviewsForm />
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