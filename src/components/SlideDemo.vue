<template>
<h1>slider示例</h1>
  <div class="waitao">
  <div class="container">
    <Carousel
      :autoPlay="true"
      :duration="2500"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
    >
       <carItem v-for="(item,index) in carData" :key="index">
         <div id="Img" class="img">{{item}}</div>
       </carItem>
    </Carousel>
  </div>
  </div>
</template>

<script lang="ts">
import Carousel from '../lib/Carousel/Carousel.vue'
import carItem from '../lib/Carousel/Item.vue'
export default {
  components:{
    Carousel,carItem
  },
  setup(){
    const carData = ['1','2','3','4','5']
    return{
      carData
    }
  }
};
</script>

<style lang="scss" scoped>
.img{
 background: #97b7d0;
  color: darken( #97b7d0,40%);
  width:400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 400px;
  height: 250px;
  margin: 150px auto;
  overflow: hidden;
}
</style>