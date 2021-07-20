<demo>
常规用法
</demo>
<template>
    <List :data="data" :buffBottom="10"/>
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
