<template>
  <div class="container">
    <Loading v-show="isLoading"></Loading>
    <h1 class="text-center my-5">訂票</h1>

    <div class="container" id="order">
      <ul class="nav nav-tabs nav-justified">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#ticketTime">票種/時刻選擇</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#meals">飲食選擇</a>
        </li>
      </ul>

      <div class="tab-content py-3">
        <div class="tab-pane fade active show" id="ticketTime">
          <form>
            <div class="form-group row">
              <label for="theater" class="col-md-2 text-center">
                <i class="fa fa-video-camera" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇戲院
              </label>
              <select name="theater" id="theater" disabled class="form-control col-md-10">
                <option value="0">中佑大戲院</option>
              </select>
              <input type="hidden" name="theater" value="0" />
            </div>

            <div class="form-group row">
              <label for="movies" class="col-md-2 text-center p-1">
                <i class="fa fa-film" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇電影
              </label>
              <select
                name="movies"
                id="movies"
                v-on:change="loadMovieDay"
                class="form-control col-md-10"
              >
                <option
                  id="index"
                  v-bind:selected="index==movie_index"
                  v-bind:value="index"
                  v-for="(movies,index) in movies"
                  :key="index"
                >{{movies.name}}</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="days" class="col-md-2 text-center p-1">
                <i class="fa fa-clock-o" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇日期
              </label>
              <select
                name="days"
                id="days"
                v-on:change="loadMovieTime"
                class="form-control col-md-10"
              >
                <option
                  v-bind:value="index"
                  v-bind:selected="index==day_index"
                  v-for="(day,index) in days"
                  :key="index"
                >{{day.date}} ({{day.weekday}})</option>
              </select>
            </div>

            <div class="form-group row">
              <label for="times" class="col-md-2 text-center p-1">
                <i class="fa fa-location-arrow" style="font-size:1.5em" aria-hidden="true"></i>&emsp;選擇場次
              </label>
              <select name="times" id="times" class="form-control col-md-10">
                <option
                  v-bind:value="index"
                  v-bind:selected="index==time_index"
                  v-for="(time,index) in times"
                  :key="index"
                >{{time.time}}</option>
              </select>
            </div>
          </form>

            <hr />
            <div>
              <div class="row">
                <div class="col-md-3" v-for="(ticket,index) in tickets" :key="index">
                  <div class="card border-secondary my-2">
                    <div class="card-header bg-light text-center text-light"><h4 class="card-title">票種：{{ticket.name}}</h4></div>
                    <div class="card-body text-secondary ">
                      <!-- <h5 class="card-title">票種：{{ticket.name}}</h5> -->
                      <h5>單價：{{ticket.price}}</h5>
                      <h5>總計：{{ticket.price *ticketsNum[index]}}</h5>
                    </div>
                      <div class="d-flex card-footer">
                        <div class="bg-secondary border-danger">
                        <div class="input-group">
                          <div class="input-group-btn">
                            <button class="btn btn-danger btn-number" v-on:click="minusTickets(index)">
                            <i
                              class="fa fa-minus p-1"
                              style="cursor:pointer;"
                              aria-hidden="true"
                            ></i>

                            </button>
                          </div>
                          <input
                            type="text"
                            pattern="[0-5]"
                            class="form-control text-center border-bottom-0"
                            readonly
                            v-model="ticketsNum[index]"
                          />
                          <div class="input-group-btn">
                            <button class="btn btn-success" v-on:click="plusTickets(index)">
                            <i
                              class="fa fa-plus p-1"
                              style="cursor:pointer;"
                              aria-hidden="true"
                            ></i>
                            </button>
                          </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="tab-pane fade" id="meals">
          <div class="row">
            <div class="col-md-3" v-for="(meal,index) in meals" :key="index">
              <div class="card border-secondary my-2">
                <div class="card-header bg-light text-center text-light"><h4 class="card-title">{{meal.name}}({{meal.size}})</h4></div>
                <div class="card-body text-secondary">
                  <img :src="meal.img_url" class="card-img-top" alt />
                  <h5 class="mb-0">單價：{{meal.price}}</h5>
                  <h5 class="my-2">總計：{{meal.price *mealsNum[index]}}</h5>
                </div>
                <div class="d-flex card-footer">
                  <div class="bg-secondary border-danger">
                  <div class="input-group">
                    <div class="input-group-btn">
                    <button class="btn btn-danger btn-number" v-on:click="minusMeals(index)">
                            <i
                              class="fa fa-minus p-1"
                              style="cursor:pointer;"
                              aria-hidden="true"
                            ></i>

                            </button>
                    </div>
                    <input
                      type="text"
                      pattern="[0-5]"
                      class="form-control text-center border-bottom-0"
                      readonly
                      v-model="mealsNum[index]"
                    />
                    <div class="input-group-btn">
                    <button class="btn btn-success" v-on:click="plusMeals(index)">
                            <i
                              class="fa fa-plus p-1"
                              style="cursor:pointer;"
                              aria-hidden="true"
                            ></i>
                            </button>
                    </div>
                    </div>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <button
            v-on:click="setProp"
            class="btn btn-success btn-lg btn-block"
            v-bind:disabled="!showNext"
          >去選座位</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loading from '@/components/Loading.vue'

