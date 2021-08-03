<demo>
常规用法
</demo>

<template>
  <Tabs v-model:selected="currentTitle">
    <Tab title="电影">《黄飞鸿》</Tab>
    <Tab title="电视剧">《伪装者》</Tab>
    <Tab title="纪录片">《大明宫》</Tab>
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
