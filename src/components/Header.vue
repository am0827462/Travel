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
  background-color:rgb(5, 5, 5, .7);
}
.navbar{
  border-radius: 10px;
  background-image: url('~@/assets/headerback.jpg');
}
p{
  color:rgb(19, 108, 167);
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size:x-large;
  background-color:rgb(5, 5, 5, .7);
}
</style>