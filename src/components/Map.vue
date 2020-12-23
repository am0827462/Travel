<template>
<div>
    <h3>Upcoming Trip Map</h3>
    <img alt="map" :src="require('@/assets/map.jpg')" class="img-fluid">
</div>
</template>

<script>
export default {
  name: 'Map',
  props: {

  }
}
</script>
<style scoped>
img{
  border-style: double;
  border-color:rgb(3, 62, 102);
  border-width: thick;
}
</style>