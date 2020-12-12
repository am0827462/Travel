<template>
  <div id="app">
    <div class="container">
    <Header msg="Travel"/>
    <Nav />
    <Videos />
    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header,
    Nav
  }
}
</script>

<style>

</style>
