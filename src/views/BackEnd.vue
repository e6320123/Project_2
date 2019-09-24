<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-12 mt-5">
        <div class="list-group">
          <router-link
            to="/backEnd"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd'}"
          >最新消息</router-link>
          <router-link
            to="/backEnd/movieManage"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/movieManage'}"
          >電影</router-link>
          <router-link
            to="/backEnd/memberManage"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/memberManage'}"
          >會員</router-link>
          <router-link
            to="/backEnd/report"
            class="list-group-item list-group-item-action"
            :class="{'active': this.$route.path == '/backEnd/report'}"
          >報表</router-link>
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
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.$router.path);
  }
}
</script>

<style lang="scss" scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>