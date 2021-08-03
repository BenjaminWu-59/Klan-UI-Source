<demo>
支持disabled
</demo>

<template>
  <Tabs v-model:selected="currentTitle">
    <Tab title="电影">《星际穿越》</Tab>
    <Tab title="动漫">《火影忍者》</Tab>
    <Tab title="纪录片(VIP)" disabled></Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {ref} from 'vue';
export default {
  components:{
    Tabs,Tab
  },
  setup(){
    const currentTitle = ref('电影')
    return{
      currentTitle
    }
  }
};
</script>