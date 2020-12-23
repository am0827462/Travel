<template>
  <div id="app">
    <div class="container">
    <Header id="header" msg="Travel"/>
    <button type="button" class="btn btn-primary" v-scroll-to="'#map'">Map</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#videos'">Videos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#photos'">Photos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#quote'">Fun Stuff</button>
    <Map id="map" />
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Videos id="videos"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Lightbox id="photos" />
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button> 
    <Quote id="quote" v-bind:bodyprop="body" v-bind:authorprop="author" v-bind:imageprop="image" v-bind:nasaurlprop="nasaurl" v-bind:explainprop="explain" v-bind:titleprop="title"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button> 
    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import Lightbox from './components/Lightbox.vue'
import axios from 'axios'
import Quote from './components/Quote.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Map,
    Lightbox,
    Quote
  },
  data(){
    return{
      body: null,
      author: null,
      image: null,
      explain: null,
      nasaurl: null,
      title: null
    }
  },
  mounted(){
    axios.get('https://favqs.com/api/qotd')
    .then((response) => {
      this.body = response.data.quote.body
      this.author = response.data.quote.author
    })
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response2) =>{
      this.image = response2.data.message
    })
    axios.get('https://api.nasa.gov/planetary/apod?api_key=e4NNyO8BPGvLPuwshD59hk4UB4FtIjgrJktYOYkI')
    .then((response3) =>{
      this.explain = response3.data.explanation
      this.nasaurl = response3.data.url
      this.title = response3.data.title
    })
  }
}
</script>

<style>
body{
  background-image: url('./assets/background.jpg');
  background-size: cover;
}
.container{
  background-color:rgb(69, 115, 86,.8);
  overflow:auto;
}
.btn{
  margin: 5px;
  background-color:rgb(19, 108, 167);
}
</style>
