<template>
  <div id="app">
    <div class="container">
    <Header id="header" msg="Travel"/>
    <button type="button" class="btn btn-primary" v-scroll-to="'#map'">Map</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#videos'">Videos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#photos'">Photos</button>
    <Map id="map" />
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Videos id="videos"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Lightbox id="photos" />
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button> 
    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import Lightbox from './components/Lightbox.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Map,
    Lightbox
  },
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
