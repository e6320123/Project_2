<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-12 mt-5">
        <div class="list-group">
          <router-link
            to="/user"
            class="list-group-item list-group-item-action" style="font-family: Microsoft JhengHei;"
            :class="{'active': this.$route.path == '/user'}"
          ><i class="fa fa-address-card-o" aria-hidden="true"></i> 會員資料</router-link>
          <router-link
            to="/user/userRecord"
            class="list-group-item list-group-item-action" style="font-family: Microsoft JhengHei;"
            :class="{'active': this.$route.path == '/user/userRecord'}"
          ><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;消費紀錄</router-link>
          <router-link
            to="/user/userPoint"
            class="list-group-item list-group-item-action" style="font-family: Microsoft JhengHei;"
            :class="{'active': this.$route.path == '/user/userPoint'}"
          ><i class="fa fa-diamond" aria-hidden="true"></i> 點數紀錄</router-link>
        </div>
      </div>
      <div class="col-md-9 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!sessionStorage.getItem('nowAcc')) {
      this.$router.push('/');
    }
  }
}
</script>