<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="http://fakeimg.pl/960x360/" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="http://fakeimg.pl/960x360/" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="http://fakeimg.pl/960x360/" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <h1 class="text-center my-5">強檔電影</h1>
    <MovieCard :img-ar="imgAr"></MovieCard>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'home',
  components: {
    MovieCard
  },
  data() {
    return {
      imgAr: Array(4)
    }
  }
}
</script>
