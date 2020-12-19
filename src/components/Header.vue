<template>
  <nav class="navbar">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height:150px;
  width:150px;
}
.navbar{
  background-color:rgb(1, 51, 32, .8);
  border-radius: 10px;
}
p{
  color:rgb(19, 108, 167);
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size:x-large
}
</style>