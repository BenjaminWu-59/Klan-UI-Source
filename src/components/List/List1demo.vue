<demo>
虚拟长列表
</demo>
<template>
    <List :data="data"/>
</template>

<script lang="ts">
import List from '../../lib/List.vue'
export default {
  components:{
    List
  },
  setup(){
    let data = Array(100).fill(0).map((v,i) =>`${i+1}`)
    return{data}
  }
};
</script>
