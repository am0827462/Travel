<template>
<div>
<h3>Photos</h3> 
<h5>Fall Trip Favorites</h5>
<div class="row">
  <figure class="col-md-4">
      <img alt="photo1" :src="require('@/assets/photo1.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="photo2" :src="require('@/assets/photo2.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="photo3" :src="require('@/assets/photo3.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="photo4" :src="require('@/assets/photo4.jpg')" class="img-fluid">
  </figure>
    <figure class="col-md-4">
      <img alt="photo5" :src="require('@/assets/photo5.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="photo6" :src="require('@/assets/photo6.jpg')" class="img-fluid">
  </figure>
</div>
<h5>Summer Trip Favorites</h5> 
<div class="row">
  <figure class="col-md-4">
      <img alt="summer1" :src="require('@/assets/summer1.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="summer2" :src="require('@/assets/summer2.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="summer3" :src="require('@/assets/summer3.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="summer4" :src="require('@/assets/summer4.jpg')" class="img-fluid">
  </figure>
    <figure class="col-md-4">
      <img alt="summer5" :src="require('@/assets/summer5.jpg')" class="img-fluid">
  </figure>
  <figure class="col-md-4">
      <img alt="summer6" :src="require('@/assets/summer6.jpg')" class="img-fluid">
  </figure>
</div>
</div>
</template>

<script>
export default {
  name: 'Photos',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{
    color:white
}
img{
    border-radius: 20px;
}
</style>