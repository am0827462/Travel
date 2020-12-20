<template>
  <nav class="navbar" :style="{ backgroundImage: 'url(' + items.backgroundUrl + ')' }">
    <a class="navbar-brand" href="#">
    <img :src="require('@/assets/logo.png')"></a>
    <p> When you have a choice, choose adventure. </p>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  },
  data: function () {
    return {
      items:[
         { backgroundUrl: require('@/assets/headerback.jpg') },
      ]
}}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height:150px;
  width:150px;
}
.navbar{
  border-radius: 10px;
}
p{
  color:rgb(19, 108, 167);
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size:x-large;
}
</style>