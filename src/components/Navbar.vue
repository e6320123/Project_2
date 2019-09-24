<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">阿正大戲院</router-link>
      
      <!-- 窄頁面時 navbar右邊的摺疊按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar主要元素 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': this.$route.path == '/'}">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/news'}">
            <router-link class="nav-link" to="/news">最新消息</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/about'}">
            <router-link class="nav-link" to="/about">關於戲院</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/movie'}">
            <router-link class="nav-link" to="/movie">電影介紹</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/order'}">
            <router-link class="nav-link" to="/order">訂票</router-link>
          </li>
          <!-- 會員已登入的狀態下 顯示抽獎頁籤 -->
          <li class="nav-item" :class="{'active': this.$route.path == '/bonus'}" v-if="isLogin">
            <router-link class="nav-link" to="/bonus">抽獎</router-link>
          </li>
        </ul>
        <!-- 會員未登入的狀態下 顯示 會員登入 及 註冊 -->
        <ul class="navbar-nav ml-auto" v-if="!isLogin">
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#login">會員登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href data-toggle="modal" data-target="#register">註冊</a>
          </li>
        </ul>
        <!-- 會員已登入的狀態下 顯示 歡迎訊息 與 登出, 若為管理員登入 多出後臺管理 -->
        <ul class="navbar-nav ml-auto" v-if="isLogin">
          <li class="nav-item" :class="{'active': this.$route.path == '/user'}">
            <router-link class="nav-link" to="/user">{{ name }} 您好</router-link>
          </li>
          <li class="nav-item" :class="{'active': this.$route.path == '/backEnd'}" v-if="isManager">
            <router-link class="nav-link" to="/backEnd">後臺管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href @click="logout()">登出</a>
          </li>
        </ul>
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
      isManager: false
    }
  },
  mounted() { // 頁面載入後所做動作 -> 檢查是否在登入狀態
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('status')) { // 檢查是否在登入狀態
        this.isLogin = true;
        this.name = localStorage.getItem('userName');
        if (localStorage.getItem('account') == 'admin') {
          this.isManager = true;
        }
      }
    },
    getCookie() { // 登入帳密 與 註冊帳密比對 
      // 登入成功
      if ((localStorage.getItem('logAccount') == localStorage.getItem('account')) && (localStorage.getItem('logPassword') == localStorage.getItem('password'))) {
        // 設置登入狀態
        this.isLogin = true; 
        localStorage.setItem('status', 'login');
        this.name = localStorage.getItem('userName');
        // 是否為管理帳戶
        if (localStorage.getItem('account') == 'admin') {
          this.isManager = true;
        }
        this.$toasted.success('登入成功', {
          theme: 'bubble',
          duration: 3000
        });
      } else {
        // 登入失敗 清除登入帳密 告知使用者
        localStorage.removeItem("logAccount");
        localStorage.removeItem("logPassword");
        this.$toasted.success('登入失敗, 請檢查帳號或密碼是否有誤', {
          theme: 'bubble',
          duration: 3000
        });
      }
    },
    // 登出功能
    logout() {
      this.$toasted.success('已登出', {
        theme: 'bubble',
        duration: 3000
      });
      // 移除登入的帳密
      localStorage.removeItem("logAccount");
      localStorage.removeItem("logPassword");
      // localStorage.clear();
      // 狀態改成登出
      localStorage.removeItem('status'); 
      this.isLogin = false;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>