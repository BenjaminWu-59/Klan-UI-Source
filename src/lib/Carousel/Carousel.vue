<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive,toRefs} from 'vue'
export default {
  name: 'Carousel',
  props: {
    autoPlay:{
      type:Boolean,
      default:true
    }, //自动轮播
    duration:{
      type:Number,
      default: 3000
    },//轮播时间
    initial:{
      type:Number,
      default:0
    },//开始出现的item是谁
    hasDot:{
      type:Boolean,
      default:true
    },//是否显示圆角
    hasDirector:{
      type:Boolean,
      default:true
    }//是否显示指向标
  },
  setup(props){
    const state = reactive({
      currentIndex:props.initial
    })
    return{
     ...toRefs(state)
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 100%;
  width: 100%;
}

.inner {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>