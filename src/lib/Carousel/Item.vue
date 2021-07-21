<template>
<div class="car-item" v-if="selfIndex === currentIndex">
  <slot></slot>
</div>
</template>

<script lang="ts">
import {getCurrentInstance,reactive,toRefs} from 'vue';

export default {
  name: 'CarItem',
  setup(){
    const instance = getCurrentInstance()//获取当前实例
    const state = reactive({
      selfIndex:instance.vnode.key, //拿到当前实例的index（侬是第几个？）
      currentIndex: instance.parent.ctx.currentIndex //从当前实例的父节点拿到当前节点的index
    })
    console.log(instance);
    return{
      ...toRefs(state)
    }
  }
};
</script>

<style lang="scss" scoped>
#img{
  width:100%
}
.car-item{
  position:absolute;
  height: 100%;
  width: 100%;
  top:0;
  left: 0;
}
</style>