<template>
  <div class="container">
    <h1 class="text-center my-5">本周上映</h1>
    <div class="row">
      <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->
      <div
        class="card mb-3 col-12 col-6"
        style="max-width: 540px;"
        v-for="(item, index) in releasedMovies"
        :key="index"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a
              href="#"
              data-toggle="modal"
              data-target="#myModal"
              @click.prevent="setMovieModal(item)"
            >
              <img :src="item.poster" class="card-img" alt="..." />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a
                href="#"
                data-toggle="modal"
                data-target="#myModal"
                @click.prevent="setMovieModal(item)"
              >
                <h5 class="card-title" style="font-size:25px;">{{item.name}}</h5>
              </a>
              <p class="card-text text-truncate" style="display:block;">{{item.info}}</p>
              <p class="card-text">
                <select class="custom-select custom-select-lg mb-3" v-model="dayOp[`day${index}`]">
                  <option value>時間</option>
                  <option
                    :value="dayIndex"
                    v-for="(dayItem, dayIndex) in item.day"
                    :key="dayIndex"
                  >{{ dayItem.weekday }}, {{ dayItem.date }}</option>
                </select>
                <select
                  class="custom-select custom-select-lg mb-3"
                  v-model="timeOp[`time${index}`]"
                >
                  <option value>場次</option>
                  <option
                    :value="timeIndex"
                    v-for="(timeItem, timeIndex) in item.time"
                    :key="timeIndex"
                  >{{ timeItem.time }}</option>
                </select>

                <button
                  type="submit"
                  class="btn btn-primary"
                  style="margin-left:70%;"
                  @click.prevent="createItem(index)"
                >訂票</button>
                <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
              </p>
            </div>
          </div>
        </div>
      </div>​
      <!--modal開始-->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{movieData.name}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                :src="movieData.trailer"
                style="margin-bottom:20px;"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <img
                :src="movieData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text" style="display:block;">{{movieData.info}}</div>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.rating}}</button>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{movieData.run_time}}</button>

              <p>{{movieData.actor}}</p>
              <!--主要演員： -->
              <p>{{movieData.genre}}</p>
              <!--影片類型：-->
              <p>{{movieData.play_date}}</p>
              <!--上映日期：-->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!--modal結束-->
    </div>
    <h1 class="text-center my-5">即將上映</h1>
    <div class="row">
      <div
        class="card mb-3 col-12 col-6"
        style="max-width: 540px;"
        v-for="(page, index) in comingSoonPages"
        :key="index"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a
              href="#"
              data-toggle="modal"
              data-target="#myModal_1"
              @click.prevent="setPageModal(page)"
            >
              <img :src="page.poster" class="card-img" alt="..." />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a
                href="#"
                data-toggle="modal"
                data-target="#myModal_1"
                @click.prevent="setPageModal(page)"
              >
                <h5 class="card-title" style="font-size:30px">{{page.name}}</h5>
              </a>
              <p class="card-text text-truncate" style="display:block;">{{page.info}}</p>
              <p class="card-text">
                <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--modal開始-->
      <div class="modal fade" id="myModal_1" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{{pageData.name}}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                :src="pageData.trailer"
                style="margin-bottom:20px;"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <img
                :src="pageData.poster"
                class="card-img"
                alt="..."
                style="float:left;width:180px;height:270px;"
              />
              <div class="text" style="display:block;">{{pageData.info}}</div>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{pageData.rating}}</button>
              <button
                type="button"
                class="btn btn-outline-success"
                disabled
                style="margin:0.5%;"
              >{{pageData.run_time}}</button>

              <p>{{pageData.actor}}</p>
              <!--主要演員：-->
              <p>{{pageData.genre}}</p>
              <!--影片類型：-->
              <p>{{pageData.play_date}}</p>
              <!--上映日期：-->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!--modal結束-->
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
export default {
  components: {
    Loading
  },
  data() {
    return {
      releasedMovies: {},
      movieData: {
        name: ""
      },
      item: {},
      poster: "",
      trailer: "",
      comingSoonPages: {},
      pageData: {
        name: ""
      },
      dayOp: {},
      timeOp: {},
      dayIndex: "",
      timeIndex: "",
      setItem: {},
      isLoading: true
    };
  },
  watch: {
    releasedMovies(val) {
      if (val != '') {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.setMovies();
    this.getPages();
  },
  methods: {
    async setMovies() {
      let movies = await this.getMovies();
      for (let i = 0; i <= movies.data.length; i++) {
        try {
          this.dayOp[`day${i}`] = '';
          let day = await this.getMovieDay(movies.data[i].encoded_id);
          movies.data[i].day = day;
          this.timeOp[`time${i}`] = '';
          let time = await this.getMovieTime(movies.data[i].encoded_id);
          movies.data[i].time = time;
        } catch (err) {
          // console.log(err);
        }
      }
      for (let i = 0; i < movies.data.length; i++) {
        this.dayOp[`day${i}`] = '';
      }
      this.releasedMovies = movies.data;

    },
    getMovies() {
      return new Promise((resolve, reject) => {
        this.axios
          .get(`${this.$api}/movies/showMovies/released/1`)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
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
    },
    getPages() {
      const _this = this;
      this.axios
        .get(`${this.$api}/movies/showMovies/comingSoon/1`)
        .then(response => {
          _this.comingSoonPages = response.data;
        });
    },
    setPageModal(page) {
      this.pageData.poster = page.poster;
      this.pageData.actor = page.actor;
      this.pageData.info = page.info;
      this.pageData.genre = page.genre;
      this.pageData.play_date = page.play_date;
      this.pageData.rating = page.rating;
      this.pageData.run_time = page.run_time;
      this.pageData.trailer = page.trailer;
      this.pageData.name = page.name;
    },
    getMovieDay(id) {
      return new Promise((resolve, reject) => {
        this.axios.get(`${this.$api}/order/getMovieDay/${id}`).then(response => {
          console.log("getMovieDay");
          console.log(response.data);
          resolve(response.data)
        });
      }).catch(error => {
        reject(error);
      });
    },
    getMovieTime(id) {
      return new Promise((resolve, reject) => {
        this.axios.get(`${this.$api}/order/getMovieTime/${id}`).then(response => {
          console.log("getMovieTime");
          console.log(response.data);
          resolve(response.data);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 將時間和場次存入 sessionStorage
    createItem(index) {
      let movieIndex = {
        movie_index: index,
        day_index: this.dayOp[`day${index}`],
        time_index: this.timeOp[`time${index}`]
      };
      sessionStorage.setItem('movieIndex', JSON.stringify(movieIndex));
      this.$router.push("/order");
    }
  }
};
</script>
<style scoped>
.card-img {
  margin-right: 10px;
}
.card {
  margin-right: 10px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;
}
</style>
