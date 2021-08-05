<demo>
支持duration
</demo>

<template>
  <div class="container">
    <Carousel
        :car-Data="carData"
        :autoPlay="true"
        :duration="2000"
        :initial="0"
    >
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