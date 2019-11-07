<template>
  <div>
    <!-- 模態框部分 -->
    <div class="loading hide">
      <div class="frame">
        <h1 class="text-center my-font">Loading</h1>
        <div class="gif"></div>
      </div>
    </div>
  </div>
</template>

<style >
.my-font {
  z-index: 99999;
}
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1.0);
  z-index: 1000;
}
.frame {
  height: 45vh; /*can be anything*/
  width: 60vw; /*can be anything*/
  position: absolute;
  top: 40%;
  left: 20%;
  /* right:auto; */
}
/* 動圖樣式 */
.loading .gif {
  background: url("../assets/loading.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>