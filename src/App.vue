<template>
  <div id="app">
    <div class="container">
    <Header msg="Travel"/>
    <button type="button" class="btn btn-primary" v-scroll-to="'#videos'">Videos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#photos'">Photos</button>
    <Videos id="videos"/>
    <Photos id="photos"/>
    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'
import Photos from './components/Photos.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Photos
  }
}
</script>

<style>
body{
  background-image: url('./assets/background.jpg');
  background-size: cover;
}
.container{
  background-color:rgb(69, 115, 86,.8)
}
.btn{
  margin: 5px;
  background-color:rgb(19, 108, 167);
}
</style>
