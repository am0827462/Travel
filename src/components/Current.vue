<template>
  <div>
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
    <h3>Current Trip Photos</h3>
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
          title: 'Palo Duro Canyon State Park',
          description: "Beginning of Lighthouse Trail",
          src: require('@/assets/current1.jpg'),
        },
        {
          title: 'Palo Duro Canyon State Park',
          description: "Put me down",
          src: require('@/assets/current2.jpg'),
        },
        {
          title: 'Palo Duro Canyon State Park',
          description: "Apollo Lookin",
          src: require('@/assets/current3.jpg'),
        },
        {
          title: 'Palo Duro Canyon State Park',
          description: "Apollo Lookin some more",
          src: require('@/assets/current4.jpg'),
        },
        {
          title: 'Palo Duro Canyon State Park',
          description: "Ouch",
          src: require('@/assets/current5.jpg'),
        },
        {
          title: 'Palo Duro Canyon State Park',
          description: "Long Horns!",
          src: require('@/assets/current6.jpg'),
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
</style>