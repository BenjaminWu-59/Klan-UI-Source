<template>
  <h1>Carousel示例</h1>
  <Demo :components="Carousel1Demo"/>
  <Demo :components="Carousel2demo"/>
  <Demo :components="Carousel3demo"/>
</template>

<script lang="ts">
import Carousel from '../../lib/Carousel/Carousel.vue';
import carItem from '../../lib/Carousel/Item.vue';
import Demo from '../Demo.vue';
import Carousel1Demo from './Carousel1Demo.vue';
import Carousel2demo from './Carousel2demo.vue';
import Carousel3demo from './Carousel3demo.vue';

export default {
  components: {
    Carousel, carItem,Demo
  },
  setup() {
    const carData = ['1', '2', '3', '4'];
    return {
      carData,Carousel1Demo,Carousel2demo,Carousel3demo
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  height: 150px;
  margin: 150px auto;
  overflow: hidden;
}
</style>