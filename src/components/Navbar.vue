<template>
  <div>
    <router-link class="navbar-brand text-center d-block w-100" to="/">
      <img src="../assets/cy-cinemas-ok.png" height="100%" alt />
    </router-link>
    <nav class="navbar navbar-expand-lg navbar-dark bg-cy-deep" uk-sticky>
      <!-- 窄頁面時 navbar右邊的摺疊按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar主要元素 -->
      <div class="collapse navbar-collapse my-container" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-2 mr-auto">
          <li class="nav-item" :class="{'active': this.$route.path == '/'}">
            <router-link
              class="nav-link"
              to="/"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >首頁</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/news'}">
            <router-link
              class="nav-link"
              to="/news"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >活動&amp;消息</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/about'}">
            <router-link
              class="nav-link"
              to="/about"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >關於戲院</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/movie'}">
            <router-link
              class="nav-link"
              to="/movie"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >電影介紹</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path.indexOf('/order') >= 0}">
            <router-link
              class="nav-link"
              to="/order"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >訂票</router-link>
          </li>
          <!-- 會員已登入的狀態下 顯示抽獎頁籤 -->
          <li
            class="nav-item mr-auto"
            :class="{'active': this.$route.path == '/bonus'}"
            v-if="isLogin"
          >
            <router-link
              class="nav-link"
              to="/bonus"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >抽獎</router-link>
          </li>
        </ul>
        <!-- 會員未登入的狀態下 顯示 會員登入 及 註冊 -->
        <div class="navbar-nav" v-if="!isLogin">
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#login">會員登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#register">註冊</a>
          </li>
        </div>
        <!-- 會員已登入的狀態下 顯示 歡迎訊息 與 登出, 若為管理員登入 多出後臺管理 -->
        <div class="navbar-nav" v-if="isLogin">
          <li class="nav-item" :class="{'active': this.$route.path.indexOf('/user') >= 0}">
            <router-link
              class="nav-link"
              to="/user"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            ><i class="fa fa-user" aria-hidden="true"></i> {{ name }} 您好</router-link>
          </li>
          <li
            class="nav-item"
            :class="{'active': this.$route.path.indexOf('/backEnd') >= 0}"
            v-if="isManager"
          >
            <router-link
              class="nav-link"
              to="/backEnd"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <i class="fa fa-tachometer" aria-hidden="true"></i> 後臺管理
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href
              @click="logout()"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >登出</a>
          </li>
        </div>
      </div>
      <div class="d-flex">
        <div class="alert alert-warning text-center align-self-center mb-0" v-show="isDiscount" role="alert">
          <div class="uk-grid-small uk-child-width-auto align-self-center" uk-grid v-bind:uk-countdown="discountTime">
              <div class="align-self-center row">
                <span class="countDownTitle"><i class="fa fa-bolt" aria-hidden="true"></i>{{discountDesc}}{{discount}}折倒數：</span>
                  <div class="align-self-center">
                      <div class="uk-countdown-number uk-countdown-days" ref="day"></div>
                      <!-- <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div> -->
                  </div>
                  <div class="uk-countdown-separator align-self-center">:</div>
                  <div class="align-self-center">
                      <div class="uk-countdown-number uk-countdown-hours" ref="hour"></div>
                      <!-- <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div> -->
                  </div>
                  <div class="uk-countdown-separator align-self-center">:</div>
                  <div class="align-self-center">
                      <div class="uk-countdown-number uk-countdown-minutes" ref="minute"></div>
                      <!-- <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div> -->
                  </div>
                  <div class="uk-countdown-separator align-self-center">:</div>
                  <div class="align-self-center">
                      <div class="uk-countdown-number uk-countdown-seconds" ref="second"></div>
                      <!-- <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div> -->
                  </div>
              </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- login -->
    <LoginForm @setcookie="getCookie()"></LoginForm>

    <!-- sign up -->
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isLogin: false,
      name: '',
      isManager: false,
      isDiscount:0,
      discountTime:'',
      discountLastTime:1,
      discountInterval:'',
      discountDesc:'',
      discount:''
    }
  },
  mounted() { // 頁面載入後所做動作 -> 檢查是否在登入狀態
    this.checkLogin();
    this.getNowDiscountData();  //剛載入頁面抓一次discount
  },
  updated(){
      this.$nextTick(() => {
            this.getNowDiscountData();  //由於導覽列常駐，跳轉頁面時呼叫此函數
        });
  },
  methods: {
    discountCountDown(){
      var _this = this;
      if(this.discountInterval){    //如果有interval先清掉重跑
        clearInterval(this.discountInterval)
      }
      this.discountInterval = setInterval(function(){
        _this.discountLastTime = 
        parseInt(_this.$refs.day.innerText) + 
        parseInt(_this.$refs.hour.innerText) + 
        parseInt(_this.$refs.minute.innerText) + 
        parseInt(_this.$refs.second.innerText); 

        if(_this.discountLastTime<=1){    //所有數字合起來為0就代表沒折扣了，再去抓一次資料庫
          clearInterval(_this.discountInterval);
          _this.getNowDiscountData();
        }
      },1000);      
    },
    getNowDiscountData(){
      this.axios.get(`${this.$api}/discount/getNowDiscountData`).then(response=>{
        if(response.data.length){
          this.discount = response.data[0].discount;    //抓第一筆折扣
          this.discountDesc = response.data[0].description;
          console.log(response.data);
          this.discountTime ="date: " + response.data[0].end_time +"+08:00";
          this.discountCountDown();       //重新倒數計時
          this.isDiscount = 1;    //有折扣才顯示
        }else{
          this.discountTime = '';
          this.isDiscount = 0;
        }
      })
    },
    checkLogin() {
      if (sessionStorage.getItem('status')) { // 檢查是否在登入狀態
        this.isLogin = true;
        this.name = sessionStorage.getItem('nowName');
        if (sessionStorage.getItem('nowAcc') == 'admin') {
          this.isManager = true;
          this.name = sessionStorage.getItem('nowName');
        }
      }
    },
    getCookie() { // 登入驗證
      var logAccount = sessionStorage.getItem('logAccount'); // 取得登入帳號
      var logPassword = sessionStorage.getItem('logPassword'); // 取得登入密碼
      var loginData = new FormData();
      var _this = this;
      loginData.append('account', logAccount);
      loginData.append('password', logPassword);
      // http://localhost/CYcinemasBackEnd/members/login
      // https://cy-cinemas.ml/members/login
      this.axios.post(`${this.$api}/members/login`, loginData)
        .then(function (response) {
          var result = response.data; // 有此會員: 回傳姓名 帳號 信箱 電話, 無此會員: 回傳'Failed'
          if (result == 'Failed') {
            _this.$toasted.error("登入失敗，請確認帳號密碼是否有誤", {
              theme: 'bubble',
              duration: 3000
            });
          } else {
            // 登入成功 判斷是否為管理員
            if (result[0].account == 'admin') {
              _this.$toasted.success("管理員登入成功", {
                theme: 'bubble',
                duration: 3000
              });
              // 在登入狀態 且為管理員 紀錄登入狀態 與帳號 姓名 信箱 手機
              _this.isLogin = true;
              _this.isManager = true;
              _this.name = result[0].name;
              sessionStorage.setItem("status", "login");
              sessionStorage.setItem("nowAcc", result[0].account);
              sessionStorage.setItem("nowName", result[0].name);
              sessionStorage.setItem("nowEmail", result[0].email);
              sessionStorage.setItem("nowPhone", result[0].phone);
            } else {
              _this.$toasted.success("會員登入成功", {
                theme: 'bubble',
                duration: 3000
              });
              // 在登入狀態 紀錄登入狀態 與帳號 姓名 信箱 手機
              _this.isLogin = true;
              _this.name = result[0].name;
              sessionStorage.setItem("status", "login");
              sessionStorage.setItem("nowAcc", result[0].account);
              sessionStorage.setItem("nowName", result[0].name);
              sessionStorage.setItem("nowEmail", result[0].email);
              sessionStorage.setItem("nowPhone", result[0].phone);
            }
            //刷新Detail.vue頁面 
            var array = window.location.href.split("/"); 
            if (array[array.length-1] =="detail"||array[array.length-1] =="Detail")
              history.go(0);
            
          }
          sessionStorage.removeItem('logAccount');
          sessionStorage.removeItem('logPassword');
        }).catch(function () {
          _this.$toasted.error("無法連線，請確認網路連線狀態", {
            theme: 'bubble',
            duration: 3000
          });
        });
    },
    // 登出功能
    logout() {
      this.$toasted.success('已登出', {
        theme: 'bubble',
        duration: 3000
      });
      // 移除目前登入的帳號 姓名 信箱 手機
      sessionStorage.removeItem("nowAcc");
      sessionStorage.removeItem("nowName");
      sessionStorage.removeItem("nowEmail");
      sessionStorage.removeItem("nowPhone");
      this.name = '';
      // 狀態改成登出
      sessionStorage.removeItem('status');
      this.isLogin = false;
      this.isManager = false;
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 3px solid #becb01;
}
.countDownTitle{
  font-size:2.3vh;
  color:crimson;
}
.uk-countdown-number{
  font-size:4vh;
  color:red;
}
.uk-countdown-separator{
  font-size:4vh;
  color:red;
}

@media (min-width: 992px) {
  .my-container {
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
