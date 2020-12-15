<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">
    <img :src="require('@/assets/logo.png')"></a>
    <p> When you have to choose, choose adventure. </p>
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
  background-color:rgb(12, 51, 36);
  border-radius: 10px;
}
p{
  color:rgb(19, 108, 167);
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size:x-large
}
</style>