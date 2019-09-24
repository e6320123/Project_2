<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
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
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
