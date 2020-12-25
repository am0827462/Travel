<template>
  <div id="app">
    <div class="container">
    <Header id="header" msg="Travel"/>
    <button type="button" class="btn btn-primary" v-scroll-to="'#current'">Current Trip</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#map'">Map</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#videos'">Videos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#photos'">Past Photos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#quote'">Fun Stuff</button>
    <Current id="current" />
    <div style="clear: both;"></div>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Map id="map" />
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Videos id="videos"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Lightbox id="photos" />
    <div style="clear: both;"></div>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button> 
    <h3>Fun Stuff - API Feeds</h3>
    <Quote id="quote" v-bind:bodyprop="body" v-bind:authorprop="author" v-bind:imageprop="image" v-bind:nasaurlprop="nasaurl" v-bind:explainprop="explain" v-bind:titleprop="title"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Footer />
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
import Footer from './components/Footer.vue'
import Current from './components/Current.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Map,
    Lightbox,
    Quote,
    Footer,
    Current
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
  background-size:cover;
}
.container{
  background-color:rgb(69, 115, 86,.8);
  overflow:auto;
}
.btn{
  margin: 5px;
  background-color:rgb(19, 108, 167);
}
h3{
  clear:both;
}
</style>
