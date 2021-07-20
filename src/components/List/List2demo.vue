<demo>
支持禁用加载
</demo>
<template>
  <List :data="data" load="loading"/>
</template>

<script lang="ts">
import List from '../../lib/List.vue'
export default {
  components:{
    List
  },
  setup(){
    let data = Array(20).fill(0).map((v,i) =>`${i+1}`)
    return{data}
  }
};
</script>