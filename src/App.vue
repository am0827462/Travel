<template>
  <div id="app">
    <div class="container">
    <Header id="header" msg="Travel"/>
    
    <button type="button" class="btn btn-primary" v-scroll-to="'#videos'">Videos</button>    
    <button type="button" class="btn btn-primary" v-scroll-to="'#photos'">Photos</button>
    <button type="button" class="btn btn-primary" v-scroll-to="'#footer'">Contact Us</button>

    
    <Videos id="videos"/>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>    

    <Lightbox id="photos" />
    <div style="clear: both;"></div>
    <button type="button" class="btn btn-secondary btn-sm" v-scroll-to="'#header'">Back to Top</button>
    <Footer id="footer" />

    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'
import Lightbox from './components/Lightbox.vue'
import axios from 'axios'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Lightbox,
    Footer
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
  background-attachment: fixed;
}
.container{
  background-color:rgba(68, 110, 88, 0.7);
  box-shadow: rgb(51, 51, 51) 10px 0px 40px, rgb(51, 51, 51) -15px 0px 50px;
  overflow:auto;
}
.btn{
  margin: 5px;
  background-color:rgb(19, 108, 167);
}
h3{
  clear:both;
  text-align:center;
}
</style>
