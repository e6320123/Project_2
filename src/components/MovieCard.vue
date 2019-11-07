<template>
  <div class="row">
    <div class="col-12 col-md-3 mb-3" v-for="(item, index) in imgAr" :key="index">
      <div class="card">
        <img src="http://fakeimg.pl/400x300/" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">片名</h5>
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgAr']
}
</script>