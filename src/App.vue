<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth //获取页面宽度
    console.log(width);
    const menuVisible = ref(width > 500) //>500px，ref为true
    provide('menuVisible',menuVisible) //set,标记为所有后代均可使用
  }
}
</script>
