<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 側邊攔 -->
      <div class="col-12 col-md-3 col-lg-2 my-5 py-0">
        <div class="list-group shadow">
          <div class="accordion" id="dashboard">
            <!-- 最新消息 -->
            <router-link
              to="/backEnd"
              class="list-group-item text-white"
              :class="{'bg-cy': checkRouter('/backEnd'), 'bg-cy-deep': !checkRouter('/backEnd')}"
            >
              <i class="fa fa-newspaper-o" aria-hidden="true"></i> 所有消息
            </router-link>

            <!-- 電影 -->
            <a
              href="#movies"
              class="list-group-item dropdown-toggle bg-cy-deep text-white"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="movies"
            >
              <i class="fa fa-video-camera" aria-hidden="true"></i> 電影
            </a>
            <div
              class="collapse"
              :class="{'show': checkRouter('/backEnd/moviesManage', true)}"
              id="movies"
              aria-labelledby="movies"
              data-parent="#dashboard"
            >
              <ul class="list-group list-group-flush">
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/moviesManage')}">
                  <router-link
                    to="/backEnd/moviesManage"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage')}"
                  >所有電影</router-link>
                </li>
                <li class="pl-5" :class="{'bg-cy': checkRouter('/backEnd/moviesManage/released')}">
                  <router-link
                    to="/backEnd/moviesManage/released"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage/released')}"
                  >現正上映</router-link>
                </li>
                <li
                  class="pl-5"
                  :class="{'bg-cy': checkRouter('/backEnd/moviesManage/comingSoon')}"
                >
                  <router-link
                    to="/backEnd/moviesManage/comingSoon"
                    class="py-2"
                    :class="{'text-white': checkRouter('/backEnd/moviesManage/comingSoon')}"
                  >即將上映</router-link>
                </li>
              </ul>
            </div>

            <!-- 餐點 -->
            <router-link
              to="/backEnd/mealsManage"
              class="list-group-item text-white"
              :class="{'bg-cy': checkRouter('/backEnd/mealsManage'), 'bg-cy-deep': !checkRouter('/backEnd/mealsManage')}"
            >
              <i class="fa fa-cutlery" aria-hidden="true"></i>&nbsp; 餐點
            </router-link>

            <!-- 折扣 -->
            <router-link
              to="/backEnd/discountManage"
              class="list-group-item text-white"
              :class="{'bg-cy': checkRouter('/backEnd/discountManage'), 'bg-cy-deep': !checkRouter('/backEnd/discountManage')}"
            >
              <i class="fa fa-percent" aria-hidden="true"></i> &nbsp;折扣
            </router-link>

            <!-- 報表 -->
            <router-link
              to="/backEnd/report"
              class="list-group-item text-white"
              :class="{'bg-cy': checkRouter('/backEnd/report'), 'bg-cy-deep': !checkRouter('/backEnd/report')}"
            >
              <i class="fa fa-bar-chart" aria-hidden="true"></i> 報表
            </router-link>
          </div>
        </div>

        <!-- 一鍵爬蟲 -->
        <button class="btn btn-secondary mt-3" v-bind:disabled="isDisabled" @click="crawl">
          借鑑電影資料
          <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
        </button>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      text: String,
      pageName: String,
      isDisabled: false
    }
  },
  methods: {
    crawl() {
      this.isDisabled = true,
      this.$toasted.info("借鑑電影資料中", {
        theme: "bubble"
      });
      this.axios.get(`${this.$api}/crawl.php`).then((response) => {
        this.isDisabled = false;
        this.$toasted.clear();
        this.$toasted.success("借鑑完畢", {
          theme: "bubble",
          duration: 2000
        });
      })
    },
    checkRouter(router, show = false) {
      if (show) {
        let result = this.$route.path.indexOf(`${router}`) >= 0 ? true : false;
        return result;
      }
      let result = this.$route.path == router ? true : false;
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none;
    a {
      display: block;
    }
    a:hover {
      text-decoration: none;
      color: #eee;
      background-color: #becb01 !important;
    }
    a:active {
      color: #eee;
    }
  }
  li:hover {
    background-color: #becb01;
  }
}

.uk-nav-sub {
  li {
    a {
      font-size: 1.5em;
    }
  }
}

.list-group-item {
  text-decoration: none;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>