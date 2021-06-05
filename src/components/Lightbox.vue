<template>
  <div>
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
    <h3>Past Trip Photos</h3>
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
          title: 'Prada Marfa',
          description: "West Texas - Middle of Nowhere",
          src: require('@/assets/current19.jpg'),
        },
        {
          title: 'Gila Cliff Dwellings',
          description: "Silver City, NM",
          src: require('@/assets/current31.jpg'),
        },
        {
          title: 'Petrified Forest National Park',
          description: "Crystal Forest Trail",
          src: require('@/assets/current48.jpg'),
        },
        {
          title: 'Petrified Forest National Park',
          description: "Blue Mesa Trailhead",
          src: require('@/assets/current45.jpg'),
        },
        {
          title: 'White Sands National Park',
          description: "Sand in the Dog's Eyes",
          src: require('@/assets/current28.jpg'),
        },
        {
          title: 'Gila National Forest',
          description: "Catwalk Trail",
          src: require('@/assets/current36.jpg'),
        },
        {
          title: 'Great Smoky Mountains National Park',
          description: "Newfound Gap near Clingmans Dome",
          src: require('@/assets/photo1.jpg'),
        },
        {
          title: 'Great Smoky Mountains National Park',
          description: "Foothills Parkway",
          src: require('@/assets/photo2.jpg'),
        },
        {
          title: 'Great Smoky Mountains National Park',
          description: "Roaring Fork Motor Nature Trail",
          src: require('@/assets/photo3.jpg'),
        },
        {
          title: 'Land Between the Lakes National Recreation Area',
          description: "Cedar Pond Picnic Area",
          src: require('@/assets/photo4.jpg'),
        },
        {
          title: 'Land Between the Lakes National Recreation Area',
          description: "Elk and Bison Prarie Road",
          src: require('@/assets/photo5.jpg'),
        },
        {
          title: 'Great Smoky Mountains National Park',
          description: "Oconaluftee River Trail",
          src: require('@/assets/photo6.jpg'),
        },
        {
          title: 'Mammoth Cave National Park',
          description: "Kentucky",
          src: require('@/assets/summer1.jpg'),
        },
                {
          title: 'Cuyahoga Valley National Park',
          description: "Mary Campbell Cave",
          src: require('@/assets/summer2.jpg'),
        },
        {
          title: 'Rock & Roll Hall of Fame',
          description: "Cleveland, OH",
          src: require('@/assets/summer3.jpg'),
        },
        {
          title: 'Frankenmuth, MI',
          description: "River Place Shops",
          src: require('@/assets/summer4.jpg'),
        },
        {
          title: 'Niagara Falls',
          description: "New York",
          src: require('@/assets/summer5.jpg'),
        },
        {
          title: 'Pictured Rocks National Lakeshore',
          description: "Grand Marais, MI",
          src: require('@/assets/summer6.jpg'),
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
  text-align:center;
}
</style>