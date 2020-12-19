<template>
  <div>
    <h3>Videos</h3>
    <h5>Winter Preview</h5>
    <div class="row">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/J79b1MsYaVg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h5>Past Trips</h5>
    <div class="row">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cdJxRpg39pw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YP3Kr9UOqb0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe{
  padding:10px;
}
h5{
  color:white;
}
</style>
