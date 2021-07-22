<template>
  <div class="carousel"
       @mouseenter="mouseEnter"
       @mouseleave="mouseLeave"
  >
    <div class="inner">
      <CarDot
       :hasDot="hasDot"
       :itemLen="itemLen"
       :currentIndex="currentIndex"
       :dotBgColor="dotBgColor"
       @dotClick="dotClick"
      />
      <Director class="prev" dir="prev" @dirClick="dirClick"/>
      <Director class="next" dir="next" @dirClick="dirClick"/>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  onMounted, //渲染时
  onBeforeUnmount,//销毁之前
  getCurrentInstance
} from 'vue'

import CarDot from './Dot.vue'
import Director from './Director.vue';

export default {
  name: 'Carousel',
  components:{ CarDot,Director},
  props: {
    autoPlay:{
      type:Boolean,
      default:true
    }, //是否自动轮播
    duration:{
      type:Number,
      default: 100000000
    },//轮播时间
    initial:{
      type:Number,
      default:0
    },//开始出现的item是谁
    hasDot:{
      type:Boolean,
      default:true
    },//是否显示圆点
    hasDirector:{
      type:Boolean,
      default:true
    },//是否显示指向标
    dotBgColor:String // 圆点背景颜色
  },
  setup(props){
    const instance = getCurrentInstance()

    const state = reactive({
      currentIndex:props.initial,
      itemLen:0
    })

    let t = null //自动轮播时间

    const autoPlay = ()=>{
       if(props.autoPlay){
         t = setInterval(()=>{
            setIndex('next')
         },props.duration)
       }
    }//轮播开始

    const setIndex = (dir) =>{
      switch(dir){
        case 'next': //下一个
          state.currentIndex+=1
          if(state.currentIndex === state.itemLen){
              state.currentIndex = 0  //假设item有5个（0~4），则跳到index5时，要转换成0
          }//当前的index与item总长度相等，就直接跳回第一个item，即index为0
          break;
        case 'prev':
          console.log(state.currentIndex);
          state.currentIndex -=1
          if(state.currentIndex === -1){
             state.currentIndex = state.itemLen -1 // 数组长度永远比index多1，跳到最后一个就是length-1
          }
          break;
      }
    }//决定跳转方向

    const dotClick  = (index)=>{
      state.currentIndex = index
    }//点击切换页面事件

    const dirClick = (dir) =>{
        setIndex(dir)  //决定跳转方向传入即可
    }//左右按钮，点击移动


    const mouseEnter = ()=>{
      _clearIntervalFn()
    }//鼠标进入则不执行自动轮播

    const mouseLeave = () =>{
      autoPlay()
    }//鼠标离开继续执行自动轮播

    onMounted(()=>{
      //@ts-ignore
      state.itemLen = instance.slots.default()[0].children.length //拿到实例的slots里面数组的长度，即item有几个
      autoPlay() //渲染时启动
    });
    onBeforeUnmount(()=>{
      _clearIntervalFn()
    })

   function _clearIntervalFn(){
     clearInterval(t) //销毁之前清除
     t = null
   }//清除掉 t 的setInterval执行


    return{
     ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
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
  display: flex;
  overflow: hidden;
}

</style>