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
          title: 'White Sands National Park',
          description: "Hugs",
          src: require('@/assets/current29.jpg'),
        },
        {
          title: 'White Sands National Park',
          description: "Send in the Dog's Eyes",
          src: require('@/assets/current28.jpg'),
        },
        {
          title: 'White Sands National Park',
          description: "New Mexico",
          src: require('@/assets/current27.jpg'),
        },
        {
          title: 'White Sands National Park',
          description: "New Mexico",
          src: require('@/assets/current26.jpg'),
        },
        {
          title: 'White Sands National Park',
          description: "New Mexico",
          src: require('@/assets/current25.jpg'),
        },
        {
          title: 'Carlsbad Carverns',
          description: "Carlsbad, NM",
          src: require('@/assets/current24.jpg'),
        },
        {
          title: 'Carlsbad Carverns',
          description: "Carlsbad, NM",
          src: require('@/assets/current23.jpg'),
        },
        {
          title: 'Carlsbad Carverns',
          description: "Carlsbad, NM",
          src: require('@/assets/current22.jpg'),
        },
        {
          title: 'Tethered Aerostat Radar System',
          description: "West Texas - Middle of Nowhere",
          src: require('@/assets/current21.jpg'),
        },
        {
          title: 'Tethered Aerostat Radar System',
          description: "West Texas - Middle of Nowhere",
          src: require('@/assets/current20.jpg'),
        },
        {
          title: 'Prada Marfa',
          description: "West Texas - Middle of Nowhere",
          src: require('@/assets/current19.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Ross Maxwell Scenic Dr",
          src: require('@/assets/current18.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Santa Elena Canyon",
          src: require('@/assets/current17.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Park Route 12",
          src: require('@/assets/current16.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Park Route 12",
          src: require('@/assets/current15.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Boquillas Canyon Overlook",
          src: require('@/assets/current14.jpg'),
        },
        {
          title: 'Big Bend National Park',
          description: "Rio Grande - You can see Mexico!",
          src: require('@/assets/current13.jpg'),
        },
        {
          title: 'Drive to Alpine TX',
          description: "Sunset",
          src: require('@/assets/current11.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "Prarie Dog",
          src: require('@/assets/current30.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "More Bison!",
          src: require('@/assets/current10.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "Not scared at all",
          src: require('@/assets/current12.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "Bison!",
          src: require('@/assets/current9.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "Apollo Lookin",
          src: require('@/assets/current8.jpg'),
        },
        {
          title: 'Caprock Canyons State Park',
          description: "Visitor Center",
          src: require('@/assets/current7.jpg'),
        },
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