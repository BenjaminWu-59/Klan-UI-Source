<demo>
支持hasDot
</demo>

<template>
  <div class="container">
    <Carousel
        :car-Data="carData"
        :autoPlay="true"
        :initial="0"
        :hasDot="true"
    >
      <carItem v-for="(item,index) in carData" :key="index">
        {{ item }}
      </carItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import Carousel from '../../lib/Carousel/Carousel.vue';
import carItem from '../../lib/Carousel/Item.vue';

export default {
  components: {
    Carousel, carItem
  },
  setup() {
    const carData = ['1', '2', '3', '4'];
    return {
      carData
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  height: 150px;
  margin: 50px auto;
  overflow: hidden;
}
</style>