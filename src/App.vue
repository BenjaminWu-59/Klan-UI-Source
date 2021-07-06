<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)
    provide('menuVisible',menuVisible) //set,标记为所有后代均可使用
  }
}
</script>
