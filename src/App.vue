<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth //获取页面宽度
    const menuVisible = ref(width <= 500 ?false :true) //>500px，ref为true
    provide('menuVisible',menuVisible) //set,标记为所有后代均可使用
    router.afterEach(()=>{
      if(width <= 500){
        menuVisible.value = false
      }
    })//router.afterEach可以监听路由是否跳转
  }
}
</script>
