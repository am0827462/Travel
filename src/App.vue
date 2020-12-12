<template>
  <div id="app">
    <div class="container">
    <Header msg="Travel"/>
    <Videos />
    </div>
  </div>
</template>

<script>
import Videos from './components/Videos.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Videos,
    Header
  }
}
</script>

<style>

</style>