export default {
  components: {Loading},
  name: "order",
  data() {
    return {
      movies: [
        {
          movie_id: "0",
          movieName: "返校"
        },
        {
          movie_id: "1",
          movieName: "天氣之子"
        }
      ],
      days: [
        {
          day: "2019/10/1 (二)"
        },
        {
          day: "2019/10/2 (三)"
        },
        {
          day: "2019/10/3 (四)"
        }
      ],
      times: [
        {
          time: "10:00"
        },
        {
          time: "13:00"
        },
        {
          time: "15:00"
        },
        {
          time: "19:00"
        }
      ],
      tickets: [],
      ticketsNum: {},
      meals: {
        爆米花: 0,
        可樂: 0
      },
      mealsNum: {},
      showNext: false,
      isLoading: true,
      movie_index: "",
      init_movie_index:"",
      day_index: "0",
      time_index: "0",
      tickets_index: {},
      meals_index: {},
      movieSession:{},
      movieIndexSession:{}
    };
  },
  mounted() {
    if(sessionStorage.movieIndex){
      this.movieIndexSession = JSON.parse(sessionStorage.movieIndex);
      this.init_movie_index = this.movieIndexSession.movie_index;
      this.movie_index=this.movieIndexSession.movie_index;
      this.day_index = this.movieIndexSession.day_index;
      this.time_index = this.movieIndexSession.time_index;
    }
    // if (sessionStorage.movie_index) {
    //   this.init_movie_index = sessionStorage.movie_index;
    //   this.movie_index=sessionStorage.movie_index;
    // }
    this.loadMovies();
    this.loadTickets();
    this.loadMeals();
     
    // if (sessionStorage.day_index) this.day_index = sessionStorage.day_index;
    // if (sessionStorage.time_index) this.time_index = sessionStorage.time_index;
    if(sessionStorage.movie){
      this.movieSession = JSON.parse(sessionStorage.movie);
      this.tickets_index = JSON.parse(this.movieSession.ticketsNum);
      this.meals_index = JSON.parse(this.movieSession.mealsNum);
      // console.log(this.tickets_index);
    }
    // if (sessionStorage.ticketsNum)
    //   this.tickets_index = JSON.parse(sessionStorage.ticketsNum);
    // if (sessionStorage.mealsNum)
    //   this.meals_index = JSON.parse(sessionStorage.mealsNum);
    
  },
  methods: {
    loadMovies() {

      this.axios.get(`${this.$api}/order/getMovies`).then(response => {
        // console.log(response.data);
        this.movies = response.data;
        this.loadMovieDay();
      });
    },
    loadMovieDay() { 
      this.axios
        .get(
          `${this.$api}/order/getMovieDay/${
            this.movies[
              this.init_movie_index?this.init_movie_index:
              document.getElementById("movies").value
            ]["encoded_id"]
          }`
        )
        .then(response => {
          if(this.init_movie_index)
          this.init_movie_index='';
          // console.log(response.data);
          this.days = response.data;
          this.loadMovieTime();
        });
    },
    loadMovieTime() {
      
      this.axios
        .get(
          `${this.$api}/order/getMovieTime/${
            this.movies[document.getElementById("movies").value]["encoded_id"]
          }`
        )
        .then(response => {
          // console.log(this.movies);
          this.times = response.data;
          this.isLoading = false;
        });
    },
    loadTickets() {
      this.axios.get(`${this.$api}/order/getTickets`).then(response => {
        this.tickets = response.data;
        for (var i = 0; i < this.tickets.length; i++)
          sessionStorage.movie
            ? this.$set(this.ticketsNum, i, this.tickets_index[i])
            : this.$set(this.ticketsNum, i, 0);
      });
    },
    loadMeals() {
      this.axios.get(`${this.$api}/order/getMeals`).then(response => {
        this.meals = response.data;
        // console.log(this.meals);
        for (var i = 0; i < this.meals.length; i++) {
          sessionStorage.movie
            ? this.$set(this.mealsNum, i, this.meals_index[i])
            : this.$set(this.mealsNum, i, 0);
        }
      });
    },
    loadScreeningID(){
      // console.log(this.days[document.getElementById("days").value]["date"]);
      this.axios.get(`${this.$api}/order/getScreeningID/
      ${this.movies[document.getElementById("movies").value]["encoded_id"]}/
      ${this.times[document.getElementById("times").value]["time"]}/
      ${this.days[document.getElementById("days").value]["date"]}
      `)
      .then(response =>{
        if(response.data){
          sessionStorage.setItem("screeningID",response.data[0].id);
          sessionStorage.setItem("courtsID",response.data[0].courts_id);
        }
      this.$router.push("/order/chooseSeat");     //確保先存screeningID才跳轉

        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      });
    },
    minusTickets(index) {
      if (this.ticketsNum[index] > 0) this.ticketsNum[index] -= 1;
      else this.ticketsNum[index] = 0;
    },
    plusTickets(index) {
      if (this.ticketsTotal < 5) this.ticketsNum[index] += 1;
      else this.ticketsNum[index] = this.ticketsNum[index];
       
    },
    minusMeals(index) {
      if (this.mealsNum[index] > 0) this.mealsNum[index] -= 1;
      else this.mealsNum[index] = 0;
    },
    plusMeals(index) {
      if (this.mealsNum[index] < 10) this.mealsNum[index] += 1;
      else this.mealsNum[index] = 10;
    },

  setProp() {
      // sessionStorage.setItem(
      //   "movie_index",
      //   document.getElementById("movies").value
      // );
      // sessionStorage.setItem(
      //   "day_index",
      //   document.getElementById("days").value
      // );
      // sessionStorage.setItem(
      //   "time_index",
      //   document.getElementById("times").value
      // );
      this.movieIndexSession["movie_index"]=document.getElementById("movies").value;
      this.movieIndexSession["day_index"]=document.getElementById("days").value;
      this.movieIndexSession["time_index"]=document.getElementById("times").value;
      sessionStorage.setItem("movieIndex",JSON.stringify(this.movieIndexSession));

      var e = document.getElementById("movies"); 
      // sessionStorage.setItem("moviesName",e.options[e.selectedIndex].text);
      this.movieSession["moviesName"]=e.options[e.selectedIndex].text;

      e = document.getElementById("days"); 
      // sessionStorage.setItem("moviesDay",e.options[e.selectedIndex].text);
      this.movieSession["moviesDay"]=e.options[e.selectedIndex].text;

      e = document.getElementById("times"); 
      // sessionStorage.setItem("moviesTime",e.options[e.selectedIndex].text);
      this.movieSession["moviesTime"]=e.options[e.selectedIndex].text;

      

      // sessionStorage.setItem("ticketsNum", JSON.stringify(this.ticketsNum));
      // sessionStorage.setItem("mealsNum",JSON.stringify(this.mealsNum));

      var ticketsNameNum = {};
      for(var i = 0;i<Object.keys(this.tickets).length;i++){
        this.$set(ticketsNameNum, this.tickets[i]["name"], this.ticketsNum[i]);
      }
      // sessionStorage.setItem("ticketsNameNum",JSON.stringify(ticketsNameNum));

      var mealsNameNum = {};
      for(var i = 0;i<Object.keys(this.meals).length;i++){
        this.$set(mealsNameNum, `${this.meals[i]['name']}_` + `${this.meals[i]['size']}`, this.mealsNum[i]);
      }
      // sessionStorage.setItem("mealsNameNum",JSON.stringify(mealsNameNum));
      // sessionStorage.setItem("totalTicketsNum",this.ticketsTotal);

      this.movieSession["ticketsNum"]=JSON.stringify(this.ticketsNum);
      this.movieSession["mealsNum"]=JSON.stringify(this.mealsNum);
      
      this.movieSession["ticketsNameNum"]=JSON.stringify(ticketsNameNum);
      this.movieSession["mealsNameNum"]=JSON.stringify(mealsNameNum);
      this.movieSession["totalTicketsNum"]=this.ticketsTotal;
      // console.log(this.movieSession);
      sessionStorage.setItem("movie",JSON.stringify(this.movieSession));
     this.loadScreeningID();
      
    }
  },
  computed: {
    ticketsTotal: function() {
      let total = 0;
      for (var i = 0; i < Object.keys(this.ticketsNum).length; i++)
        total += this.ticketsNum[i];
      return total;
    }
  },
  watch: {
    ticketsTotal: function() {
      if (this.ticketsTotal > 0) this.showNext = true;
      else if (this.ticketsTotal == 0) this.showNext = false;
    }
  }
};
</script>

<style scoped>
select {
  text-align-last: center;
}

.v-hidden {
  visibility: hidden;
}


</style>