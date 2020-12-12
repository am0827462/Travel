<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">
    <img :src="require('@/assets/logo.png')"></a>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Videos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Photos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
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
  background-color:rgb(171, 222, 241);
}
</style>