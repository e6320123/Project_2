<template>
  <div class="container">
    <h1 class="text-center my-5">本周上映</h1>
    <div class="row">
      <MovieCard :img-ar="imgAr"></MovieCard>
    </div>
    <h1 class="text-center my-5">即將上映</h1>
    <div class="row">
      <MovieCard :img-ar="imgAr"></MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
  components: {
    MovieCard
  },
  data() {
    return {
      imgAr: Array(8)
    }
  }
}
</script>