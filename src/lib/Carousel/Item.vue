<template>
  <transition>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>

</template>

<script lang="ts">
import {
  getCurrentInstance,
  reactive,
  toRefs,
  watch
} from 'vue';

export default {
  name: 'CarItem',
  setup(){
    const instance = getCurrentInstance()//获取当前实例
    const state = reactive({
      selfIndex:instance.vnode.key, //拿到当前实例的index（侬是第几个？）
      //@ts-ignore
      currentIndex: instance.parent.ctx.currentIndex //从当前实例的父节点拿到当前节点的index
    })

    watch(()=>{
      //@ts-ignore
       return instance.parent.ctx.currentIndex
    },(value)=>{
      state.currentIndex = value
    })//监听页面的Index变化，将变化的index值赋予currentIndex

    return{
      ...toRefs(state)
    }
  }
};
</script>

<style lang="scss" scoped>
.car-item{
  position:absolute;
  background: #b1d9d3;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-enter-active,
.v-leave-active{
  transition:all 250ms linear;
}

.v-enter-active{
  transform: translateX(100%);
}

.v-enter-to{
  transform: translateX(0);
}

.v-leave-active{
  transform: translateX(0);
}

.v-leave-to{
  transform: translateX(-100%);
}


</style>