<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view v-if="isRouterAlive" />
    <GoTop></GoTop>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  components: {
    Navbar,
    GoTop
  },
  mounted() {
    // localStorage.setItem('logAccount', 'admin')
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods: {
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "@/assets/scss/style";
</style>
