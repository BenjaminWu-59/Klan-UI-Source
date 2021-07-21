<template>
<h1>slider示例</h1>
  <div class="waitao">
  <div class="container">
    <Carousel
      :autoPlay="true"
      :duration="3000"
      :initial="3"
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
 background: #0d92ff;
  width:520px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 520px;
  height: 280px;
  margin: 150px auto;
  overflow: hidden;
}
</style>