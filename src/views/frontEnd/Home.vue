<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      data-interval="3500"
    >
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/home_1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../../assets/home_3.jpg" class="d-block w-100" alt="..." />
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

    <h1 class="text-center my-5">現正上映中</h1>
    <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->

    <!-- 阿正 UIkit 滑塊 start -->
    <div
      uk-slider="center: true; autoplay: true; autoplay-interval: 3000; index: 0"
      class="container"
    >
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-4@s uk-grid">
          <li v-for="(item, index) in releasedMovies" :key="index">
            <a
              href
              data-toggle="modal"
              data-target="#movieModal"
              @click.prevent="setMovieModal(item)"
            >
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-img-top">
                      <img :src="item.poster" class="w-100" alt />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>

    <!-- Modal Start -->
    <div class="modal fade" id="movieModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{ movieData.name }}</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <iframe
              style="margin-bottom:40px;"
              width="100%"
              height="315"
              :src="movieData.trailer"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <img
              :src="movieData.poster"
              class="card-img"
              alt="..."
              style="float:left;width:180px;height:270px;display:block;"
            />
            <div
              class="text"
              style="text-align:left; clear:both; margin-left:-200px; margin-top:20px;"
            >{{ movieData.info }}</div>
            <!-- <iframe
              width="100%"
              height="315"
              :src="movieData.trailer"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>-->

            <button
              type="button"
              class="btn btn-outline-success"
              disabled
              style="margin:0.5%;"
            >{{ movieData.rating }}</button>
            <button
              type="button"
              class="btn btn-outline-success"
              disabled
              style="margin:0.5%;"
            >{{ movieData.run_time }}</button>

            <p>{{ movieData.actor }}</p>
            <!--主演 :-->
            <p>{{ movieData.genre }}</p>
            <!--類型 :-->
            <p>{{ movieData.play_date }}</p>
            <!--上映日期 :-->

            <div>
              <!-- 時間:
              <ul>
                <li>
                  <button type="button" class="btn btn-outline-info">11:10</button>
                </li>
                <li>
                  <button type="button" class="btn btn-outline-info">15:20</button>
                </li>
                <li>
                  <button type="button" class="btn btn-outline-info">21:20</button>
                </li>
              </ul>-->
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
    <!-- 阿正 UIkit 滑塊 End-->
    <!-- <img src="..\..\assets\home_pic\cellphone.jpg"/>
    <img src="..\..\assets\home_pic\cup.png"/>-->

    <img src="..\..\assets\home_pic\line.png" id="line" />
  </div>
</template>

<script>
// @ is an alias to /src
// import MovieCard from '@/components/MovieCard.vue';

export default {
  // name: "home",
  components: {
    // MovieCard
  },
  data() {
    return {
      //  imgAr: Array(4),
      releasedMovies: {},
      movieData: {
        name: ""
      },
      backgroundColor: "#673AB7"
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      const _this = this;
      this.axios
        .get(`${this.$api}/movies/showMovies/released/1`)
        .then(response => {
          console.log(response.data);
          _this.releasedMovies = response.data;
        });
    },
    setMovieModal(movie) {
      this.movieData.poster = movie.poster;
      this.movieData.actor = movie.actor;
      this.movieData.info = movie.info;
      this.movieData.genre = movie.genre;
      this.movieData.play_date = movie.play_date;
      this.movieData.rating = movie.rating;
      this.movieData.run_time = movie.run_time;
      this.movieData.trailer = movie.trailer;
      this.movieData.name = movie.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.imgSmall img {
  width: 340px;
  height: 490px;
  /* width: auto;
  height: auto; 
  width: 100%;
  height:100%; */
}
.card-deck {
  margin-bottom: 100px;
}
.card {
  /* border: 1px solid; */
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}
.text {
  display: block;
  /* border:1px solid red; */
  margin: 30px;
  line-height: 70 px;
  padding-left: 200px;
}
iframe {
  margin-top: 20px;
}
ul {
  list-style-type: none;
}
li {
  display: block;
  float: left;
  margin: 10px;
}
.uk-position-center-left,
.uk-position-center-right {
  background-color: #becb01;
}
#line {
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
}
</style>
