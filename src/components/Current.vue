<template>
  <div class="align-middle">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
    <h3>May Trip Photos</h3>
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      items: [
        {
          title: 'Nohoch Che-en Caves Branch Archaelogical Reserve',
          description: "Cave Tubing!",
          src: require('@/assets/belize1.jpg'),
        },
        {
          title: 'Xunantunich Mayan Ruins',
          src: require('@/assets/belize2.jpg'),
        },
        {
          title: 'Caracol Natural Monument Reservation',
          src: require('@/assets/belize3.jpg'),
        },
        {
          title: 'Caracol Natural Monument Reservation',
          src: require('@/assets/belize4.jpg'),
        },
        {
          title: 'Lamanai Archelaelogical Reserve',
          src: require('@/assets/belize5.jpg'),
        },
        {
          title: 'Lamanai Archelaelogical Reserve',
          src: require('@/assets/belize6.jpg'),
        },
        {
          title: 'Shark Ray Alley',
          description: "Crystal Forest Trail",
          src: require('@/assets/belize7.jpg'),
        },
        {
          title: 'Airplane Tour',
          description: "The Great Blue Hole",
          src: require('@/assets/belize8.jpg'),
        },
        {
          title: 'Secret Beach',
          description: "Tacos!",
          src: require('@/assets/belize9.jpg'),
        },
      ],
      index: null
    };
  },
};
</script>
<style scoped>
.image{
    float:left;
    margin: 10px;
    width: 350px;
    height: 250px;
    border-radius:20px;
    background-size: cover;
}
h3{
  color:white;
}
</style>